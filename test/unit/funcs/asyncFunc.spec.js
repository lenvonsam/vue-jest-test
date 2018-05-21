import { asyncGetNumber } from '@/utils/common'

it('async number func', (done) => {
  asyncGetNumber(5, (result) => {
    expect(result).toBe(15)
    done()
  })
})