// component/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectIndex:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTabClick(e){
      this.setData({
        selectIndex : e.currentTarget.dataset.index,
      })
      this.triggerEvent("onTabClick",e.currentTarget.dataset.index);
    }
  }
})
