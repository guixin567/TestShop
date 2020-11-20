import {request} from "../../request/index.js"
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperData:[],
    categoryData:[],

  },
  //页面开始加载
  onLoad:function(option){
    this.getSwiperData();
    this.getCategoryData();
  },

  //获取轮播数据
  getSwiperData(){
    request({url:'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'})
    .then(result =>{
      this.setData({
        swiperData:result.data.message
      })
    });
  },

  //分类数据
  getCategoryData(){
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/catitems"})
    .then(response=>{
      console.log(response);
      this.setData({
        categoryData:response.data.message
      })
    })
  },

})


