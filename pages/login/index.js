// pages/login/index.js
// import { getUserProfile } from '../../api/wx_api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },

  onShow() {
    this.getUserProfile()
  },

  getUserProfile() {
    const { userInfo } = wx.getStorageSync('userInfo')
    this.setData({
      userInfo
    })
  },

  toLogin() {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(() => {
      wx.setStorageSync('userInfo', {
        userInfo: this.data.userInfo,
        isLogin: true
      });
      // 跳登录后返回上级页面
      wx.navigateBack({
        delta: 1
      });
      wx.hideLoading()
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 1000
      })
    }, 1000)
  }
})