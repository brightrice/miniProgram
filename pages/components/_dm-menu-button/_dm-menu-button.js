// pages/components/_dm-menu-button/_dm-menu-button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    showActionsheet: true,
    groups: [
        { text: '示例菜单', value: 1 },
        { text: '示例菜单', value: 2 },
        { text: '负向菜单', type: 'warn', value: 3 }
      ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    close: function () {
      this.setData({
        showActionsheet: false
      })
    },
    btnClick(e) {
      console.log(e)
      this.close()
    }
  }
})
