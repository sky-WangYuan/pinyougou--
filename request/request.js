import fetch from './fetch'

//请求轮播图数据
export const banner = ()=>{
    return fetch({
        url: '/home/swiperdata'
    })
}

//请求导航菜单数据
export const menu = ()=>{
    return fetch({
        url: '/home/catitems'
    })
}

//请求楼梯数据
export const floor = ()=>{
    return fetch({
        url: '/home/floordata'
    })
}

//请求分类导航
export const categoryLeft = ()=>{
    return fetch({
        url: ''
    })
}