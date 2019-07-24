// pages/gouwu/gouwu.js
var bool = true;
var numbers = 1;
Page({

  /**
   * 页面的初始数据
   */
 
  data: {
    selectAllStatus:true,
    show_edit:'block',
    edit_name:'编辑',
    edit_show: 'none',
    haslist: true,
    //金额总价
    totalPrice: 0,
    //全选状态，默认全选
    selectAllStatus:true,
    list:[
      { 
        id: 1, 
        title: 'JM/肌司研酵母黄金大米面膜美白',     image:'http://img0.imgtn.bdimg.com/it/u=698793355,1561759547&fm=26&gp=0.jpg',
        pro_name:'10片装',
        num:1,
        price:69,
        selected:true
      },
      {
        id: 2,
        title: 'JM/伊芙琳玫瑰护手霜大米面膜美白', image: 'http://img1.imgtn.bdimg.com/it/u=1586981094,4174369391&fm=26&gp=0.jpg',
        pro_name: '2片装',
        num: 1,
        price: 88,
        selected: true
      },
    ]
  },
  onShow(){
    wx.showToast({
      title: '加载中',
      icon:'loading',
      duration:1000
    })
  },

// 编辑
btn_edit:function(){
  var that=this;
  if(bool){
    that.setData({
      edit_show:'block',
      edit_name:'取消',
      show_edit:'none'
    })
    bool=false;
  }else{
    that.setData({
      edit_show:'none',
      edit_name:'编辑',
      show_edit:"block"
    })
    bool=true
  }
},

//删除
deletes:function(e){
  var that=this;
  const index=e.currentTarget.dataset.index;
  // console.log(index)
  var list=this.data.list;
  wx.showModal({
    title: '提示',
    content: '确认删除吗',
    success: function(res) {
      if(res.confirm){
        list.splice(index,1);
        that.setData({
          list: list
        });
        //如果数据为空
        if(!list.length){
          that.setData({
            haslist:false
          })
        }else{
          //调用金额渲染数据
          
        }
      }
    },
    fail:function(res){
      console.log(res)
    }
  })
},

//当前商品选中事件
selectList(e){
  var that=this;
  var index=e.currentTarget.dataset.index;
  var list=that.data.list;
  //默认全选
  that.data.selectAllStatus=true;
  //循环数组数据，判断----选中/未选中【selected】
  list[index].selected=!list[index].selected;
  //如果数组数据全部为selected【true】，全选
  for(var i = list.length-1;i>=0;i--){
    if(!list[index].selected){
      that.data.selectAllStatus=false;
      break;
    }
  }
  that.setData({
    list:list,
    selectAllStatus:that.data.selectAllStatus
  })
  //调用计算金额方法
  that.count_price();
},

//购物车全选事件
selectAll(e){
  let selectAllStatus=this.data.selectAllStatus;
  // true ----- false
  selectAllStatus=!selectAllStatus;
  let list=this.data.list;
  //循环遍历判断列表中的数据是否选中
  for(var i=0;i<list.length;i++){
    list[i].selected=selectAllStatus;
  }
  this.setData({
    selectAllStatus:selectAllStatus,
    list:list
  })
  this.count_price();
},


//绑定加数量事件
btn_add(e){
  const index=e.currentTarget.dataset.index;
  let list=this.data.list;
  let num=list[index].num;
  num=num+1;
  list[index].num=num;
  this.setData({
    list:list
  }),
  this.count_price();
},
  
//绑定减数量事件
btn_minus(e){
  const index=e.currentTarget.dataset.index;
  let list=this.data.list;
  let num=list[index].num;
  if(num<=1){
    return false;
  }else{
    num=num-1;
    list[index].num=num;
    this.setData({
      list:list
    });
  }
  this.count_price();
},

//提交订单
btn_submit_order:function(){
  var that=this;
  console.log(that.data.totalPrice)
  wx.showModal({
    title: '提示',
    content: '合计金额-'+that.data.totalPrice+'暂未开发',
  })
},

//计算总价格
count_price(e){
  let list=this.data.list;
  let total=0;
  for(let i=0;i<list.length;i++){
    if(list[i].selected){
      total+=list[i].num*list[i].price;
    }
  }
  this.setData({
    list:list,
    totalPrice:total.toFixed(2)
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