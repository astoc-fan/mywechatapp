// pages/upload/upload.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

Page({
  /*** 页面的初始数据 */
  data: {
    fileList: [], // 预览图片用的数组
    file_num: '',
    showPopup: false,
    pickvalue: "",
    conditionOptions: ['Cargo Photo', 'OSD Photo', 'DLV Photo', 'Other Photo'],
  },

  showPopup() {
    this.setData({
      showPopup: true
    });
  },

  onPopupClose() {
    this.setData({
      showPopup: false
    });
  },

  onFilenumchange(e) {
    this.setData({
      file_num: e.detail
    })
  },

  onPickerChange(e) {
    console.log(e.detail.value);
    const {
      picker,
      value,
      index
    } = e.detail;
    this.setData({
      pickvalue: value
    });
  },

  onPickerCancel(e) {
    this.setData({
      showPopup: false
    });
  },

  onPickerConfirm(e) {
    const {
      value,
      index
    } = e.detail;
    this.setData({
      showPopup: false,
      pickvalue: value
    });
  },


  afterRead(event) {
    const {
      file
    } = event.detail; // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    console.log(file);
    let fileList = this.data.fileList    
    fileList = fileList.concat(file)
    console.log(fileList);
    this.setData({
      fileList
    })
  },

  // 删除图片
  delete(event) {
    console.log(event)
    let imgDelIndex = event.detail.index
    let fileList = this.data.fileList
    fileList.splice(imgDelIndex, 1)
    console.log('删除的图片', fileList)
    this.setData({
      fileList
    })
    // this.uploadImg(fileList)
  },

  uploadPic: function () {
    let that = this;
    let imgArr = that.data.fileList;
    let file_num = that.data.file_num;
    let pickvalue = that.data.pickvalue;
    console.log(imgArr.length);
    if (imgArr.length > 0) {
      var successUp = 0; // 成功个数
      var failUp = 0; // 失败个数
      var length = imgArr.length; // 文件总数
      var count = 0; // 第几张
      // 上传函数
      that.uploadImg(imgArr, file_num, pickvalue, successUp, failUp, count, length);
    } else {
      wx.showToast({
        title: '内容不能为空',
        icon: 'error',
        duration: 2000
      })
      return false;
    }
  },

  uploadImg: function (imgArr, file_num, pickvalue, successUp, failUp, count, length) {
    var that = this;
    console.log("uploadimg that");
    console.log(that);
    wx.showLoading({
      title: '正在上传第' + count + '张',
    })
    wx.uploadFile({
      //url: 'https://www.astoc.tk:4431/mo/upload/upload.php', //写自己的路径
      url: 'https://expd-pic.kooldns.cn/mo/upload/upload.php',
      filePath: imgArr[count].url,
      name: 'file',
      formData: {
        'user': 'test1',
        'file_num': file_num,
        'pic_type': pickvalue,
      },
      success: function (res) {
        console.log(res)
        successUp++;
      },
      fail: function (res) {
        failUp++;
      },
      complete: function (res) {
        // 下一张
        count++;
        if (count == length) {
          wx.showToast({
            title: '上传成功',
            icon: 'success',
            duration: 2000
          });
        } else {
          // 递归调用，上传下一张
          that.uploadImg(imgArr, file_num, pickvalue, successUp, failUp, count, length);
        }
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