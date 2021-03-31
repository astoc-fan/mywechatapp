// pages/upload/upload.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    fileList: [], // 预览图片用的数组
    file_num: '',
    showPopup: false,
    pickvalue: "选择图片类型",
    conditionOptions: [ '普通货物照片','破损货物照片','签收照片','其他照片'],
  },
 
  showPopup() {
    this.setData({ showPopup: true });
  },

  onPopupClose() {
    this.setData({ showPopup: false });
},
  onPickerChange(e) {
    console.log(e.detail.value);
    const { picker, value, index } = e.detail;
    this.setData({
      pickvalue: value
    });
    // Toast(`当前值：${value}, 当前索引：${index}`);
  },
  onPickerCancel(e) {
    this.setData({ showPopup: false });
  },
  onPickerConfirm(e) {
    const { value, index } = e.detail;
    // Toast(`当前值：${value}, 当前索引：${index}`);
    this.setData({ 
      showPopup: false,
      pickvalue: value
    });
  },

  onChange(event) {
    const { picker, value, index } = event.detail;
    Toast(`当前值：${value}, 当前索引：${index}`);
  },
<<<<<<< HEAD
  filenum_onchange(e) {
    this.setData({
      file_num: e.detail
    })
  },
=======
>>>>>>> bd0d2947469c036b6a715dea8a5f5138f5f1d8bc

  afterRead(event) {
    const {file} = event.detail; // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    this.setData({
      fileList: file,
<<<<<<< HEAD
=======
      columns: ['一般货物照片', '破损货物照片', '签收文件照片', '其他'],
>>>>>>> bd0d2947469c036b6a715dea8a5f5138f5f1d8bc
    })
    // this.uploadImg(file);
  },

  // 删除图片
  delete(event) {
    console.log(event)
    let imgDelIndex = event.detail.index
    let fileList = this.data.fileList
    fileList.splice(imgDelIndex, 1)
    console.log('删除图片的', fileList)
    this.setData({
      fileList
    })
    // this.uploadImg(fileList)
  },
  uploadReportPic: function () {
    let that = this;
    let imgArr = that.data.fileList;
<<<<<<< HEAD
    let file_num = that.data.file_num;
    let pic_type = that.data.pickvalue;
    console.log(imgArr.length);
    console.log(file_num);
    console.log(pic_type);
=======
    console.log(imgArr.length);
>>>>>>> bd0d2947469c036b6a715dea8a5f5138f5f1d8bc
    if (imgArr.length > 0) {
      // 成功个数
      var successUp = 0;
      // 失败个数
      var failUp = 0;
      // 文件总数
      var length = imgArr.length;
      // 第几张
      var count = 0; 
      // 上传函数
<<<<<<< HEAD
      that.uploadImg(imgArr, file_num, pic_type, successUp, failUp, count, length);
    } else {
      wx.showToast({
        title: '请选择图片',
=======
      that.uploadImg(imgArr, successUp, failUp, count, length);
    } else {
      wx.showToast({
        title: '内容不能为空',
>>>>>>> bd0d2947469c036b6a715dea8a5f5138f5f1d8bc
        icon: 'error',
        duration: 2000
      })
      return false;
    }
  },
<<<<<<< HEAD
  uploadImg:function(imgPaths, file_num, pic_type, successUp, failUp, count, length) {
    var that = this;
    console.log(that.data.pickvalue);
=======
  uploadImg:function(imgPaths, successUp, failUp, count, length) {
    var that = this;
    console.log("uploadimg that");
    console.log(that);
>>>>>>> bd0d2947469c036b6a715dea8a5f5138f5f1d8bc
    wx.showLoading({
      title: '正在上传第' + count + '张',
    })
      wx.uploadFile({
        url:'https://www.astoc.tk:4431/mo/upload/upload.php', //写自己的路径
        filePath: imgPaths[count].url,
        name: 'file',
        formData: {
          'user': 'test1',
<<<<<<< HEAD
          'file_num' : file_num,
          'pic_type' : pic_type,
=======
          'file_num' : that.file_num,
          'pic_type' : that.pickvalue,
>>>>>>> bd0d2947469c036b6a715dea8a5f5138f5f1d8bc
        },
        success: function (res) {
          console.log(res)
          successUp++;

          // const { fileList = [] } = _this.data.fileList;
          // fileList.push({ ...file, url: res.data });
          // _this.setData({ fileList });
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
            that.uploadImg(imgPaths, successUp, failUp, count, length);
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