// pages/upload2/upload2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img_l:''
  },

  chooseImg:function(){
    var _this = this;
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        console.log(res)
      _this.setData({
        img_l:res.tempFilePaths
      })
        console.log(res)
      
      }
    })
  },
  up_img:function() {
    var _this = this;
     wx.uploadFile({
      //  url: 'http://127.0.0.1/m_pro/upload.php', //接口
       url:'https://www.astoc.tk:4431/mo/upload/upload.php',
       filePath: _this.data.img_l[0],
       name: 'file',
       formData: {
         'user': 'test'
       },
       success: function (res) {
         var data = res.data;
         console.log(data);
         //do something
       },
       fail: function (error) {
         console.log(error);
       }
     })
   },
   preview_img:function(){
    wx.previewImage({
      current: this.data.img_l, // 当前显示图片的http链接
      urls: this.data.img_l // 需要预览的图片http链接列表
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