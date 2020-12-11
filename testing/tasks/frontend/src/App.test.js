import puppeteer from 'puppeteer'

describe('App', () => {
  it('should redirect to home after successfully signing up', async () => {
    const browser = await puppeteer.launch({ headless: false })

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

    await browser.close()
  })
})
