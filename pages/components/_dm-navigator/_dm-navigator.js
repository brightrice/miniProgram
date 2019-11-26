// pages/components/_dm-navigator/_dm-navigator.js
const mymenu=[
  "../dmDraw/dmDraw",
  "../dmMusic/dmMusic",
  "../dmElse/dmElse"
]

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '大米工作室'
    },
    bgColor: { // 导航栏背景颜色
      type: String,
      value: '#0075a9'
    },
    fontColor: { // 导航栏字体颜色
      type: String,
      value: 'white'
    }
  },
  lifetimes: {
    attached() {
      let _this = this;
      wx.getSystemInfo({
        success: function (res) {
          console.log(res)
          _this.setData({
            statusHeight: res.statusBarHeight
          })
        },
      })
      let btn = wx.getMenuButtonBoundingClientRect()
      console.log(btn)
      this.setData({
        btn: btn
      })
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusHeight: 0,
    btn: {},
    list: [{
      "text": "大米绘画",
      "pagePath": "pages/dmDraw/dmDraw",
      //"iconPath": "/page/weui/images/tabbar_icon_chat_default.png",
      //"selectedIconPath": "/page/weui/images/tabbar_icon_chat_active.png",
      dot: true
    },
    {
      "text": "大米音乐",
      //"iconPath": "/page/weui/images/tabbar_icon_setting_default.png",
      //"selectedIconPath": "/page/weui/images/tabbar_icon_setting_active.png",
      dot: true
    },
    {
      "text": "其他",
      //"iconPath": "/page/weui/images/tabbar_icon_setting_default.png",
      //"selectedIconPath": "/page/weui/images/tabbar_icon_setting_active.png",
      dot: true
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabChange(e) {
      console.log('tab change', e.detail.index);
      wx.navigateTo({
        url: mymenu[e.detail.index],
        success: function (res) {
          console.log(res);
        },
        fail: function (res) {
          console.log(res)
        }
      })
    }
  }
})