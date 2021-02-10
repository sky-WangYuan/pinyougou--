// pages/home/home.js
import {banner, menu, floor} from '../../request/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isHiddenTop: true, //默认不显示顶部按钮
    bannerList:[],
    menuList: [],
    floorList: []
  },
  
  /* 监听页面加载 */
  onLoad: function (options) {
    this.getBanner()
    this.getMenu()
    this.getFloor()
  },

  //获取轮播图
  async getBanner(){
    //已更换新的接口
    let res = await banner()
    // console.log(res)
    this.setData({
      bannerList: res
    })
  },
  //获取菜单数据
  async getMenu(){
    let res = await menu()
    // console.log(res)
    this.setData({
      menuList: res
    })
  },
  async getFloor(){
    let res = await floor()
    console.log(res)
    this.setData({
      floorList: res
    })
  },

  //页面滚动
  onPageScroll(e){
    // console.log(e.scrollTop)
    e.scrollTop >= 300 ? this.setData({isHiddenTop: false}) : this.setData({isHiddenTop: true})
  },
  //点击回到顶部
  toTop(){
    // console.log("回到顶部")
    wx.pageScrollTo({
      scrollTop:0,
      duration: 300
    })
  }

})