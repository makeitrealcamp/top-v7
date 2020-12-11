const puppeteer = require('puppeteer');

// IIFE
// Immediately Invoked Function Expression

(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 250 })
  // const browser = await puppeteer.launch()
  const incognito = await browser.createIncognitoBrowserContext()

  // const page = await browser.newPage()
  const page = await incognito.newPage()

  await page.goto('https://google.com')

  await page.waitForSelector('input.gLFyf.gsfi')
  await page.type('input.gLFyf.gsfi', 'hola mundo', { delay: 100 })
  await page.click('input.gNO89b')

  await page.screenshot({ path: './screenshot.png' })

  await browser.close()
})()
