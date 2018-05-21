import Nightmare from 'nightmare'
import { getScreenshotUrl } from 'jest-vue-report'

jest.setTimeout(15000)

describe('Login', () => {
  let page = null
  beforeEach(() => {
    page = Nightmare({show: true}).viewport(1024, 768)
    page.goto('http://www.xingyun361.com')
  })
  it('should login with failure', async () => {
    await page
      .click('.btn.login_btn1.l')
      .wait('#username_0')
      .click('#login_bt')
      .wait('#area_error_msg')
    await  page.screenshot(getScreenshotUrl('should login with failure'))
    const content = await page.wait('#area_error_msg')
      .evaluate(() => document.querySelector('#area_error_msg').innerHTML).end()
    await page.end()
    console.log('content:>>' + content)
    expect(content).toBe('请输入用户名')
  })
})