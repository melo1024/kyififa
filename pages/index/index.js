var app = getApp();
var allFormations = app.globalData.allFormations;

function isFormationContrainsAllPlayers(formation, keyWords) {
  var f_players = formation.players;
  var f_all_player = [];
  for (var i = 0; i < f_players.length; i++) {
    f_all_player = f_all_player.concat(f_players[i]);
  }
  for (var i = 0; i < keyWords.length; i++) {
    if (f_all_player.indexOf(keyWords[i]) == -1) {
      return false;
    }
  }
  return true;
};

Page({
  bindSearchValue: function (e) {
    var value = e.detail.value;
    this.setData({
      keyWord: value,
    });
  },

  // viewDetail: function(e){
  //   var index = parseInt(e.currentTarget.dataset.index);
  //   wx.navigateTo({
  //     url: 'detail?players=' + this.data.resultData[index]
  //   })
  // },
  
  wxSearchInput: function (e) {
    var that = this;
    var keyWordStr = that.data.keyWord;
    if (keyWordStr == null || keyWordStr.length==0){
      this.setData({ resultData: allFormations });
      return;
    }
    var newResult = [];
    var keyWords = [];
    if (keyWordStr.indexOf("，") > -1){
      keyWords = keyWordStr.split("，");
    } else {
      keyWords.push(keyWordStr);
    }
    for (var i = 0; i < allFormations.length; i++){
      if (isFormationContrainsAllPlayers(allFormations[i], keyWords)){
        newResult.push(allFormations[i]);
      }
    }
    this.setData({ resultData: newResult })
  },

  data: {
    keyWord: '',
    resultData: []
  },

  onLoad: function(option){
    this.setData({ resultData: allFormations });
  }
});

