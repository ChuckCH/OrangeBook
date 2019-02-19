// page/component/details/details.js
Page({
  data:{
    goods: {
      id: 1,
      image: '/image/goods1.png',
      title: '书名',
      sub_title: '子书名',
      seller: 'jxx',
      price: 0.01,
      full_price: 1.00,
      detail: '书本详情',
      used: '八成新',
      author: '作者',
      publishing_house:'出版社',
      publishing_time:'出版时间'
    },
    num: 1,
    totalNum: 0,
    hasCarts: false,
    curIndex: 0,
    show: false,
    scaleCart: false
  },

  /*addCount() {
    let num = this.data.num;
    num++;
    this.setData({
      num : num
    })
  },*/

  addToCart() {
    const self = this;
    const num = this.data.num;
    let total = this.data.totalNum;

    self.setData({
      show: true
    })
    setTimeout( function() {
      self.setData({
        show: false,
        scaleCart : true
      })
      setTimeout( function() {
        self.setData({
          scaleCart: false,
          hasCarts : true,
          totalNum: num + total
        })
      }, 200)
    }, 300)

  },

  bindTap(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  }
 
})