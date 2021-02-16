import {address} from '../../utils/asyncWX'
Page({
  data: {
    addressList: {}
  },

  onLoad(){
    //页码加载：获取本地收货地址
    this.getLocalAddress()
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

  //点击获取地址信息
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