import { request } from "../../request/index"
import {loadType} from "../../constant/constant"

// pages/goods_list/goods_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentPageSize:0,
    logoImage:"../../icons/chat.png",
    catId: "",
    tabs: [
      {
        id: "1",
        name: "综合",
      },
      {
        id: "2",
        name: "价格",
      }, {
        id: "3",
        name: "销量",
      }
    ],
    selectTabIndex: "0",
    goodsList: [],
  },
  goodsRequestParams:{
    query:"",
    cid:"",
    pagenum:1,
    pagesize:"10",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.goodsRequestParams.cid = options.cid
    this.getGoodsList(loadType.refresh)
  },
  //触发底部
  onReachBottom:function(options){
    //如果当前商品数小于临界值10，继续加载下一页
    console.log("测试")
    console.log(this.data.currentPageSize)
    if(this.data.currentPageSize >= this.goodsRequestParams.pagesize){
      this.getGoodsList(loadType.loadMore)
    }
    
  },
  async getGoodsList(type) {

    if(type == loadType.refresh){
      this.goodsRequestParams.pagenum = 1
    }
    const response = await request({ url: "goods/search",isShowLoading:true, data:this.goodsRequestParams })
    this.goodsRequestParams.pagenum = this.goodsRequestParams.pagenum + 1
    if(this.data.goodsList.length != 0){
      this.setData({
        goodsList:[...this.data.goodsList,...response.goods],
        currentPageSize : response.goods.length
      })
    }else{
      this.setData({
        goodsList:response.goods,
        currentPageSize : response.goods.length
      })
    }
  },

  onTabClick: function (e) {
    this.setData({
      selectTabIndex: e.detail
    })

  }
})