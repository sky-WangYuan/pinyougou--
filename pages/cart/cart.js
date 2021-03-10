import {address, userSetting, OpenuserSetting, sureModal} from '../../utils/asyncWX'
Page({
  data: {
    addressList: {},
    localCart: [] , //本地购物车商品
    isChecked: true,
    goods_count:0,
    goods_price: 0
  },

  onLoad(){
    
    this.getLocalAddress() //页码加载：获取本地收货地址

    this.getLocalCart() //获取本地购物车


  },
  onShow(){
    this.getLocalCart() //获取最新数据
  },

  getLocalCart(){
    //获取本地购物车，若获取不到：设置空数组 或者 return返回都可
    let localCart = wx.getStorageSync('cart') || [];
    // console.log('本地购物车',localCart)
    
    this.setData({
      localCart
    })

    //计算购物车 结算和合计
    this.setCount(localCart)
  },
  // -------------- 购物车逻辑开始 --------------------------

  
  //点击复选框
  changeCheckbox(e){
    let {localCart} = this.data
    let {id} = e.currentTarget.dataset

    let goods = localCart.find(item=>item.goods_id===id)
    goods.isChecked = !goods.isChecked
    
    this.setData({
      localCart
    })

    //调用计算价格
    this.setCount(localCart)
  },

  //计算价格和数量
  setCount(localCart){
    // console.log(localCart)


    let goods_count=0;
    let goods_price=0;
    
    localCart.forEach(item=>{
      if(item.isChecked){
        goods_count+=item.goods_num
        goods_price += item.goods_num * item.goods_price
      }
    })

    this.setData({
      goods_count,
      goods_price
    })
  },

 async clickCount(e){
    let {localCart} = this.data
    let {count, id} = e.currentTarget.dataset
    
    let goods= localCart.find(item=>item.goods_id===id)
    
    //判断1的时候点击-
    if(goods.goods_num===1 && count===-1){
      let {confirm} = await sureModal(); //获取点击的操作
      //点击确定-删除该商品
      if(confirm){
        localCart = localCart.filter(item=>item.goods_id!==id)
      }
    } else {
      goods.goods_num+=count
    }

    this.setData({
      localCart
    })

    //从新计算价格
    this.setCount(localCart)
  },


  // -------------- 购物车逻辑结束 --------------------------


  //点击【获取收获地址】按钮
  async clickGetAddress(){

    //1、获取授权
    let getSetting = await userSetting();
    console.log('获取权限设置', getSetting.authSetting['scope.address'])

    //2、判断-共3种结果：undefined false true
    if(getSetting.authSetting['scope.address'] === false){
      //手动开启客户端设置
      await OpenuserSetting()
    } else {
    
      this.getAddress() //点击按钮（显示授权弹窗）
    }

  },

  //获取本地收获地址
  getLocalAddress(){

    let localAddress = wx.getStorageSync('address');
    // console.log('本地收货地址',localAddress);

    //判断无收货地址：返回不做处理
    if(!localAddress) return;

    this.setData({
      addressList: localAddress
    })

    
  },

  //点击获取地址信息（显示授权弹窗）
 async getAddress(){

    let addr = await address();
    //将完整地址拼接，添加到addr中
    addr.addressDetail = addr.provinceName+addr.cityName+addr.countyName+addr.detailInfo
    console.log(addr)

    this.setData({
      addressList: addr
    })

    //本地保存地址数据
    wx.setStorageSync('address', addr);
  }
})