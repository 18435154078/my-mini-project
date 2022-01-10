// pages/good_detail/index.js
import { request } from '../../utils/request'
// import { getStorage, setStorage } from '../../api/wx_api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodDetail: {},
    isLike: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const goods_id = options.id
    this.getGoodDetail(goods_id)
  },

  async getGoodDetail(goods_id) {
    const { data } = await request({
      url: '/goods/detail',
      data: {
        goods_id
      }
    })
    this.setData({
      goodDetail: data.message
    })
  },

  handleLike() {
    this.setData({
      isLike: !this.data.isLike
    })
  },

  showPreviewImage(e) {
    let index = e.currentTarget.dataset.index
    let images = []
    this.data.goodDetail.pics.forEach(item => {
      images.push(item.pics_big_url)
    })
    wx.previewImage({
      current: images[index], // 当前显示图片的http链接
      urls: images, // 需要预览的图片http链接列表
      // showmenu: true
    })
  },

  addShopCatr() {
    const shopCars = wx.getStorageSync('shopCars') || []
    const currentGoodId = this.data.goodDetail.goods_id
    const index = shopCars.findIndex(item => item.goods.goods_id == currentGoodId)
    if(index == -1) {
      shopCars.unshift({
        goods: this.data.goodDetail,
        num: 1,
        select: true
      })
    } else {
      shopCars[index].num++
    }
    wx.setStorageSync('shopCars', shopCars)
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      duration: 2000,
      mask: true
    })
  }
})