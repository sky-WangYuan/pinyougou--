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

 export const showToast = (title)=>{
     return new Promise((resolve)=>{
         wx.showToast({
             title,
             icon: 'none',
             duration: 1500,
             mask: false,
             success: resolve
         });
     })
 }