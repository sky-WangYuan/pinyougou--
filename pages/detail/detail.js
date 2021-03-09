import {detail} from '../../request/request'
import {showLoading, hideLoading, showToast} from '../../utils/asyncWX'
Page({
  data: {
    detailData: {}
  },
  onLoad(query){
    //获取商品id
    let id = query.goods_id
    console.log(id)

    //获取详情数据
    this.getDetail(id)
  },

  async getDetail(id){

    //加载框
    await showLoading()
    let res = await detail(id)
    // console.log(res)

    this.setData({
      detailData: res
    })

    await hideLoading()
  },

  //加入购物车
 async addCart(){
    let {goods_id,goods_name, goods_price, goods_small_logo } = this.data.detailData
    //1、本地获取数据（购物车），无：空数组
    //2、判断购物车中有无当前点击的商品id
    //3、有：商品数量累加；无：将商品组成对象添加到购物车数组中
    //4、购物车保存在本地

    let cart = wx.getStorageSync('cart') || [];
    let goods = cart.find(item=>item.goods_id===goods_id)

    if(goods){
      //购物车中有商品
      goods.goods_num++
    }else {
      //无商品: 放入购物车中
      cart.push({
        goods_id,
        goods_name,
        goods_price,
        goods_small_logo,
        goods_num: 1,
        isChecked: true
      })
    }

    wx.setStorageSync('cart', cart); //购物车本地保存

    //提示框
    await showToast('已加入购物车', 'success')
  }
})