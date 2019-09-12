
const app = getApp();
Page({
  data: {
    carts:[],
    hasList: false,          // 列表是否有数据
    totalPrice: 0,           // 总价，初始为0
    selectAllStatus: false,    // 全选状态，默认全不选
    obj: {
      name: "hello"
    }
  },
  
  onShow() {
    let that = this
    that.getCartList() //（）加入userid
  },

  /**
   * 当前商品选中事件
   */
  selectList(e) {
    let carts = this.data.carts
    const index = e.currentTarget.dataset.index;
    const selected = carts[index].selected;
    carts[index].selected = !selected;
    this.getTotalPrice();
  },

  /**
   * 删除购物车当前商品
   */
  deleteList(e) {
    let that = this
    const index = e.currentTarget.dataset.index;
    let carts = that.data.carts;
    let bookid = carts[index].id
    carts.splice(index, 1);
    that.setData({
      carts: carts
    });
    if (!carts.length) {
      that.setData({
        hasList: false
      });
    } else {
      that.getTotalPrice();
    }
    const db = wx.cloud.database()
    const mes = db.collection('cart').doc('XIeP41sqTi00tpHe').remove({
      success: function (res) {
        console.log(res.data)
      }
    })
  },

  /**
   * 购物车全选事件
   */
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;

    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus;
    }
    this.setData({
      selectAllStatus:selectAllStatus,
      carts: carts
    });
    this.getTotalPrice();
  },
  /**
   * 计算总价
   */
  getTotalPrice() {
    let carts = this.data.carts
    let total = 0;
    let selectedcount = 0;
    for (let i = 0; i < carts.length; i++) {         // 循环列表得到每个数据
      if (carts[i].selected) {                     // 判断选中才会计算价格
        total += carts[i].price;   // 所有价格加起来
        selectedcount += 1;
      }
    }
    let selectAllStatus = false
    if(selectedcount == carts.length){
      selectAllStatus = true;
    }
    this.setData({                                // 最后赋值到data中渲染到页面
      selectAllStatus:selectAllStatus,
      carts: carts,
      totalPrice: total.toFixed(2)
    });
  },

  /* 
    获取用户购物车列表
  */
  async getCartList(){
    let that = this
    let userid = 123  
    let first = await that.getBookId(userid)
    let bookinfo = []
    for (let i = 0; i < first.data.length; i++) {
      let second = await that.getBookInfo(first.data[i].book_id)
      var data = second.data[0]
      data.selected=false
      bookinfo.push(data)
    }
    that.setData({
      carts:bookinfo
    })
    if(that.data.carts.length > 0){
      that.setData({
        hasList:true
      })
    }else{
      that.setData({
        hasList:false
      })
    }
  },

  /*
    从购物车信息表获取用户购物车中书本id 
  */
  getBookId(userid){
    let that = this
    return new Promise(function(resolve,reject){
      const db = wx.cloud.database()
      db.collection('cart').where({
        user_id: userid
      }).get({
        success: res => {
          resolve(res)
        },
        fail: () => {
          reject("系统异常，请重试！")
        }
    })
  })
  },

  /*
    从书本信息表中获取书本信息
   */
  getBookInfo(bookid) {
    return new Promise(function (resolve, reject) {
      const db = wx.cloud.database()
      db.collection('books').where({
        id: bookid
      }).get({
        success: res => {
          resolve(res)
        },
        fail: () => {
          reject("系统异常，请重试！")
        }
      })
    })
  }

})