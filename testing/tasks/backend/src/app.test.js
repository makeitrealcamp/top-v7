const req = require('supertest');
const { connect, disconnect, cleanup } = require('./db');
const app = require('./app');

describe('app', () => {
  beforeAll(async () => {
    await connect()
  })

  beforeEach(async () => {
    await cleanup()
  })

  afterAll(async () => {
    await disconnect()
  })

  it('should GET / with success code', async () => {
    const res = await req(app).get('/');

    expect(res.statusCode).toBe(200)
    expect(res.text).toMatch(/hello world/i)
  })
})
