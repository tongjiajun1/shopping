// pages/my/my.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    hasUserInfo:false,
    canIUse:wx.canIUse('button.open-type.getUserInfo'),
    dingDan:[
      {img:'/images/my/fukuang.png',txt:'待付款',url:''},
      { img: '/images/my/fahuo.png', txt: '待发货', url: '' },
      { img: '/images/my/shouhuo.png', txt: '待收货', url: '' },
      { img: '/images/my/wancheng.png', txt: '已完成', url: '' },
      { img: '/images/my/shouhou.png', txt: '售后', url: '' }
    ],
    lastConent:[
      { img: '/images/my/pintuan.png', txt: '我的拼团', url: '' },
      { img: '/images/my/youhuijuan.png', txt: '我的优惠券', url: '' },
      { img: '/images/my/shoucang.png', txt: '我的收藏', url: '' },
      { img: '/images/my/kefu.png', txt: '在线客服', url: '' },
      { img: '/images/my/miaosha.png', txt: '秒杀', url: '' },
      { img: '/images/my/dizhi.png', txt: '收货地址', url: '' },
      { img: '/images/my/fenxiaoshang.png', txt: '成为分销商', url: '' },
      { img: '/images/my/youhuijuan.png', txt: '我的兑换', url: '' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
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