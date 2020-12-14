import puppeteer from 'puppeteer'

describe('App', () => {
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false })
  })

  afterAll(async () => {
    await browser.close()
  })

  it('should redirect to home after successfully signing up', async () => {
    const page = await browser.newPage()

    await page.goto('http://localhost:3000')

    await page.waitForSelector('a[href="/signup"]')
    await page.click('a[href="/signup"]')

    await page.waitForSelector('#email')
    await page.type('#email', 'test@test.com', { delay: 100 })
    await page.type('#password', '12345', { delay: 100 })
    await page.click('button[data-testid="signup"]')

    await page.waitForSelector('.tasks')
    const content = await page.$eval('.tasks > p', el => el.innerHTML)

    expect(content).toMatch(/No tasks created yet/)

    await page.close()
  })

  it('should create task and list the user\'s task', async () => {
    const page = await browser.newPage()

    await page.goto('http://localhost:3000')

    await page.waitForSelector('a[href="/create"]')
    await page.click('a[href="/create"]')

    await page.waitForSelector('#name')
    await page.type('#name', 'task 1', { delay: 100 })
    await page.click('#name ~ button')

    await page.waitForSelector('.success-message')
    const content = await page.$eval('.success-message', el => el.innerHTML)

    expect(content).toMatch(/task created successfully/i)

    await page.reload()
    await page.waitForSelector('#name')
    await page.type('#name', 'task 2', { delay: 100 })
    await page.click('#name ~ button')

    await page.click('a[href="/"]')

    await page.waitForSelector('.tasks')
    await page.screenshot({ path: './tasks.png' })

    const tasks = await page.$$('.task')

    expect(tasks).toHaveLength(2)
  })
})
