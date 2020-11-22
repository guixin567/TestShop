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
    //左侧菜单选中的索引
    selectMenuIndex:0,
    //每次点击左侧菜单 回到顶部
    scrollToTop:0,
  },

  //接口的返回的数据
  categoryList:[],


  //生命周期函数--监听页面加载
  onLoad: function (options) {
    //缓存不为空 并且时间没有过期 使用缓存，其他直接调用接口
    const categoryCache = wx.getStorageSync('category_cache')
    let cacheTime = 5 * 60 * 1000 
    if(categoryCache && Date.now() - categoryCache.time < cacheTime){
      this.setData({
        leftMenuList:categoryCache.data.map(v=>v.cat_name),
        rightCategoryList:categoryCache.data[0].children
      })
    }else{
      this.getCategoryData();  
    }
    
  },

  //获取分类接口
  async getCategoryData(){
    const response = await request({url:"categories"})
    this.categoryList = response,
    wx.setStorageSync('category_cache', {time:Date.now(),data:this.categoryList})
    this.setData({
      leftMenuList:this.categoryList.map(v=>v.cat_name),
      rightCategoryList:this.categoryList[0].children
    })
  },
  onMenuClick:function(event){
    console.log(event)
    let index = event.currentTarget.dataset.index
    this.setData({
      selectMenuIndex:index,
      rightCategoryList:this.categoryList[index].children,
      scrollToTop:0,
    })
  }
})