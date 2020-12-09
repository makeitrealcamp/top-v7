const req = require('supertest');
const { connect, disconnect, cleanup } = require('../db');
const app = require('../app');
const User = require('../models/user.model');

describe('user', () => {
  beforeAll(async () => {
    await connect()
  })

  beforeEach(async () => {
    await cleanup()
  })

  afterAll(async () => {
    await disconnect()
  })

  it('should create a user correctly', async () => {
    const user = { email: 'test@test.com', password: '12345' }
    const res = await req(app).post('/users/signup').send(user)

    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty('token')
    expect(res.body.token).toMatch(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/)
  })

  it('should not create user when there is no email', async () => {
    const user = { password: '12345' }
    const res = await req(app).post('/users/signup').send(user)

    expect(res.statusCode).toBe(400)
    expect(res.body.message).toMatch(/email is required/i)
  })

  it('should not create user when email is invalid', async () => {
    const user = { email: 'test', password: '12345' }
    const res = await req(app).post('/users/signup').send(user)

    expect(res.statusCode).toBe(400)
    expect(res.body.message).toMatch(/email is not valid/i)
  })

  it('should not create user when email already exists', async () => {
    const user = { email: 'test@test.com', password: '12345' }
    // await req(app).post('/users/signup').send(user)
    await User.create(user)
    const res = await req(app).post('/users/signup').send(user)

    expect(res.statusCode).toBe(400)
    expect(res.body.message).toMatch(/email already exists/i)
  })

  it('should signin user correctly', async () => {
    const user = { email: 'test@test.com', password: '12345' }
    await User.create(user)
    const res = await req(app).post('/users/signin').send(user)

    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty('token')
  })

  it('should not signin user if email does not exist', async () => {
    const user = { email: 'test@test.com', password: '12345' }
    const res = await req(app).post('/users/signin').send(user)

    expect(res.statusCode).toBe(400)
    expect(res.body.message).toMatch(/invalid email or password/i)
  })

  it('should not signin if incorrect password', async () => {
    const user = { email: 'test@test.com', password: '12345' }
    await User.create(user)
    const res = await req(app).post('/users/signin').send({ ...user, password: '1' })

    expect(res.statusCode).toBe(400)
    expect(res.body.message).toMatch(/invalid email or password/i)
  })
})
