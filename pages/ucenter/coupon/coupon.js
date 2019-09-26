var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');



var app = getApp();

Page({
  data: {
    orderList: []
  }, onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

    this.getOrderList();
  },
  getOrderList() {
    let that = this;
    util.request(api.OrderList).then(function (res) {
      if (res.errno === 0) {
        console.log(res.data);
        that.setData({
          orderList: res.data.data
        });
      }
    });
  },
  payOrder() {
    wx.redirectTo({
      url: '/pages/pay/pay',
    })
  },
  showbookcode:function(e) {
    let show_code = e.currentTarget.dataset['delivery'];
    let show_id = e.currentTarget.dataset['id'];
    if (!show_code){
      wx.showToast({
        title: '请先付款',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.redirectTo({
        url: '/pages/code/code?id=' + show_id,
      })
    }
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {
    // 页面隐藏

  },
  onUnload: function () {
    // 页面关闭
  }
})