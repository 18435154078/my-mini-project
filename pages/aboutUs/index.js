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
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
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


  // 加密
    // const userCryptoManager = wx.getUserCryptoManager()
    // userCryptoManager.getLatestUserKey({
    //   success: res => {
    //     let {encryptKey, iv, version, expireTime} = res
    //     expireTime = 1000000
    //     // console.log(encryptKey, iv, version, expireTime)
    //   }
    // })
    // wx.getRandomValues({
    //   length: 6, // 生成 6 个字节长度的随机数,
    //   success: res => {
    //     console.log(wx.arrayBufferToBase64(res.randomValues)) // 转换为 base64 字符串后打印
    //   }
    // })

  // 路由
    // wx.reLaunch({
    //   url: '../home/index'
    // })

    // wx.exitMiniProgram({
    //   success() {
    //     console.log('成功')
    //   }
    // })

    // wx.shareVideoMessage({
    //   videoPath: '../../icon/movie.mp4',
    //   thumbPath: '../../icon/wode_avtive.png'
    // })

    // wx.onCopyUrl()

    // wx.getUserProfile({
    //   desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    //   success: (res) => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // })

    // wx.login(res => {
    //   console.log(res)
    // })
    // wx.openSetting({
    //   success: (result) => {
        
    //   },
    //   fail: () => {},
    //   complete: () => {}
    // });
      
    wx.showNavigationBarLoading({
      success() {

      }
    })
    wx.setNavigationBarTitle({
      title: '加载中'
    })

    wx.setNavigationBarColor({
      frontColor: 'green'
    })
  }
})