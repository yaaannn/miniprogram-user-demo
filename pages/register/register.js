// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: "",
    password: ""
  },
  userNameInputHandler(e) {
    this.setData({
      userName: e.detail.value
    })
  },
  passwordInputHandler(e) {
    this.setData({
      password: e.detail.value
    })
  },

  doReg(){
    console.log("hello");
    wx.request({
      url: 'http://127.0.0.1:5000/api/user/register',
      method:"POST",
      data:({
        "username": this.data.userName,
        "password": this.data.password,
      }),
      success:(res)=>{
        console.log(res.data);
      }
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