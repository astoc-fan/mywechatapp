// app.js
App({
  onLaunch() {
<<<<<<< HEAD
    
=======
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
>>>>>>> bd0d2947469c036b6a715dea8a5f5138f5f1d8bc
  },
  globalData: {
    userInfo: null
  }
})
