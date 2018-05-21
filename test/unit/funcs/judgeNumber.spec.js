import { isEven, isOdd } from '@/utils/common'

describe('judge number test', () => {
  it('isEven number', () => {
    expect(isEven(8)).toBeTruthy()
  })
  it('isOdd number', () => {
    expect(isOdd(9)).toBeTruthy()
  })
  it('is not even number', () => {
    expect(isEven(7)).toBeFalsy()
  })
  it('is not odd number', () => {
    expect(isOdd(6)).toBeFalsy()
  })
})

describe('xxx', () => {
  it('test xxx', () => {
    expect(true).toBeTruthy()
  })
})