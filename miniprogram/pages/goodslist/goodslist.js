// pages/goodslist/goodslist.js
var common = require("../common/common.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [],
    hasgoods:true
  },
  go_details(e){
    const index = e.currentTarget.dataset.index;
    var queryBean = JSON.stringify(this.data.goods[index].id)
    wx.navigateTo({
      url: '../details/details?goods='+queryBean,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    common.GetUserEntity('books').then(
      res=>{
        this.setData({
          goods:res.data
        })
      },
      res =>{
        console.log('fail')
      }
    )
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