// pages/my/index.js
import { showModal, getUserProfile } from '../../api/wx_api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    footprints: wx.getStorageSync('footprints') || [],
    likes: wx.getStorageSync('likes') || []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function (options) {
    this.getUserInfo()
    this.getFootprints()
    this.getLikes()
  },

  toLogin(e) {
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        wx.setStorageSync('userInfo', { isLogin: false, userInfo: res.userInfo })
        wx.setStorageSync('payMsg', { payMsg: res })
        wx.navigateTo({
          url: '../login/index'
        })
      }
    })
  },

  getUserInfo() {
    const userInfo = wx.getStorageSync('userInfo')
    if(userInfo.isLogin) {
      this.setData({
        userInfo
      })
    }
  },

  async LogOut() {
    const res = await showModal('提示', '是否退出？')
    if(!res.confirm) {
      return
    }
    wx.setStorageSync('userInfo', {});
    this.setData({
      userInfo: {}
    })
  },

  getFootprints() {
    this.setData({
      footprints: wx.getStorageSync('footprints') || []
    })
  },

  getLikes() {
    this.setData({
      likes: wx.getStorageSync('likes') || []
    })
  },

  onShareAppMessage() {
    return {
      title: 'button',
      imageUrl: 'https://s4.ax1x.com/2022/01/14/716kkR.png',
      path: 'pages/home/index'
    }
  }
})