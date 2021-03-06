import regeneratorRuntime from '../lib/runtime/runtime';
export const request = params => {
    const baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1'
    return new Promise((resolve, reject) => {
        wx.request({
            ...params,
            url: baseUrl + params.url,
            success: res => {
                resolve(res)
            },
            fail: error => {
                reject(error)
            }
          })
    })
}