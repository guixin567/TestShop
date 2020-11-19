import {request} from "../../request/index.js"
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperList:[]
  },
  //页面开始加载
  onLoad:function(option){
    request({url:'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'})
    .then(result =>{
      this.setData({
        swiperList:result.data.message
      })
    })
  }
})
