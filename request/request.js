import fetch from './fetch'

//请求轮播图数据 ----------------------首页-----------------------------
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

//请求分类导航 ----------------------分类-----------------------------
export const categoryDatas = ()=>{
    return fetch({
        url: '/categories'
    })
}

//请求商品列表 ----------------------列表-----------------------------
export const goodsList = (cid, pagenum, pagesize)=>{
    return fetch({
        url: '/goods/search',
        data: {
            cid,
            pagenum,
            pagesize
        }
    })
}