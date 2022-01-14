// pages/shopcar/index.js
import { chooseAddress, openSetting, showModal } from '../../api/wx_api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {},
    shopCarList: [],
    allChecked: false,
    currentAllPrice: 0,
    payLength: 0,
    userInfo: {}
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
    this.checkAll()
    this.computedTotalPrice()
    this.getUserInfo()
  },

  getUserInfo() {
    this.setData({
      userInfo: wx.getStorageSync('userInfo')
    })
  },

  async handleChooseAddress() {
    try {
      const address = await chooseAddress()
      address.all = address.provinceName + address.cityName + address.countyName + address.detailInfo
      wx.setStorageSync('address', address)
      this.setData({
        address
      })
    } catch (err) {
      console.error(err)
    }
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
    const shopCarList = wx.getStorageSync('shopCars') || []
    this.setData({
      shopCarList
    })
  },

  handleCheckbox(e) {
    const index = e.currentTarget.dataset.index
    const isChecked = this.data.shopCarList[index].select
    this.data.shopCarList[index].select = !isChecked
    wx.setStorageSync('shopCars', this.data.shopCarList)
    this.setData({
      shopCarList: this.data.shopCarList
    })
    this.checkAll()
    this.computedTotalPrice()
  },

  async handleGoodNum(e) {
    const symbol = e.currentTarget.dataset.symbol
    const index = e.currentTarget.dataset.index
    const shopCarList = wx.getStorageSync('shopCars') || []
    if(symbol == '+') {
      shopCarList[index].num++
    } else {
      if(shopCarList[index].num == 1) {
        const res = await showModal('提示', '确定要移除该商品吗？')
        if(res.confirm) {
          shopCarList.splice(index, 1)
        }
      } else {
        shopCarList[index].num--
      }
    }
    this.setData({
      shopCarList
    })
    wx.setStorageSync('shopCars', shopCarList)
    this.computedTotalPrice()
    this.checkAll()
  },

  checkAll() {
    const isTrue = this.data.shopCarList.length > 0 && this.data.shopCarList.every(item => item.select)
    this.setData({
      allChecked: isTrue
    })
    this.handlePayLength()
  },

  handleAllCheck() {
    this.data.shopCarList.forEach(item => {
      item.select = !this.data.allChecked
    })
    this.setData({
      shopCarList: this.data.shopCarList
    })
    wx.setStorageSync('shopCars', this.data.shopCarList)
    this.data.allChecked = !this.data.allChecked
    this.computedTotalPrice()
    this.handlePayLength()
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

  handlePay() {
    const addressAll = this.data.address.all
    if(!addressAll) {
      wx.showToast({
        title: '您还没有添加收货地址',
        icon: 'none',
        duration: 2000
      })
      return
    }
    wx.navigateTo({url: '/pages/pay/index'})
  },

  toLogin() {
    const userInfo = wx.getStorageSync('userInfo')
    if(!userInfo.isLogin) {
      wx.getUserProfile({
        desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          wx.setStorageSync('userInfo', { isLogin: false, userInfo: res.userInfo })
          wx.navigateTo({
            url: '../login/index'
          })
        }
      })
    }
  }
})