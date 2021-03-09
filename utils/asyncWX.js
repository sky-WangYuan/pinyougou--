/*
 * 显示加载框
 */
export const showLoading = () => {
    return new Promise((resolve)=>{
        //异步代码
        wx.showLoading({
            title: '加载中',
            mask: true,
            success: resolve
          })
    })
}


/*
 * 隐藏加载框
 */
export const hideLoading = ()=>{
    return new Promise((resolve)=>{
        wx.hideLoading();
    })
}


/*
 * 提示框（需要：传递文字）
 */

 export const showToast = (title, success)=>{
     return new Promise((resolve)=>{
         wx.showToast({
             title,
             icon: success || 'none',
             duration: 1500,
             mask: false,
             success: resolve
         });
     })
 }

 /**
  * 获取购物车的收货地址
  * */
 export const address=()=>{
     return new Promise((resolve, reject)=>{
         //异步代码
         wx.chooseAddress({
             success: resolve,
             fail: reject
         });
     })
 }
 
 /**
  * 购物车-获取用户授权能力（点击【收货地址按钮】确定还是取消操作）
  */

  export const userSetting = ()=>{
      return  new Promise((resolve, reject)=>{
          //异步操作
          wx.getSetting({
              success: resolve,
              fail: reject
          });
      })
  }


 /**
  * 购物车-打开用户授权能力（处理点击【收货地址按钮】取消操作）
  */

  export const OpenuserSetting = ()=>{
      return  new Promise((resolve, reject)=>{
          //异步操作
          wx.openSetting({
              success: resolve,
              fail: reject
          });
      })
  }


 /**
  * 购物车-确认取消 提示框
  */

  export const sureModal = ()=>{
      return  new Promise((resolve)=>{
          //异步操作
          wx.showModal({
              title: '温馨提示',
              content: '确定删除吗',
              showCancel: true,
              cancelText: '取消',
              cancelColor: '#000000',
              confirmText: '确定',
              confirmColor: '#3CC51F',
              success: resolve
          });
      })
  }