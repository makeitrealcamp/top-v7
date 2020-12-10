const req = require('supertest');
const jwt = require('jsonwebtoken');
const { connect, disconnect, cleanup } = require('../db');
const app = require('../app');
const User = require('../models/user.model')
const Task = require('../models/task.model')

describe('task', () => {
  let user;
  let token;

  beforeAll(async () => {
    await connect()
  })

  beforeEach(async () => {
    await cleanup()

    const data = { email: 'test@test.com', password: '12345' }
    // const { body: { token } } = await req(app).post('/users/signup').send(data)
    user = await User.create(data)
    token = jwt.sign(
      { id: user._id },
      process.env.SECRET,
      { expiresIn: 60 * 60 * 24 * 365 }
    );
  })

  afterAll(async () => {
    await disconnect()
  })

  it('should not create task if user is not authenticated', async () => {
    const task = { name: 'task 1' }
    const res = await req(app).post('/tasks/').send(task)

    expect(res.statusCode).toBe(401)
    expect(res.body.message).toMatch(/your session has expired/i)
  })

  it('should not create task if token is empty', async () => {
    const task = { name: 'task 1' }
    const res = await req(app)
      .post('/tasks/')
      .send(task)
      .set('Authorization', 'Bearer ')
      .set('Content-Type', 'application/json')

    expect(res.statusCode).toBe(401)
    expect(res.body.message).toMatch(/your session has expired/i)
  })

  it('should not create task if token is invalid', async () => {
    const task = { name: 'task 1' }
    const res = await req(app)
      .post('/tasks/')
      .send(task)
      .set('Authorization', 'Bearer 12345')
      .set('Content-Type', 'application/json')

    expect(res.statusCode).toBe(401)
    expect(res.body.message).toMatch(/jwt malformed/i)
  })

  it('should create task if user is authenticated', async () => {
    const task = { name: 'task 1' }
    const res = await req(app).post('/tasks/').send(task).set('Authorization', `Bearer ${token}`)

    expect(res.statusCode).toBe(200)
    expect(res.body.name).toBe(task.name)
    expect(res.body.done).toBeFalsy()
    expect(res.body.user).toBe(user._id.toString())
  })

  it('should update task if user is authenticated and is owner', async () => {
    const data = { name: 'task 1' }
    const task = await Task.create({ ...data, user })

    const res = await req(app).put(`/tasks/${task._id}`).set('Authorization', `Bearer ${token}`)

    expect(res.statusCode).toBe(200)
    expect(res.body.done).toBeTruthy()
  })

  it('should not update task if user is not the owner', async () => {
    const data = { name: 'task 1' }
    const user2 = await User.create({ email: 'test2@test.com', password: '12345' })
    const task = await Task.create({ ...data, user: user2 })

    const res = await req(app).put(`/tasks/${task._id}`).set('Authorization', `Bearer ${token}`)

    expect(res.statusCode).toBe(400)
    expect(res.body.message).toMatch(/you are not allowed/i)
  })

  it('should delete task if user is authenticated and is owner', async () => {
    const data = { name: 'task 1' }
    const task = await Task.create({ ...data, user })

    const res = await req(app).delete(`/tasks/${task._id}`).set('Authorization', `Bearer ${token}`)

    expect(res.statusCode).toBe(200)
    expect(res.body.message).toMatch(/task deleted/i)
  })

  it('should not delete task if user is not the owner', async () => {
    const data = { name: 'task 1' }
    const user2 = await User.create({ email: 'test2@test.com', password: '12345' })
    const task = await Task.create({ ...data, user: user2 })

    const res = await req(app).delete(`/tasks/${task._id}`).set('Authorization', `Bearer ${token}`)

    expect(res.statusCode).toBe(400)
    expect(res.body.message).toMatch(/you are not allowed/i)
  })

  it('should list user tasks', async () => {
    const data = { name: 'task 1' }
    await Task.create({ ...data, user })

    const res = await req(app).get('/tasks/').set('Authorization', `Bearer ${token}`)

    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveLength(1)
  })

  it('should show task details', async () => {
    const data = { name: 'task 1' }
    const task = await Task.create({ ...data, user })

    const res = await req(app).get(`/tasks/${task._id}`).set('Authorization', `Bearer ${token}`)

    expect(res.statusCode).toBe(200)
    expect(res.body._id).toBe(task._id.toString())
    expect(res.body.name).toBe(data.name)
  })

  it('should not show task if user is not the owner', async () => {
    const data = { name: 'task 1' }
    const user2 = await User.create({ email: 'test2@test.com', password: '12345' })
    const task = await Task.create({ ...data, user: user2 })

    const res = await req(app).get(`/tasks/${task._id}`).set('Authorization', `Bearer ${token}`)

    expect(res.statusCode).toBe(400)
    expect(res.body.message).toMatch(/you are not allowed/i)
  })
})
