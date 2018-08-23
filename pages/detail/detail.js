// pages/detail/detail.js
// var location_height = [49, 46, 43, 40, 36, 34, 28, 22, 18];
function getHeightByLocation(location){
  var height;
  switch (location){
    case '前锋': height = 45;break;
    case '中锋': 
    case '左内锋': 
    case '右内锋': height = 42; break;
    case '左边锋':
    case '右边锋': height = 39; break;
    case '前腰': height = 32; break;
    case '左前卫':
    case '右前卫': height = 28; break;
    case '中前卫': height = 26; break;
    case '后腰': height = 22; break;
    case '左翼卫':
    case '右翼卫': height = 16; break;
    case '左后卫':
    case '中后卫':
    case '右后卫': height = 12; break;
  }
  return height;
}

function getSerie(playerlist, serieName){
  var len = parseInt(68/(playerlist.length+1));
  var remainder = 68 % (playerlist.length + 1);
  var data = [];
  var value = [];
  var firstRight = false;
  if (playerlist.length%2==0) {
    //偶数，把多余空间放中间，左右对称
    for (var i = 0; i < 69; i++){
      if(i>0 && i<35 && i % len == 0){
        var n = i/len;
        data.push(getHeightByLocation(playerlist[n-1]));
        value.push(playerlist[n - 1]);
      } else if (i > 34 && i < 68 && (i - remainder) % len == 0){
        var n = (i - remainder) / len;
        data.push(getHeightByLocation(playerlist[n - 1]));
        value.push(playerlist[n - 1]);
      } else {
        data.push(null);
        value.push(null);
      }
    }
  } else {
    //奇数，中间球员放球场中间，然后左右对称
    var center_no = parseInt(playerlist.length/2) + 1;
    for (var i = 0; i < 69; i++) {
      if (i >= len && i < 34 && (34-i) % len == 0) {
        var n = center_no - (34 - i) / len;
        data.push(getHeightByLocation(playerlist[n - 1]));
        value.push(playerlist[n - 1]);
      } else if (i > 34 && i <= 68-len && (i - 34) % len == 0) {
        var n = center_no + (i - 34) / len;
        data.push(getHeightByLocation(playerlist[n - 1]));
        value.push(playerlist[n - 1]);
      } else if (i==34){
        data.push(getHeightByLocation(playerlist[center_no - 1]));
        value.push(playerlist[center_no - 1]);
      } else {
        data.push(null);
        value.push(null);
      }
    }
  }
  return {
    name: serieName,
    data: data,
    value: value
  };
}

function getSeries(players) {
  var series = [];
  for(var i=0; i<players.length;i++){
    series.push(getSerie(players[i],'playerlist'+(i+1)))
  }
  return series;
}

function getDesc(players){
  var result='';
  var map = new Map();
  for (var i = 0; i < players.length; i++) {
    var playerArr = players[i];
    for (var j=0;j<playerArr.length;j++){
      if (map.get(playerArr[j])!=null){
        var newNum = map.get(playerArr[j])+1;
        map.set(playerArr[j], newNum);
      }else{
        map.set(playerArr[j], 1);
      }
    }
  }
  map.forEach(function(item, key, obj){
    result += key + 'x' + item + ',';
  });
  return '构成：'+result.substr(0,result.length-1);
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '阵型详情',
    desc: '',
    level: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app = getApp();
    var formation = app.loadFormation(options.id);
    this.setData({ title: formation.name });
    this.setData({ level: formation.level });
    var players = formation.players;//[["前锋", "前锋"], ["左前卫", "中前卫", "中前卫", "右前卫"], ["左后卫", "中后卫", "中后卫", "右后卫"]];
    var desc = getDesc(players);
    this.setData({ desc: desc });
    var series = getSeries(players);
    var Charts = require('wxcharts.js');

    
    //formationCanvas
    new Charts({
      canvasId: 'formationCanvas',
      type: 'line',
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
        51, 52, 53, 54, 55, 56, 57, 58, 59, 50,
        61, 62, 63, 64, 65, 66, 67, 68, 69],
      series: series,
      yAxis: {
        min: 0,
        max: 52,
        disabled : true
      },
      xAxis:{
        disabled: true,
        disableGrid: true
      },
      width: 280,
      height: 175,
      legend : false,
      animation : true
    });

    // new Charts({
    //   canvasId: 'formationCanvas',
    //   type: 'line',
    //   categories: ['2012', '2013', '2014', '2015', '2016', '2017'],
    //   series: [{
    //     name: '成交量1',
    //     data: [0.15, 0.2, 0.45, 0.37, 0.4, 0.8],
    //     format: function (val) {
    //       return val.toFixed(2) + '万';
    //     }
    //   }, {
    //     name: '成交量2',
    //     data: [0.30, 0.37, 0.65, 0.78, 0.69, 0.94],
    //     format: function (val) {
    //       return val.toFixed(2) + '万';
    //     }
    //   }],
    //   yAxis: {
    //     title: '成交金额 (万元)',
    //     format: function (val) {
    //       return val.toFixed(2);
    //     },
    //     min: 0
    //   },
    //   width: 320,
    //   height: 200
    // });

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