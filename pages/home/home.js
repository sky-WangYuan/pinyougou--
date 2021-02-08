// pages/home/home.js
import {banner} from '../../request/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isHiddenTop: true, //默认不显示顶部按钮
    bannerList:[]
  },
  
  /* 监听页面加载 */
  onLoad: function (options) {
    this.getBanner()
  },

  async getBanner(){
    //接口连接已关闭
    // let res = await banner()
    // console.log(res)
    // this.setData({
    //   bannerList: res.data
    // })
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