Page({
  data: {
    dataList: [
      {
        goods_id: 1,
        goods_title: '商品标题1',
        goods_img: '/image/head.png',
        goods_xiaoliang: '0',
        goods_price: '60'
      }, {
        goods_id: 1,
        goods_title: '商品标题2',
        goods_img: '/image/head.png',
        goods_xiaoliang: '0',
        goods_price: '70'
      }, {
        goods_id: 1,
        goods_title: '商品标题3',
        goods_img: '/image/head.png',
        goods_xiaoliang: '0',
        goods_price: '80'
      }, {
        goods_id: 1,
        goods_title: '商品标题4',
        goods_img: '/image/head.png',
        goods_xiaoliang: '0',
        goods_price: '90'
      }, {
        goods_id: 1,
        goods_title: '商品标题5',
        goods_img: '/image/head.png',
        goods_xiaoliang: '0',
        goods_price: '110'
      }
    ],
    currentData: 0,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  //获取当前滑块的index
  bindchange: function (e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function (e) {
    const that = this;

    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {

      that.setData({
        currentData: e.target.dataset.current
      })
    }
  }
})