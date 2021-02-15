Page({
  data: {
    tabs: [
      {
        id:1,
        name: '综合',
        isActive: true
      },
      {
        id:2,
        name: '销量',
        isActive: false
      },
      {
        id:3,
        name: '价格',
        isActive: false
      },
    ]
  },
  onLoad(){

  },
  changeSelect(e){

    //修改isActive为true
    let id= e.detail

    let newTabs = [...this.data.tabs] //解构给新的数组
    newTabs.forEach(item=>{
      item.id===id? item.isActive=true : item.isActive = false
    })

    this.setData({ //修改赋值给tabs
      tabs: newTabs
    })
  }
})