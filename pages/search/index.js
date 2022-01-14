// pages/search/index.js
import { request } from '../../utils/request'
import { showModal } from '../../api/wx_api'
import lodash from '../../utils/lodash.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchText: '',
    suggesteList: [],
    historyList: [],
    timer: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  onShow() {
    this.setData({
      searchText: '',
      historyList: wx.getStorageSync('historyList') || [],
    })
  },

  async getsuggesteList() {
    const { data } = await request({
      url: '/goods/qsearch',
      data: {
        query: this.data.searchText.trim()
      }
    })
    this.setData({
      suggesteList: data.message
    })
  },

  handleSearchText(e) {
    this.setData({
      searchText: e.detail.value,
    })
    // 页面防抖处理
    clearTimeout(this.data.timer)
    this.data.timer = setTimeout(() => {
      this.getsuggesteList()
    }, 500)
  },

  back() {
    wx.navigateBack()
  },

  handleSearchBtn() {
    if(!this.data.searchText.trim()) {
      return
    }
    this.saveHistory(this.data.searchText)
    wx.navigateTo({
      url: '../good_list/index?query=' + this.data.searchText.trim()
    }) 
  },

  handleSuggeste(e) {
    const name = e.currentTarget.dataset.name
    this.saveHistory(name)
    wx.navigateTo({
      url: '../good_list/index?query=' + name
    })
  },

  saveHistory(value) {
    this.data.historyList.unshift(value)
    this.setData({
      historyList: this.data.historyList
    })
    wx.setStorageSync('historyList', this.data.historyList)
  },

  handleHistoryClick(e) {
    const name = e.currentTarget.dataset.name
    wx.navigateTo({
      url: '../good_list/index?query=' + name
    })
  },

  async clearHistory() {
    const isClear = await showModal('提示', '是否清空历史记录？')
    if(isClear.cancel) {
      return
    }
    this.setData({
      historyList: []
    })
    wx.setStorageSync('historyList', [])
  },

  handleComfirm() {
    this.handleSearchBtn()
  }
})