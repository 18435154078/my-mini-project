// pages/good_list/index.js
import { request } from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    params: {
      query: '',
      cid: '',
      pagenum: 1,
      pagesize: 10
    },
    goodList: [],
    isDownLoad: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { query, cid } = options
    this.data.params.query = query || ''
    this.data.params.cid = cid || ''
    this.getGoodList()
  },

  async getGoodList() {
    const { data } = await request({
      url: '/goods/search',
      data: this.data.params
    })
    // 关闭下拉刷新窗口
    wx.stopPullDownRefresh()
    wx.hideLoading()

    this.data.goodList.push(...data.message.goods)
    const pages = Math.ceil(data.message.total / this.data.params.pagesize)
    const currentPage = this.data.params.pagenum
    if(pages == currentPage) {
      this.setData({
        isDownLoad: false
      })
      // return
    }
    this.setData({
      goodList: this.data.goodList
    })
    if(this.data.goodList.length == 0) {
      this.setData({
        isDownLoad: false
      })
    }
  },

  onReachBottom() {
    if(this.data.isDownLoad) {
      this.data.params.pagenum++
      this.getGoodList()
    }
  },

  onPullDownRefresh() {
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    this.setData({
      params: {
        query: this.data.params.query,
        cid: '',
        pagenum: 1,
        pagesize: 10
      },
      isDownLoad: true,
      goodList: []
    })
    
    this.getGoodList()
  }
})