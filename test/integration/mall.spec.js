import Nightmare from 'nightmare'
import { getScreenshotUrl } from 'jest-vue-report'

describe('Mall List', () => {
  let page = null
  beforeEach(() => {
    page = Nightmare({show: true}).viewport(1024, 768)
    page.goto('http://www.xingyun361.com')
  })

  it('get product list item', async () => {
    let url = await page.wait('#active2').evaluate(() => document.querySelector('#active2').href)
    console.log('商城url:>>' + url)
    if (url !== '') {
      await page.goto(url)
        .wait('#ipt_goods_name')
        .insert('#ipt_goods_name', 'H型钢')
        .click('#queryButton')
        .wait('.my_tbody .my_tr .my_td')
      await  page.screenshot(getScreenshotUrl('get product list item'))
      let content = await page.wait('.my_tbody .my_tr .my_td')
        .evaluate(() => document.getElementsByClassName('my_td')[0].children[0].innerHTML).end()
      console.log(content)
      expect(content).toBe('H型钢')
    } else {
      console.log('listURL is empty')
    }
  })
})