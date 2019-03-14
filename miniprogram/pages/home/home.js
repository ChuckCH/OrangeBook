// pages/home/home.js
Page({
  wxSearchTab: function () {
    wx.navigateTo({
      url: '../search/search'
    });
  },

  /**
   * 页面的初始数据
   */
  data: {
    img: [
      { ImgUrl: "cloud://orangebook-b6dfcf.6f72-orangebook-b6dfcf/个性推荐背景图.jpg", text: ""},
      { ImgUrl: "cloud://orangebook-b6dfcf.6f72-orangebook-b6dfcf/高数书背景图.jpg", text: "高数没过？\n高数指导用书" },
      { ImgUrl: "cloud://orangebook-b6dfcf.6f72-orangebook-b6dfcf/杂书背景图.jpg", text: "爱上看书\n看点别的吧~" },
      { ImgUrl: "cloud://orangebook-b6dfcf.6f72-orangebook-b6dfcf/网络攻防背景图.jpg", text: "黑客攻防\n网络安全课本" },
      { ImgUrl: "cloud://orangebook-b6dfcf.6f72-orangebook-b6dfcf/日语学习背景图.jpg", text: "日本风情\n日语学习用书" },
    ],
    img2: [
      { ImgUrl: "cloud://orangebook-b6dfcf.6f72-orangebook-b6dfcf/副栏背景图1.jpg", text: "所有图书" },
      { ImgUrl: "cloud://orangebook-b6dfcf.6f72-orangebook-b6dfcf/副栏背景图2.jpg", text: "计软学院" },
      { ImgUrl: "cloud://orangebook-b6dfcf.6f72-orangebook-b6dfcf/副栏背景图3.jpg", text: "经管学院" },
      { ImgUrl: "cloud://orangebook-b6dfcf.6f72-orangebook-b6dfcf/副栏背景图4.jpg", text: "体育学院" },
      { ImgUrl: "cloud://orangebook-b6dfcf.6f72-orangebook-b6dfcf/副栏背景图5.jpg", text: "心理学院" },
    ],
    message: [],
    message2: [],
    goods: [
      {
        id: 1,
        image: 'cloud://orangebook-b6dfcf.6f72-orangebook-b6dfcf/B72A63A714B949B8112C9F8F0C47AD24.png',
        title: '算法导论',
        sub_title: '子书名',
        seller: 'jxx',
        price: 24.00,
        full_price: 1.00,
        detail: '书本详情',
        used: '八成新',
        author: '作者',
        publishing_house: '出版社',
        publishing_time: '出版时间',
        position: '2号货柜',
        selected: false,
        num: 1
      }
    ]
  },
  go(){
    wx.navigateTo({
      url: '../goodslist/goodslist',
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
    var _this = this;
    var src = [];
    for (var i = 0; i < this.data.img.length; i++) {
      var _message = JSON.stringify(this.data.img[i].ImgUrl);
      //如果message中有img
      //找到云端的src
      var srcindex = _message.indexOf("cloud:");
      var pngindex = _message.indexOf(".jpg");
      src.push(_message.substring(srcindex, pngindex + 4));
    }
    var message_1 = [];
    //使用wx提供的getTempFileURL的方法获取临时url
    wx.cloud.getTempFileURL({
      fileList: src,
      success: res => {
        var that = this;
        // 将原来message中的img的src 云端id转换为零时的fileId
        for (var i = 0; i < res.fileList.length; i++) {
          var newMess = res.fileList[i].tempFileURL;
          //设置message
          message_1.push(newMess);
        }
        that.setData({ message: message_1})
      }, fail: console.error
    })

    //img2
    var src2 = [];
    var message_2 = [];
    for (var i = 0; i < this.data.img2.length; i++) {
      var _message = JSON.stringify(this.data.img2[i].ImgUrl);
      //如果message中有img
      //找到云端的src
      var srcindex = _message.indexOf("cloud:");
      var pngindex = _message.indexOf(".jpg");
      src2.push(_message.substring(srcindex, pngindex + 4));
    }
   
    //使用wx提供的getTempFileURL的方法获取临时url
    wx.cloud.getTempFileURL({
      fileList: src2,
      success: res => {
        var that = this;
        // 将原来message中的img的src 云端id转换为零时的fileId
        for (var i = 0; i < res.fileList.length; i++) {
          var newMess = res.fileList[i].tempFileURL;
          //设置message
          message_2.push(newMess);
        }
        that.setData({ message2: message_2 })
      }, fail: console.error
    })
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