import {address, userSetting, OpenuserSetting} from '../../utils/asyncWX'
Page({
  data: {
    addressList: {},
    localCart: []  //本地购物车商品
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
  },

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