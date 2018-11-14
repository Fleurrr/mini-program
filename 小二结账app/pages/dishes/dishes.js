// pages/dishes/dishes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [
      {
        goods_id: 1,
        goods_title: '水饺大份',
        goods_img: '/image/dish1.jpg',
        goods_xiaoliang: '10',
        goods_price: '12'
      }, {
        goods_id: 2,
        goods_title: '小笼包×8',
        goods_img: '/image/dish1.jpg',
        goods_xiaoliang: '20',
        goods_price: '7'
      }, {
        goods_id: 3,
        goods_title: '老干妈炒饭',
        goods_img: '/image/dish1.jpg',
        goods_xiaoliang: '30',
        goods_price: '8'
      }, {
        goods_id: 4,
        goods_title: '瘦肉炒饭',
        goods_img: '/image/dish1.jpg',
        goods_xiaoliang: '40',
        goods_price: '8'
      }, {
        goods_id: 5,
        goods_title: '招牌李大美炒饭',
        goods_img: '/image/dish1.jpg',
        goods_xiaoliang: '200',
        goods_price: '11'
      }
    ],
  },
  jumptoadd: function (options) {
    wx.switchTab({ url: '../add/add' })
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