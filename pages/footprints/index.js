// pages/footprints/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    footprints: [],
    index: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { index } = options
    this.setData({
      index
    })
  },

  onShow() {
    this.getFootprints(this.data.index)
  },

  getFootprints (index){
    let list = []
    if(index == 2) {
      list = wx.getStorageSync('likes')
    } else if(index == 4) {
      list = wx.getStorageSync('footprints')
    }
    this.setData({
      footprints: list || []
    })
  }
})
