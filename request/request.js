import fetch from './fetch'

//请求轮播图数据
export const banner = ()=>{
    return fetch({
        url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata'
    })
}

//请求导航菜单数据
export const menu = ()=>{
    return fetch({
        url: 'https://api.zbztb.cn/api/public/v1/home/catitems'
    })
}

//请求楼梯数据
export const floor = ()=>{
    return fetch({
        url: 'https://api.zbztb.cn/api/public/v1/home/floordata'
    })
}