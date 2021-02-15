import {detail} from '../../request/request'
import {showLoading, hideLoading} from '../../utils/asyncWX'
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
    console.log(res)

    this.setData({
      detailData: res
    })

    await hideLoading()
  }
})