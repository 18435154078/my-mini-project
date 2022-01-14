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

  onShow() {
    
  },

  // 获取轮播图
  async getSwiperList() {
    const { data } = await request({
      url: '/home/swiperdata'
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
      url: '/home/catitems'
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
      url: '/home/floordata'
    })
    const { message } = data
    message.forEach(item => {
      item.product_list.forEach(item1 => {
        item1.name = item1.navigator_url.split('=')[1]
      })
    })
    if(data.meta.status === 200) {
      this.setData({
        floorList: message
      })
    }
  }
})