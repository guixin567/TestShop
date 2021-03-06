import {request} from "../../request/index.js"
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperData:[],
    categoryData:[],
    floorData:[],

  },
  //页面开始加载
  onLoad:function(option){
    this.getSwiperData();
    this.getCategoryData();
    this.getFloorData();
  },

  //获取轮播数据
  getSwiperData(){
    request({url:'home/swiperdata'})
    .then(response =>{
      this.setData({
        swiperData:response
      })
    });
  },
  //分类数据
  getCategoryData(){
    request({url:"home/catitems"})
    .then(response=>{
      console.log(response);
      this.setData({
        categoryData:response
      })
    })
  },
  //楼层数据
  getFloorData(){
    request({url:"home/floordata"})
    .then(response=>{
      this.setData({
        floorData:response
      })
      console.log(response[0].product_list[0].image_src)
    })
  }

})


