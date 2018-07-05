import Vue from 'vue'
import SuccessAlert from '@/components/UI_elements/SuccessAlert'

describe('SuccessAlert.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(SuccessAlert)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.alert-heading').textContent)
      .toEqual('Success')
  })
})