import Toast from './Toast'
const obj = {}

// install 是默认的方法。当外界在 use 这个组件的时候，就会调用本身的 install 方法（对外暴露一个install方法即可），同时传一个 Vue 这个类的参数。
obj.install = function(Vue) {
  // 1.创建组件构造器
  const ToastConstructor = Vue.extend(Toast)
  // 2.news的方式，根据组件构造器，可以创建出来一个组件对象
  const toast = new ToastConstructor()
  // 3.将组件对象手动的挂载到某个一个元素上，此时，toast.$el对应的就是div了
  toast.$mount(document.createElement('div'))
  // 4.将这个div作为body的子元素添加进去
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
  console.log("巴拉啦小魔仙")
}
export default obj
