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

export const hideLoading = ()=>{
    return new Promise((resolve)=>{
        wx.hideLoading();
    })
}