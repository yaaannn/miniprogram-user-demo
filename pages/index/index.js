Page({
  data: {
    userName: "",
    password: "",
    userId: "",
    isLogin: false,
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

  // 登录方法
  doLogin() {
    wx.request({
      url: `http://127.0.0.1:5000/api/user/login?username=${this.data.userName}&password=${this.data.password}`,
      method: "POST",
      success: (res) => {
        console.log(res.data);
        if (res.data.mate.status == 0) {
          this.setData({
            isLogin: true,
            userId: res.data.data.id
          })
        }
        // 将token 存入本地，保存登录状态
        wx.setStorageSync('token', res.data.data.token)
        console.log(wx.getStorageSync('token'));
      }

    })
  },

  // 查看所有用户
  checkAll() {
    wx.request({
      url: 'http://127.0.0.1:5000/api/user/all',
      method: "GET",
      success: (res) => {
        console.log(res.data)
      }
    })
  },

  // 注册方法
  doReg() {
    wx.request({
      url: 'http://127.0.0.1:5000/api/user/register',
      method: "POST",
      data: ({
        "username": this.data.userName,
        "password": this.data.password,
      }),
      success: (res) => {
        console.log(res.data);
      }
    })
  },

  // 修改用户密码
  changePwd() {
    wx.request({
      url: `http://127.0.0.1:5000/api/user/update/${this.data.userId}`,
      method: "PUT",
      data: ({
        "username": this.data.userName,
        "password": this.data.password,
        "token": wx.getStorageSync('token')
      }),

      success: (res) => {
        console.log(res.data);
      }

    })
  },

  // 删除当前用户
  deleteUser() {
    wx.request({
      url: `http://127.0.0.1:5000/api/user/delete/${this.data.userId}`,
      method: "DELETE",
      data: ({
        "username": this.data.userName,
        "token": wx.getStorageSync('token')
      }),
      success:(res)=>{
        console.log(res.data);
      }
    })
  },

})