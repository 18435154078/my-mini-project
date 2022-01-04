import { request } from '../../utils/request'
Page({
  data: {
    categoryList: [],
    categoryList_left: [],
    current_categoryList: {},
    current_active: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCategoryList()
  },

  async getCategoryList() {
    const { data } = await request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories'
    })
    if(data.meta.status === 200) {
      const { message } = data
      let cat_level = []
      message.forEach(item => {
        cat_level.push({
          cat_deleted: item.cat_deleted,
          cat_icon: item.cat_icon,
          cat_id: item.cat_id,
          cat_level: item.cat_level,
          cat_name: item.cat_name,
          cat_pid: item.cat_pid
        })
      })
      this.setData({
        categoryList: data.message,
        categoryList_left: cat_level,
        current_categoryList: data.message[0]
      })
    }
  },

  handleClick(data) {
    this.setData({
      current_active: data.currentTarget.dataset.index
    })
  }
})