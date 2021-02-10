//用promise封装一个请求

let base_url = 'https://uinav.com/api/public/v1'
function fetch(option){
    return new Promise((resolve, reject)=>{
        //异步请求
        wx.request({
            url: base_url + option.url,
            method: option.method || "GET",
            data: option.data || {},
            header: option.header || {},
            success: res=>resolve(res.data.message),
            fail: err=>reject(err)
        })
    })
}

export default fetch