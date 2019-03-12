// pages/common/common.js
function getOpenid() {
  // 返回一个Promise实例对象
  return new Promise((resolve, reject) => {
    wx.cloud.callFunction({
      name: 'login',
      complete: res => {
        var _openid = res.result.openid;
        resolve(_openid)
      }
    })
  })
}
function GetUserEntity(collection) {
  return new Promise(function (resolve, reject) {
    const db = wx.cloud.database()
    db.collection(collection).get({
      success: res => {
        resolve(res)
      },
      fail: () => {
        reject("系统异常，请重试！")
      }
    })    
  })
}
module.exports.GetUserEntity = GetUserEntity
module.exports.getOpenid= getOpenid

Page({
 
  /**
   * 页面的初始数据
   */
  data: {

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