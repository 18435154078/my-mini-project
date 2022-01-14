// pages/shopcar/index.js
import { getCode, requestPayment } from '../../api/wx_api'
import { request } from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {},
    shopCarList: [],
    allChecked: false,
    currentAllPrice: 0,
    payLength: 0
  },

  // behaviors: [require('miniprogram-computed')],

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.showAddress()
    this.getShopCarList()
  },

  onShow() {
    this.getShopCarList()
    this.computedTotalPrice()
    this.handlePayLength()
  },

  showAddress() {
    const address = wx.getStorageSync('address')
    if(address) {
      this.setData({
        address
      })
    }
  },

  getShopCarList() {
    let shopCarList = wx.getStorageSync('shopCars') || []
    shopCarList = shopCarList.filter(item => item.select)
    this.setData({
      shopCarList
    })
  },
  computedTotalPrice() {
    let totalPrice = 0
    this.data.shopCarList.filter(item => item.select).forEach(item1 => {
      totalPrice += item1.num * item1.goods.goods_price
    })
    this.setData({
      currentAllPrice: totalPrice
    })
  },

  handlePayLength() {
    let payLength = 0
    this.data.shopCarList.filter(item => item.select).forEach(item => {
      payLength += item.num
    })
    this.setData({
      payLength
    })
  },

  async handlePay() {
    const isToken = wx.getStorageSync('token')
    if(isToken) {
      this.getOrder(token)
      return
    }
    const { code } = await getCode()
    const { payMsg } = wx.getStorageSync('payMsg')
    const { encryptedData, rawData, iv, signature } = payMsg
    const token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIzLCJpYXQiOjE1NjQ3MzAwNzksImV4cCI6MTAwMTU2NDczMDA3OH0.YPt-XeLnjV-_1ITaXGY2FhxmCe4NvXuRnRB8OMCfnPo`
    const res = await request({
      url: '/users/wxlogin',
      method: 'POST',
      data: { encryptedData, rawData, iv, signature, code }
    })
    wx.setStorageSync('token', token)
    console.log(res)
    
  },

  async getOrder(token) {
    const goods = []
    this.data.shopCarList.forEach(item => {
      goods.push({
        goods_id: item.goods.goods_id,
        goods_number: item.num,
        goods_price: item.goods.goods_price
      })
    })
    await request({
      url: '/my/orders/create',
      method: 'POST',
      data: {
        order_price: this.data.currentAllPrice,
        consignee_addr: wx.getStorageSync('address').all,
        goods: goods
      },
      header: {
        Authorization: token
      }
    })
    const order_number = 'HMDD20190802000000000422'
    request({
      url: '/my/orders/req_unifiedorder',
      method: 'POST',
      data: { order_number },
      header: { Authorization: token }
    })
    
    // const res = requestPayment = await requestPayment()
    // console.log(res)
    wx.requestPayment({
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: '',
      paySign: '',
      success: (result) => {
        console.log('成功')
        // resolve(result)
      },
      fail: () => {}
    })
  }
})