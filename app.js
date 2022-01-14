//app.js
App({
  //onLaunch,onShow: options(path,query,scene,shareTicket,referrerInfo(appId,extraData))
  onLaunch: function(options) {
   
  },
  onShow: function(options) {
    const res = wx.getEnterOptionsSync()
    wx.showToast({
      title: JSON.stringify(res),
      icon: 'none',
      image: '',
      duration: 15000,
      mask: false,
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
      
  },
  onHide: function() {

  },
  onError: function(msg) {

  },
  //options(path,query,isEntryPage)
  onPageNotFound: function(options) {

  }
});
  