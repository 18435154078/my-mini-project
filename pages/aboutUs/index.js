// pages/aboutUs/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  handleClick() {
  // 打开蓝牙设置
    // wx.openSystemBluetoothSetting({success (res) {}})

  // 打开微信权限页面
    // wx.openAppAuthorizeSetting({ success (res) { console.log(res) }})

  // 获取窗口尺寸信息
    // const windowInfo = wx.getWindowInfo()
    // console.log(windowInfo)
  
  // 获取设备设置
  // const systemSetting = wx.getSystemSetting()
  // wx.showToast({
  //   title: `蓝牙：${systemSetting.bluetoothEnabled}，WIFI：${systemSetting.wifiEnabled}，地理位置：${systemSetting.locationEnabled}，竖屏：${systemSetting.deviceOrientation}`,
  //   icon: 'none',
  //   duration: 5000,
  // })
    

  // 获取系统信息
  // wx.getSystemInfo({
  //   success (res) {
  //     console.log(res)
  //     console.log(res.locationReducedAccuracy)
  //     wx.showToast({
  //       title: res.locationReducedAccuracy.toString(),
  //       icon: 'none',
  //       duration: 5000,
  //     })
  //   }
  // })
  
  // 设备信息
    // const deviceInfo = wx.getDeviceInfo()
    // console.log(deviceInfo)
    // wx.showToast({
    //   title: JSON.stringify(deviceInfo),
    //   icon: 'none',
    //   image: '',
    //   duration: 4000,
    //   mask: false,
    //   success: (result) => {
        
    //   },
    //   fail: () => {},
    //   complete: () => {}
    // });
      

    // 微信app版本信息
    // const appBaseInfo = wx.getAppBaseInfo()
    // console.log(appBaseInfo)

    // 获取微信APP授权设置
    // const appAuthorizeSetting = wx.getAppAuthorizeSetting()
    // console.log(appAuthorizeSetting)

    // 跳转更新页
    // wx.updateWeChatApp({
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })

    wx.getUpdateManager()

  }
})