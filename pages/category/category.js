// pages/category/category.js
import {categoryDatas} from './../../request/request'
import {showLoading, hideLoading} from '../../utils/asyncWX'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 0, //是否激活选中样式
    categoryLeft: [],
    categoryRight: []
  },
  categoryList: [], //分类列表数据-需要处理才能用

  onLoad: function (options) {
    //1-是否能从本地取数据
    let local_cates = wx.getStorageSync('cates');

    if(local_cates){
      //本地有数据
      console.log("本地有数据")

      let over_time = Date.now() - local_cates.time > 10 * 1000

      if(over_time){
        //本地数据过期了: 请求新数据 + 本地保存
        console.log("本地数据过期了")
        this.getCategory()  

      }else {
        console.log("本地数据没过期")
        
        this.categoryList = local_cates.data  //将本地中data放在数组中

        //处理categoryList数组中数据
        let categoryLeft = this.categoryList.map(item=>item.cat_name)
        let categoryRight = this.categoryList[0].children

        //保存data中
        this.setData({
          categoryLeft,
          categoryRight
        })

      }

    } else {

      //本地没数据
      console.log("本地没数据，请求新数据")
      this.getCategory()
    }

  },

  //获取数据 + 本地保存
  async getCategory(){
    
    await showLoading() //请求前：显示加载框
    let res = await categoryDatas() 
    
    this.categoryList = res 
    console.log(this.categoryList)
    
    //本地保存数据
    wx.setStorageSync('cates', {data: res, time: Date.now()}); //将数据和时间保存在本地
    
    //处理数据
    let categoryLeft = this.categoryList.map(item=>item.cat_name)
    let categoryRight = this.categoryList[0].children
    
    //保存data中
    this.setData({
      categoryLeft,
      categoryRight
    })
    await hideLoading()
  },

  //点击左侧导航栏
  clickNav(e){
    // console.log(e.currentTarget.dataset.index)
    let index = e.currentTarget.dataset.index
    this.setData({
      activeIndex: index,
      categoryRight: this.categoryList[index].children
    })
  }
})