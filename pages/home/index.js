// pages/home/index.js
import { request } from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    navList: [],
    floorList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperList()
    this.getNavList()
    this.getFloorList()
  },

  // 获取轮播图
  async getSwiperList() {
    const { data } = await request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'
    })
    if(data.meta.status === 200) {
      this.setData({
        swiperList: data.message
      })
    }
  },

  // 获取首页导航
  async getNavList() {
    const { data } = await request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems'
    })
    if(data.meta.status === 200) {
      this.setData({
        navList: data.message
      })
    }
  },

  // 获取分类列表
  async getFloorList() {
    const { data } = await request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata'
    })
    if(data.meta.status === 200) {
      this.setData({
        floorList: data.message
      })
    }
  }
})