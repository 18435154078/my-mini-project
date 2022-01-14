/**
 * @returns 获取微信用户收货地址
 */
export const chooseAddress = function(key) {
  return new Promise((resolve, reject) => {
    wx.chooseAddress({
      success: (result) => {
        resolve(result)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}

/**
 * @returns 获取用户权限信息
 */
 export const getSetting = function() {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success: (result) => {
        resolve(result)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}

/**
 * @returns 打开授权页面
 */
export const openSetting = function() {
  return new Promise((resolve, reject) => {
    wx.openSetting({
      success: (result) => {
        resolve(result)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}


/**
 * @returns 打开询问框
 */
 export const showModal = function(title, content) {
  return new Promise(resolve => {
    wx.showModal({
      title,
      content,
      success (res) {
        resolve(res)
      }
    })
  })
}

/**
 * @returns 获取微信code
 */
export const getCode = function() {
  return new Promise(resolve => {
    wx.login({
      timeout:10000,
      success: result => {
        resolve(result)
      }
    })
  })
}

/**
 * @returns 微信支付接口
 */
 export const requestPayment = function() {
  return new Promise(resolve => {
    wx.requestPayment({
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: '',
      paySign: '',
      success: (result) => {
        console.log('成功')
        resolve(result)
      },
      fail: () => {}
    })
  })
}