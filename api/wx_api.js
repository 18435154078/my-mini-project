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
