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