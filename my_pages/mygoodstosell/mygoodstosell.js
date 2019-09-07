// miniprogram/pages/mygoodstosell/mygoodstosell.js
/*
function sleep(delay) {
  var start = (new Date()).getTime();
  while ((new Date()).getTime() - start < delay) {
    continue;
  }
}
*/

function requestPromise() {
  // 返回一个Promise实例对象
  return new Promise((resolve, reject) => {
    wx.cloud.callFunction({
      name: 'login',
      complete: res => {
        //console.log('云函数获取到的openid: ', res.result.openid)
        var _openid = res.result.openid;
        resolve(_openid)
      }
    })
  })
}

//const utilApi = require('../common/common.js')
//import '../common/common.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    queryResult: null,
    openid: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const db = wx.cloud.database()
    let that = this;

    requestPromise().then(
      res=>{
        db.collection('books').where({
          _openid: res._openid
        }).get({
          success: res => {
            this.setData({
              queryResult: JSON.stringify(res.data)
            })
            console.log('[数据库] [查询记录] 成功: ', res)
          },
          fail: err => {
            wx.showToast({
              icon: 'none',
              title: '查询记录失败'
            })
            console.error('[数据库] [查询记录] 失败：', err)
          }
        })
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