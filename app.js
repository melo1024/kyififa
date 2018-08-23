//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  loadFormation : function (id) {
    return this.globalData.allFormations[id-1];
  },
  globalData: {
    userInfo: null,
    allFormations: [
      {
        id: 1,
        name: "442平行",
        level: 0,
        players: [["前锋", "前锋"], ["左前卫", "中前卫", "中前卫", "右前卫"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 2,
        name: "433进攻",
        level: 0,
        players: [["左边锋", "前锋", "右边锋"], ["中前卫", "前腰", "中前卫"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 3,
        name: "343平行",
        level: 0,
        players: [["左边锋", "前锋", "右边锋"], ["左前卫", "中前卫", "中前卫", "右前卫"], ["中后卫", "中后卫", "中后卫"]]
      },
      {
        id: 4,
        name: "3421",
        level: 0,
        players: [["前锋"], ["左内锋", "右内锋"], ["左前卫", "中前卫", "中前卫", "右前卫"], ["中后卫", "中后卫", "中后卫"]]
      },
      {
        id: 5,
        name: "433",
        level: 0,
        players: [["左边锋", "前锋", "右边锋"], ["中前卫", "中前卫", "中前卫"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 6,
        name: "451",
        level: 0,
        players: [["前锋"], ["左前卫", "前腰", "中前卫", "前腰", "右前卫"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 7,
        name: "4231狭窄",
        level: 0,
        players: [["前锋"], ["前腰", "前腰", "前腰"], ["后腰", "后腰"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 8,
        name: "541",
        level: 0,
        players: [["前锋"], ["左前卫", "后腰", "前腰", "右前卫"], ["左翼卫", "中后卫", "中后卫", "中后卫", "右翼卫"]]
      },
      {
        id: 9,
        name: "5212",
        level: 0,
        players: [["前锋", "前锋"], ["前腰"], ["中前卫", "中前卫"], ["左翼卫", "中后卫", "中后卫", "中后卫", "右翼卫"]]
      },
      {
        id: 10,
        name: "451平行",
        level: 0,
        players: [["前锋"], ["左前卫", "中前卫", "中前卫", "中前卫", "右前卫"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 11,
        name: "3511",
        level: 0,
        players: [["前锋"], ["中锋"], ["左前卫", "后腰", "中前卫", "后腰", "右前卫"], ["中后卫", "中后卫", "中后卫"]]
      },
      {
        id: 12,
        name: "41212边路",
        level: 6,
        players: [["前锋", "前锋"], ["前腰"], ["左前卫", "右前卫"], ["后腰"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 13,
        name: "433控球",
        level: 8,
        players: [["左边锋", "前锋", "右边锋"], ["中前卫", "后腰", "中前卫"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 14,
        name: "4141",
        level: 10,
        players: [["前锋"], ["左前卫", "中前卫", "中前卫", "右前卫"], ["后腰"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 15,
        name: "4321",
        level: 12,
        players: [["前锋"], ["左内锋", "右内锋"], ["中前卫", "中前卫", "中前卫"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 16,
        name: "424",
        level: 14,
        players: [["左边锋", "左内锋", "右内锋", "右边锋"], ["中前卫", "中前卫"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 17,
        name: "352",
        level: 16,
        players: [["前锋", "前锋"], ["左前卫", "后腰", "前腰", "后腰", "右前卫"], ["中后卫", "中后卫", "中后卫"]]
      },
      {
        id: 18,
        name: "433防守",
        level: 18,
        players: [["左边锋", "前锋", "右边锋"], ["后腰", "中前卫", "后腰"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 19,
        name: "532",
        level: 20,
        players: [["前锋", "前锋"], ["中前卫", "中前卫", "中前卫"], ["左翼卫", "中后卫", "中后卫", "中后卫", "右翼卫"]]
      },
      {
        id: 20,
        name: "4222",
        level: 22,
        players: [["前锋", "前锋"], ["前腰", "前腰"], ["后腰", "后腰"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 21,
        name: "4231边路",
        level: 24,
        players: [["前锋"], ["左前卫", "前腰", "右前卫"], ["后腰", "后腰"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 22,
        name: "343菱形",
        level: 26,
        players: [["左边锋", "前锋", "右边锋"], ["左前卫", "后腰", "前腰", "右前卫"], ["中后卫", "中后卫", "中后卫"]]
      },
      {
        id: 23,
        name: "442控球",
        level: 28,
        players: [["前锋", "前锋"], ["左前卫", "后腰", "后腰", "右前卫"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 24,
        name: "4312",
        level: 30,
        players: [["前锋", "前锋"], ["前腰"], ["中前卫", "中前卫", "中前卫"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 25,
        name: "41212狭窄",
        level: 32,
        players: [["前锋", "前锋"], ["前腰"], ["中前卫", "中前卫"], ["后腰"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 26,
        name: "4411进攻",
        level: 34,
        players: [["前锋"], ["前腰"], ["左前卫", "后腰", "后腰", "右前卫"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 27,
        name: "3412",
        level: 36,
        players: [["前锋", "前锋"], ["前腰"], ["左前卫", "中前卫", "中前卫", "右前卫"], ["中后卫", "中后卫", "中后卫"]]
      },
      {
        id: 28,
        name: "5221",
        level: 38,
        players: [["前锋"], ["左边锋", "右边锋"], ["中前卫", "中前卫"], ["左翼卫", "中后卫", "中后卫", "中后卫", "右翼卫"]]
      },
      {
        id: 29,
        name: "451进攻",
        level: 40,
        players: [["前锋"], ["左前卫", "左内锋", "中前卫", "右内锋", "右前卫"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 30,
        name: "433伪9号",
        level: 42,
        players: [["左边锋", "中锋", "右边锋"], ["中前卫", "后腰", "中前卫"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      }
    ]
  }
})
