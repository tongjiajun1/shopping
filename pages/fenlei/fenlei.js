// pages/fenlei/fenlei.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curNav:1,
    curIndex:0,
    categroy:[
      { id: 1,name:'打牌美妆',isChild:true,
        children:[
          { child_id: 1, name: '洁面乳', image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563960474823&di=35fceb99ff8a13a594ad826f18533ad2&imgtype=0&src=http%3A%2F%2Ffile5.youboy.com%2Fe%2F2015%2F1%2F4%2F96%2F959819.jpg%3F308*308' },
          { child_id: 2, name: '爽肤水', image: 'http://img5.imgtn.bdimg.com/it/u=2515107258,273917&fm=26&gp=0.jpg' },
          { child_id: 3, name: '面霜', image: 'http://img1.imgtn.bdimg.com/it/u=1660277989,2353223136&fm=26&gp=0.jpg' },
          { child_id: 4, name: '面膜', image: 'http://img4.imgtn.bdimg.com/it/u=4034922290,1965801444&fm=26&gp=0.jpg' },
          { child_id: 5, name: '眼部精华', image: 'http://img3.imgtn.bdimg.com/it/u=209404671,1142571726&fm=26&gp=0.jpg' },
      ]
      },
      {
        id: 2, name: '网红爆款', isChild:true,
        children: [
          { child_id: 1, name: '防晒修复', image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=91621779,1930175160&fm=26&gp=0.jpg' },
          { child_id: 2, name: '卸妆', image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1789878471,2734997282&fm=26&gp=0.jpg' },
          { child_id: 3, name: '洗面奶', image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1739397509,2624806013&fm=11&gp=0.jpg' },
          { child_id: 4, name: 'T区护理', image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1675920859,3005023317&fm=26&gp=0.jpg' },
          { child_id: 5, name: '唇部防护', image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4087137107,2306131999&fm=26&gp=0.jpg'},
          { child_id: 6, name: '洗面奶', image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=707864062,740253230&fm=26&gp=0.jpg' },
          { child_id: 7, name: 'T区护理', image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4184584423,223152360&fm=26&gp=0.jpg' },
          { child_id: 8, name: '唇部防护', image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4233970597,155399016&fm=11&gp=0.jpg' }
        ] 
      },
      {
        id: 3, name: '品牌墙', isChild: true,
        children: [
          { child_id: 1, name: '洁面乳', image: '' },
          { child_id: 2, name: '洁面乳', image: '' },
          { child_id: 3, name: '洁面乳', image: '' },
          { child_id: 4, name: '洁面乳', image: '' },
          { child_id: 5, name: '洁面乳', image: '' },
        ]
      },
      {
        id: 4, name: '【护肤专区】', isChild: true,
        children: [
          { child_id: 1, name: '洁面乳', image: '' },
          { child_id: 2, name: '洁面乳', image: '' },
          { child_id: 3, name: '洁面乳', image: '' },
          { child_id: 4, name: '洁面乳', image: '' },
          { child_id: 5, name: '洁面乳', image: '' },
        ]
      },
      {
        id: 5, name: '【彩妆专区】', isChild: true,
        children: [
          { child_id: 1, name: '洁面乳', image: '' },
          { child_id: 2, name: '洁面乳', image: '' },
          { child_id: 3, name: '洁面乳', image: '' },
          { child_id: 4, name: '洁面乳', image: '' },
          { child_id: 5, name: '洁面乳', image: '' },
        ]
      },
      {
        id: 6, name: '打牌美妆', isChild: true,
        children: [
          { child_id: 1, name: '洁面乳', image: '' },
          { child_id: 2, name: '洁面乳', image: '' },
          { child_id: 3, name: '洁面乳', image: '' },
          { child_id: 4, name: '洁面乳', image: '' },
          { child_id: 5, name: '洁面乳', image: '' },
        ]
      },
      {
        id: 7, name: '打牌美妆', isChild: true,
        children: [
          { child_id: 1, name: '洁面乳', image: '' },
          { child_id: 2, name: '洁面乳', image: '' },
          { child_id: 3, name: '洁面乳', image: '' },
          { child_id: 4, name: '洁面乳', image: '' },
          { child_id: 5, name: '洁面乳', image: '' },
        ]
      },
      {
        id: 8, name: '打牌美妆', isChild: true,
        children: [
          { child_id: 1, name: '洁面乳', image: '' },
          { child_id: 2, name: '洁面乳', image: '' },
          { child_id: 3, name: '洁面乳', image: '' },
          { child_id: 4, name: '洁面乳', image: '' },
          { child_id: 5, name: '洁面乳', image: '' },
        ]
      }
    ]
  },
  switchright:function(e){
    var that=this;
    var ids=e.currentTarget.dataset.id;
    var index = e.currentTarget.dataset.index;
    // console.log(index)
    that.setData({
      curNav:ids,
      curIndex:index
    })
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