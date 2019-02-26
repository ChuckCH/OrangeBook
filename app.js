//app.js
const app = getApp();
App({
  globalData: {
    userInfo: null,
    carts: [
      { id: 2, title: '素米 500g', image: '/images/goods/goods1.png', num: 1, price: 0.03, selected: false }
    ]
  },
  onLaunch: function () {
    // 展示本地存储能力
    // 登录
    var that1 = this
    wx.login({
      success: res => {
        var that2 = this
        this.globalData.carts = res.carts
        //取出本地存储用户信息，解决需要每次进入小程序弹框获取用户信息
        this.globalData.userInfo = wx.getStorageSync('userInfo')
        //wx.getuserinfo接口不再支持
        wx.getSetting({
          success: (res) => {
            var that3 = that2
            //判断用户已经授权。不需要弹框
            if (!res.authSetting['scope.userInfo']){
              console.log(that3.globalData.carts[0].image)
              that3.setData
              that3.setData({
                showModel: true
              })
            } else {//没有授权需要弹框
              that2.setData({
                showModel: false
              })
              wx.showLoading({
                title: '加载中...'
              })
              this.getOP(app.globalData.userInfo)
            }
          },
          fail: function () {
            wx.showToast({
              title: '系统提示:网络错误',
              icon: 'warn',
              duration: 1500,
            })
          }
        })
      },
      fail: function () {
        wx.showToast({
          title: '系统提示:网络错误',
          icon: 'warn',
          duration: 1500,
        })
      }
    })
  },
  //获取用户信息新接口
  agreeGetUser: function (e) {
    //设置用户信息本地存储
    try {
      wx.setStorageSync('userInfo', e.detail.userInfo)
    } catch (e) {
      wx.showToast({
        title: '系统提示:网络错误',
        icon: 'warn',
        duration: 1500,
      })
    }
    wx.showLoading({
      title: '加载中...'
    })
    that.setData({
      showModel: false
    })
    that.getOP(e.detail.userInfo)
  },
  getOP: function (res) {//提交用户信息 获取用户id
    let that = this
    let userInfo = res
    app.globalData.userInfo = userInfo
    wx.request({
      url: 'https://xcx.xiancaijun.cn/tigerlogin/tgLogin',
      method: 'post',
      data: {
        "code": app.globalData.code,
        'userInfo': userInfo
      },
      success: function (res) {
        if (res.data.respcode == '0') {
          app.globalData.userId = res.data.uid
          app.globalData.keys = res.data.keys
          app.globalData.access = res.data.access
          that.getBook()
          that.shareInfo()
          if (that.data.cid) {
            wx.navigateTo({
              url: '/pages/course/course?cid=' + that.data.cid
            })
          }
        } else if (res.data.respcode == '15') {
          wx.hideLoading()
          wx.showToast({
            title: '没有授权，不能进入小程序',
            icon: 'none',
            duration: 2000
          })
        }

      }
    })
  }
})