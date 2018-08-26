// pages/vs/vs.js
var images = [
  {
    id: '1',
    src: 'images/1.jpg',
    name: '前锋',
    data: '2017/11/1'
  }, {
    id: '2',
    src: 'images/2.jpg',
    name: '内锋',
    data: '2017/11/2'
  }, {
    id: '3',
    src: 'images/3.jpg',
    name: '中锋',
    data: '2017/11/3'
  }, {
    id: '4',
    src: 'images/1.jpg',
    name: '边锋',
    data: '2017/11/4'
  }, {
    id: '5',
    src: 'images/2.jpg',
    name: '前腰',
    data: '2017/11/5'
  }, {
    id: '6',
    src: 'images/3.jpg',
    name: '边前卫',
    data: '2017/11/6'
  }, {
    id: '7',
    src: 'images/1.jpg',
    name: '中前卫',
    data: '2017/11/7'
  }, {
    id: '8',
    src: 'images/2.jpg',
    name: '后腰',
    data: '2017/11/8'
  }, {
    id: '9',
    src: 'images/3.jpg',
    name: '翼卫',
    data: '2017/11/9'
  }, {
    id: '10',
    src: 'images/1.jpg',
    name: '边后卫',
    data: '2017/11/10'
  }, {
    id: '11',
    src: 'images/3.jpg',
    name: '中后卫',
    data: '2017/11/11'
  }, {
    id: '12',
    src: 'images/4.jpg',
    name: '门将',
    data: '2017/11/11'
  }
];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: '',
    images: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ images: images })
    // wx.request({
    //   url: 'http://api.wantuole.com/api/fifa/list2?1=1&n=%E6%AC%A7%E6%96%87&j=ST&mi=91&v=1&_=1535042679212', //仅为示例，并非真实的接口地址
    //   // data: {
    //   //   x: '',
    //   //   y: ''
    //   // },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     console.log(res.data)
    //   }
    // })
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