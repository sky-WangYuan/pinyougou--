// components/tab/tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickTap(e){

      //获取点击的id
      let id=e.currentTarget.dataset.id
      // console.log(id)

      //触发父页面子定义事件
      this.triggerEvent('myTab', id)
    }
  }
})
