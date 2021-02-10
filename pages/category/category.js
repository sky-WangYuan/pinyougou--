// pages/category/category.js
import {categoryDatas} from './../../request/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 0, //是否激活选中样式
    categoryLeft: [],
    categoryRight: []
  },
  catagoryList: [], //分类列表数据-需要处理才能用

  onLoad: function (options) {
    this.getCategoryLeft()
  },

  //获取分类左侧导航
  async getCategoryLeft(){

    //1-请求数据
    let res = await categoryDatas()
    this.catagoryList=res
    // console.log(res)

    //2-处理数据(给左侧右侧分别使用), 变量接收
    let categoryLeft = this.catagoryList.map(item=>item.cat_name)
    let categoryRight = this.catagoryList[0].children //刚进来时,显示第一个导航栏的数据

    //3-保存数据
    this.setData({
      categoryLeft,
      categoryRight
    })
  },

  //点击左侧导航栏
  clickNav(e){
    // console.log(e.currentTarget.dataset.index)
    let index = e.currentTarget.dataset.index
    this.setData({
      activeIndex: index,
      categoryRight: this.catagoryList[index].children
    })
  }
})