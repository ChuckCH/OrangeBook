// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      goods: [
        {
          id: 1,
          image: '/images/goods/goods2.png',
          title: '书名',
          sub_title: '子书名',
          seller: 'jxx',
          price: 0.01,
          full_price: 1.00,
          detail: '书本详情',
          used: '八成新',
          author: '作者',
          publishing_house: '出版社',
          publishing_time: '出版时间',
          position: '2号货柜',
          selected: false,
          num: 1
        },
        {
          id: 2,
          image: '/images/goods/goods1.png',
          title: '书名2',
          sub_title: '子书名2',
          seller: 'jxx2',
          price: 0.03,
          full_price: 2.00,
          detail: '书本详情',
          used: '六成新',
          author: '作者',
          publishing_house: '出版社',
          publishing_time: '出版时间',
          position: '2号货柜',
          selected: false,
          num: 1
        }
      ],
      hasgoods: true
    },
    go_details(e) {
      var that = this;
      const index = e.currentTarget.dataset.index;
      var queryBean = JSON.stringify(that.data.goods[index])
      wx.navigateTo({
        url: '../details/details?goods=' + queryBean,
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