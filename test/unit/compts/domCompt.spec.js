import helloWorld from '@/components/HelloWorld.vue'
import { mount } from '@vue/test-utils'
import sinon from 'sinon'

describe('hello world contain h2 dom', () => {
  test('render Essential Links dom value', () => {
    const wrapper = mount(helloWorld)
    expect(wrapper.find('h2').text()).toBe('Essential Links')
  })
})

describe('hello world click event', () => {
  it('get click value', () => {
    const spy = sinon.spy()
    const wrapper = mount(helloWorld)
    wrapper.setProps({
      clickCb: spy
    })
    wrapper.find('#testBtn').trigger('click')
    expect(spy.calledWith('这是测试按钮')).toBe(true)
  })
})
