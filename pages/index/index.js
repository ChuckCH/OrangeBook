const util = require('../../utils/util.js');
const api = require('../../config/api.js');
const user = require('../../services/user.js');

//获取应用实例
const app = getApp()
Page({
  data: {
    goodsCount: 0,
    newGoods: [],
    hotGoods: [],
    topics: [],
    brands: [],
    floorGoods: [],
    banner: [],
    channel: [],
    banner_chinese: ["2019年春季课程二手教辅资料", "2019年秋季课程二手教辅资料","研究生课程二手教辅资料"],
    topic_chinese:[
      { title: "橘子书APP会让好书重见天日", subtitle:"专业校园二手书交易平台，只为给你一个最好的读书港湾"},
      { title: "闲暇午后品味日系和风", subtitle: "日系和风小清新小说&故事集，体验不一样的罄凉" },
      { title: "古典名著和老花眼的默契", subtitle: "世界四大短篇小说巨匠：法国的莫泊桑，俄国的契诃夫，美国的欧·亨利和马克·吐温" }
    ],
    hot_chinese:[
      { id: "2000001", name: "Java语言程序设计与数据结构", list_pic_url: "../../static/images/book1.jpg", retail_price: "59", extra_price:"9.50"}
    ]
  },
  onShareAppMessage: function () {
    return {
      title: 'NideShop',
      desc: '仿网易严选微信小程序商城',
      path: '/pages/index/index'
    }
  },

  getIndexData: function () {
    let that = this;
    util.request(api.IndexUrl).then(function (res) {
      if (res.errno === 0) {
        that.setData({
          newGoods: res.data.newGoodsList,
          hotGoods: res.data.hotGoodsList,
          topics: res.data.topicList,
          brand: res.data.brandList,
          floorGoods: res.data.categoryList,
          banner: res.data.banner,
          channel: res.data.channel
        });
      }
    });
  },
  onLoad: function (options) {
    this.getIndexData();
    util.request(api.GoodsCount).then(res => {
      this.setData({
        goodsCount: res.data.goodsCount
      });
    });
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
})
