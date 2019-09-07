const app = getApp();
function requestPromise() {
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
Page({
  data: {
    goods: {},
    /*num: 1,
    totalNum: 0,
    hasCarts: false,
    curIndex: 0,
    show: false,
    scaleCart: false*/

  },

  recommend(){
    let goodsinfo_recommend = this.data.goods.recommend;
    this.data.goods.recommend = !this.data.goods.recommend;
    console.log(this.data.goods.recommend);
  },
  collect(){
    let goodsinfo_collect = this.data.goods.collect;
    this.data.goods.collect = !this.data.goods.collect;
    //var queryBean = JSON.parse(this.data.goods);
    this.onLoad();
  },

  addToCart() {
    let goodsinfo = this.data.goods;
    const db = wx.cloud.database()
    requestPromise().then(
      res =>{
        db.collection('cart').where({
          _openid: res._openid,
          book_id: goodsinfo.id
        }).get({
          success: function (res) {
            if(res.data.length > 0){
              wx.showToast({
                title: '添加失败，商品已存在于购物车中',
                icon: 'none',
                duration: 10000
              })
              setTimeout(function () {
                wx.hideToast()
              }, 2000)
            }else{
              db.collection('cart').add({
                data: {
                  book_id: goodsinfo.id
                },
                success: function (res) {
                  console.log
                },
                fail: console.error
              })
              wx.showToast({
                title: '添加成功',
                icon: 'none',
                duration: 10000
              })
              setTimeout(function () {
                wx.hideToast()
              }, 2000)
            }
          }
          }
        )
      }
    )
    
  },

  onLoad(options){
    var that = this
    var queryBean = JSON.parse(options.goods)
    const db = wx.cloud.database()
    db.collection('books').where({
      id:queryBean
    }).get({
      success: res => {
        this.setData({
          goods: res.data[0]
        })
      }
    })
  }
})

