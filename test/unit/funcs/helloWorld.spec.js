import { helloWorld } from '@/utils/common'

it('hello world func test', () => {
  expect(helloWorld()).toEqual('hello world')
})