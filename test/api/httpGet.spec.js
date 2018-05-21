import { ironRequest } from '@/utils/common'

describe('iron http get test', () => {
  it('getBanner.html', async () => {
    let { data } = await ironRequest('getBanner.shtml', {}, 'get')
    console.log(data)
    if (data.returncode === '0') {
      expect(typeof data.banners).toBe('object')
    } else {
      expect(data.returncode).toBe('-1')
    }
  })
  // it('recommendList.shtml', async () => {
  //   let { data } = await ironRequest('recommendList.shtml',{page_size: 10, type: 'res'}, 'get')
  //   console.log(data)
  //   if (data.returncode === '0') {
  //     // expect(typeof data.)
  //     expect(typeof data.tabs).toBe('object')
  //   } else {
  //     expect(data.returncode).toBe('-1')
  //   }
  // })
})