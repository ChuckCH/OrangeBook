// user.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    menuitems: [
      { text: '账号信息', url: '../userinfo/userinfo', icon: '../../images/usermenu/info.png', tips: '' },
      { text: '历史订单', url: '../history/history', icon: '../../images/usermenu/history.png', tips: '' },
      { text: '我的出售', url: '../borrowbook/borrowbook?status=Y', icon: '../../images/usermenu/sell.png', tips: '' },
      { text: '我的收藏', url: '../favorcate/favorcate', icon: '../../images/usermenu/favor.png', tips: '' },
    ],
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    showShouquan: true
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 查看是否授权
    　　wx.getSetting({
      　　　　success: function (res) {
        　　　　　　console.log(res.authSetting['scope.userInfo'])
        　　　　　　if (res.authSetting['scope.userInfo']) {
          　　　　　　// 已经授权，可以直接调用 getUserInfo 获取头像昵称
          　　　　　　wx.getUserInfo({
            　　　　　　　　success: function (res) {
              　　　　　　　　console.log(res)
              　　　　　　　　getApp().globalData.userInfo = res.userInfo 　　//将授权信息传递给全局变量
            　　　　　　}
          　　　　})
        　　　　}
      　　}
    　　})
  },
  bindGetUserInfo: function (e) {
    　　getApp().globalData.userInfo = e.detail.userInfo     //将授权信息传递给全局变量
    　　console.log(getApp().globalData.userInfo)
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