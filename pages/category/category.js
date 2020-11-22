// pages/category/category.js
import {request} from "../../request/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //左侧菜单数据
    leftMenuList:[],
    //右侧的分类数据
    rightCategoryList:[],
  },

  //接口的返回的数据
  categoryList:[],


  //生命周期函数--监听页面加载
  onLoad: function (options) {
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/categories"})
    .then(response=>{
      console.log(response)
      this.categoryList = response.data.message,
      this.setData({
        leftMenuList:this.categoryList.map(v=>v.cat_name),
        rightCategoryList:this.categoryList[0]
      })
    })
  },
})