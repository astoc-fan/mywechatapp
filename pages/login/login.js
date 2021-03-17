// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "请登录",
    path: "/static/img/icon/mine-selected.png",
    LocalPath: "选择位置"
  },

  fetchInfo: function () {
    //打开配置手动授权
    wx.openSetting({
      withSubscriptions: true,
    })
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        that.setData({
          name: res.userInfo.nickName,
          path: res.userInfo.avatarUrl
        })

      },
    })
  },

  getLocalPath: function () {
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        // console.log(res);
        that.setData({
          LocalPath: res.address
        });
      }
    })
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})