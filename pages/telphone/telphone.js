// pages/telphone/telphone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: "",
    code: ""
  },

  bindPhone: function (e) {
    console.log(e);
    this.setData({
      phone: e.detail.value
    });
  },

  bindCode: function (e) {
    console.log(e);
    this.setData({
      code: e.detail.value
    });
  },

  login: function () {
    console.log(this.data.phone, this.data.code);
    // 讲手机号和验证码发送到后端，进行登录
    wx.request({
      url: 'url',
      data: {phone : this.data.phone, code: this.data.code},
      method: 'POST',
      success: (result) => {
        
      },
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