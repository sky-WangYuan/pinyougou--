//用promise封装一个请求
function fetch(option){
    return new Promise((resolve, reject)=>{
        //异步请求
        wx.request({
            url: option.url,
            method: option.method || "GET",
            data: option.data || {},
            header: option.header || {},
            success: res=>resolve(res),
            fail: err=>reject(err)
        })
    })
}

export default fetch