import {goodsList} from '../../request/request'
import { showLoading ,hideLoading, showToast} from '../../utils/asyncWX'
Page({
  data: {
    tabs: [
      {
        id:1,
        name: '综合',
        isActive: true
      },
      {
        id:2,
        name: '销量',
        isActive: false
      },
      {
        id:3,
        name: '价格',
        isActive: false
      },
    ],
    cat_id: 0,
    _page: 0,
    pagesize: 10,
    goodsList: [], //放每个商品的列表
    hasMore: true  //是否还加载数据
  },
  onLoad(e){
    // console.log(e)
    let {cat_id, cat_name} = e

    //修改页面标题
    wx.setNavigationBarTitle({
      title: cat_name
    });

    //保存传递的id，用于请求数据
    this.setData({
      cat_id
    })

    //获取商品列表数据
    this.getGoodsList()
  },
  changeSelect(e){

    //修改isActive为true
    let id= e.detail

    let newTabs = [...this.data.tabs] //解构给新的数组
    newTabs.forEach(item=>{
      item.id===id? item.isActive=true : item.isActive = false
    })

    this.setData({ //修改赋值给tabs
      tabs: newTabs
    })
  },

  //根据id请求数据
  async getGoodsList(){
    let {cat_id, _page} = this.data
    _page++

    await showLoading()
    let res = await goodsList(cat_id, _page)
    // console.log(res)

    this.setData({
      goodsList: [...this.data.goodsList, ...res.goods], //追加数据
      _page,
      hasMore: _page< Math.ceil( res.total / 10 ) //当前页 < 总页数/10
    })

    await hideLoading()

  },

  //上拉刷新
 async onReachBottom(){
    
    let {hasMore} = this.data //解构hasMore
    if(!hasMore) {
      await showToast('没有数据了~~')
      return 
    } 
    // console.log("上拉刷新")
    this.getGoodsList()
  }

})