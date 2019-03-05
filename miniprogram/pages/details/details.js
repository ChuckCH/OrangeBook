const app = getApp();
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
    let cart_goodsinfo = { id: goodsinfo.id, title: goodsinfo.title, image: goodsinfo.image, num: goodsinfo.num, price: goodsinfo.price, selected: false };
    app.globalData.carts.push(cart_goodsinfo);
    wx.showToast({
      title: '添加成功',
      icon: 'succes',
      duration: 10000
    })

    setTimeout(function () {
      wx.hideToast()
    }, 2000)
  },

  onLoad(options){
    var that = this
    var queryBean = JSON.parse(options.goods)
    const db = wx.cloud.database()
    db.collection('books').where({
      'id':queryBean
    }).get({
      success: res => {
        this.setData({
          goods: res.data[0]
        })
      }
    })
  }
})

