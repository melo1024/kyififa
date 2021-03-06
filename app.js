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
  
  getDesc: function (players){
    var result = '';
    var map = new Map();
    for(var i = 0; i<players.length; i++) {
      var playerArr = players[i];
      for (var j = 0; j < playerArr.length; j++) {
        if (map.get(playerArr[j]) != null) {
          var newNum = map.get(playerArr[j]) + 1;
          map.set(playerArr[j], newNum);
        } else {
          map.set(playerArr[j], 1);
        }
      }
    }
    map.forEach(function (item, key, obj) {
      result += key + 'x' + item + ',';
    });
    return result.substr(0, result.length - 1);
  },

  getAnalysis: function(id){
    var defaultAnalysis = '暂无数据，欢迎向订阅号fifa_kyi投稿！';
    if (id <= this.globalData.analysisArray.length){
      var analysis = this.globalData.analysisArray[id - 1].analysis
      return analysis == null ? defaultAnalysis : analysis;
    }
    return defaultAnalysis;
  },

  globalData: {
    userInfo: null,
    analysisArray: [
    ],
    allFormations: [
      {
        id: 1,
        name: "442平行",
        level: 0, 
        analysis: '这个阵型优点是双前锋拿球的时候一旦一个前锋能够抗住对方的后卫给另外一个前锋，机会就出来了，如果正面没机会也可以尝试下下底，缺点也是很明显的，开场容易被一条龙过到门将面前，防直塞球很弱，因为两个中后卫防守时漏的空间比较大',
        author: '小冷王子(贴吧)',
        datetime: '2018/9/1',
        players: [["前锋", "前锋"], ["左前卫", "中前卫", "中前卫", "右前卫"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 2,
        name: "433进攻",
        level: 0,
        analysis: '这个阵型是把433的中前卫改成了前腰，这样在进攻时中路多了一个人，可选择的机会也是蛮多的，但是前锋在防守的时候习惯性后撤，让前腰打伪9号凸前，所以前腰的选择上要有技术和速度支撑，缺点就是一旦局面打不开，容易被反击，这个阵型的双中前卫的防守态度不是很积极，因为后面有中后卫，容易堆积在一起，直塞比较容易穿过去',
        author: '小冷王子(贴吧)',
        datetime: '2018/9/1',
        players: [["左边锋", "前锋", "右边锋"], ["中前卫", "前腰", "中前卫"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 3,
        name: "343平行",
        level: 0,
        analysis: '3-4-3平行，这个阵型因为有三个中卫固然中路有保障了，进攻的时候人也多，但是防守时四个中场说过就过了，然后面对三个中卫，可以选择花式或者直接下底，这样显得三中卫明显不够看的，人特别少，遇到会下底的玩家，场均一个还是没难度的，因为如果对方阵型里有边锋或者边前卫那么全程下底也不是梦想',
        author: '小冷王子(贴吧)',
        datetime: '2018/9/1',
        players: [["左边锋", "前锋", "右边锋"], ["左前卫", "中前卫", "中前卫", "右前卫"], ["中后卫", "中后卫", "中后卫"]]
      },
      {
        id: 4,
        name: "3421",
        level: 0,
        analysis: null,
        author: null,
        datetime: '',
        players: [["前锋"], ["左内锋", "右内锋"], ["左前卫", "中前卫", "中前卫", "右前卫"], ["中后卫", "中后卫", "中后卫"]]
      },
      {
        id: 5,
        name: "433",
        level: 0,
        analysis: '4-3-3的阵型是攻守最均衡的，但是也是最一无是处的，你说他中场进攻呢不是很积极，防守围堵也不是很积极，优点是这个阵型适合倒脚稳定类型的人不着急进攻的，防守的时候三个中场能有个威慑作用，缺点呢是太平均了，中场容易被撕裂，只要过去中场面对后卫的话那这个阵型就是比较薄弱的存在了',
        author: '小冷王子(贴吧)',
        datetime: '2018/9/1',
        players: [["左边锋", "前锋", "右边锋"], ["中前卫", "中前卫", "中前卫"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 6,
        name: "451",
        level: 0,
        analysis: '451双前腰玩起来比较有趣，用灵活型前锋（如球探萨尔）更是惊喜，但是中前卫的人选就比较重要，毕竟是中场的唯一屏障，进攻的主要发起者，传球、带球、镇定一定要有水准以上，速度我觉得见人见智，我用的是克罗斯，前场倒脚三四次之后回给克罗斯，克罗斯直接直传萨尔，不过就是角球和边路传中就没人',
        author: 'edi003(贴吧)',
        datetime: '2018/9/1',
        players: [["前锋"], ["左前卫", "前腰", "中前卫", "前腰", "右前卫"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 7,
        name: "4231狭窄",
        level: 0,
        analysis: '这个阵型层次很分明，三个前腰能分担前锋的压力，防守双后腰又能减轻中后卫的压力，围攻中路的机会比较多，优点是很稳定的一个阵型像坦克一样，他比451的阵型好在速度上来了，碰到同等级的对手能不输于对手，缺点是这个阵型可以称为欺软怕硬，如果遇到高过自己的对手打得就难了，进攻受阻，防守人囤积较多，落后的情况下追分不是很容易',
        author: '小冷王子(贴吧)',
        datetime: '2018/9/1',
        players: [["前锋"], ["前腰", "前腰", "前腰"], ["后腰", "后腰"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 8,
        name: "541",
        level: 0,
        analysis: '这个阵型是三个中后卫搭配两个可以参与进攻可以参与防守的翼卫，前场只有四个人，单前锋的作用不明显，我见过最多的对手是前锋回撤做球给前腰或者俩边前卫，不熟悉这种打法的这种阵型用着很难打出大比分，优点就是防守不用愁了，5个后卫加1个后腰，这基本属于大巴阵了，缺点是翼卫爱凸前，容易会对方边锋边位过掉下底，三中卫必须要补位，这时候对面的边锋和边位可以选择继续过掉你或者分球给跑出空位的球员，那就很尴尬了',
        author: '小冷王子(贴吧)',
        datetime: '2018/9/1',
        players: [["前锋"], ["左前卫", "后腰", "前腰", "右前卫"], ["左翼卫", "中后卫", "中后卫", "中后卫", "右翼卫"]]
      },
      {
        id: 9,
        name: "5212",
        level: 0,
        analysis: '这个阵型和5-4-1的区别在于进攻的时候稳定，防守的时候一旦守住成功反击就是胜利，很多人不屑用5后卫，但是这个阵型双前锋真的是能玩的很6也不用担心对面会偷你一个球，防守反击的必备，他的优点是特别能抗对面的氪金阵容，我个人扛过超过我自己能力值10点以下的，他这个阵型可以让对面90+的前锋过掉你一个后来不及过掉第二个之后就是一个反击打得对方没脾气，彼此补位很及时，反击很犀利，非常适合新手或者能力值不高但是技术过硬的人用，并且这个阵型永远不怕落后追分难，因为会出现单刀的机会比丢球的机会多，缺点短板一般人是看不出来的，但是实际上这个阵型防守的时候对自己操作要求比较高，很吃意识的阵型，防地面直塞薄弱了一点，容易被钻空挡',
        author: '小冷王子(贴吧)',
        datetime: '2018/9/1',
        players: [["前锋", "前锋"], ["前腰"], ["中前卫", "中前卫"], ["左翼卫", "中后卫", "中后卫", "中后卫", "右翼卫"]]
      },
      {
        id: 10,
        name: "451平行",
        level: 0,
        analysis: '这个阵型的中场是个很强大的存在，俩后腰能给中后卫足够的保护，即使过去后腰也要掉层皮，俩边前卫可下底可内切，但是这个阵型的节奏很慢很慢，如果你没设置右边的进攻倾向的话，那推进就像老汉推车一样，会给对面减轻不少的压力，能让他们从容的思考你的出球线路，优点是领先后可以选择倒脚，让对方摸不到球，缺点是很难压制对方，不能大比分领先对方',
        author: '小冷王子(贴吧)',
        datetime: '2018/9/1',
        players: [["前锋"], ["左前卫", "中前卫", "中前卫", "中前卫", "右前卫"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 11,
        name: "3511",
        level: 0,
        analysis: null,
        author: null,
        datetime: '',
        players: [["前锋"], ["中锋"], ["左前卫", "后腰", "中前卫", "后腰", "右前卫"], ["中后卫", "中后卫", "中后卫"]]
      },
      {
        id: 12,
        name: "41212边路",
        level: 6,
        analysis: '这个阵型是目前我玩过的阵型里面反击进攻花样最多的一个，可以直塞，可以过顶，可以下底，优点是这个阵型进攻很流畅，各个角度都可以有人接球，一种打法被限制后另外就能换第二种打法，缺点是遇到高能力值氪金玩家基本上是很难把进攻打得流畅，因为这个游戏的后卫能力值高了的话对抗跑位你很难正面攻进去，如果不是很会下底基本上每次传中你前锋跟他后卫碰上顶球的时候都摔倒',
        author: '小冷王子(贴吧)',
        datetime: '2018/9/1',
        players: [["前锋", "前锋"], ["前腰"], ["左前卫", "右前卫"], ["后腰"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 13,
        name: "433控球",
        level: 8,
        analysis: '这个阵型是被忽略的一个反击阵型，个人认为它仅次于5-2-1-2的阵型，优点是打法多样，三前锋，双中场可以有很多打法，后腰很强力能断球，落后的时候追分也是比较容易的，缺点是能力值遇到高很多的没有5-2-1-2那种稳定的后防',
        author: '小冷王子(贴吧)',
        datetime: '2018/9/1',
        players: [["左边锋", "前锋", "右边锋"], ["中前卫", "后腰", "中前卫"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 14,
        name: "4141",
        level: 10,
        analysis: null,
        author: null,
        datetime: '',
        players: [["前锋"], ["左前卫", "中前卫", "中前卫", "右前卫"], ["后腰"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 15,
        name: "4321",
        level: 12,
        analysis: '4321AC米兰圣诞树阵型，如果看轻这个阵型的进攻能力最后的结果是被进球的时候一脸懵逼，一不留神就偷你一个球，但是你又不知道他从哪进攻，这个阵型的厉害之处不在于前锋而在于两个内锋，内锋的位置是介乎于中场和后卫之间，防守的时候并没有专门的球员负责盯防这个位置，所以容易被突，优点是内锋跑位的机会很大，盯防的电脑不会特别在乎，这给了内锋下底或者花式的选择，中场能给他们足够的支持，缺点是打法比较少还容易习惯性的打中路，碰到高强对手有点捉襟见肘',
        author: '小冷王子(贴吧)',
        datetime: '2018/9/1',
        players: [["前锋"], ["左内锋", "右内锋"], ["中前卫", "中前卫", "中前卫"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 16,
        name: "424",
        level: 14,
        analysis: '4-2-4阵型，初次解锁的时候还以为是俩中锋带俩边锋的阵型呢，结果是俩内锋，由于没有前锋抗在对方后卫的第一线，那对方后卫就会盯着内锋了，乍一看挺吓唬人的，但是真正碰到高强氪金玩家一样懵逼，优点是这个阵型的进攻人员多，四个前锋后面还有俩中前卫这就意味着一旦射门被对方门将或者后卫挡出还有俩补射的，缺点显而易见进攻的时候人太多导致回防的人比较少容易被反击，这个阵型有点鱼死网破的感觉，初次面对这个阵型的可能稍微有点懵，一旦比赛习惯了的话这个阵型就容易像大礼包了',
        author: '小冷王子(贴吧)',
        datetime: '2018/9/1',
        players: [["左边锋", "左内锋", "右内锋", "右边锋"], ["中前卫", "中前卫"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 17,
        name: "352",
        level: 16,
        analysis: '3-5-2，可能有些人认为3-4-3的进攻很可怕，但是实际上3-4-3没有神话中的那么强，目前我用过和见过的阵型里进攻最强的就是3-5-2了，中场太过于强大了，俩边前卫一个前腰再搭上两个后腰，相比于3-4-3的下底薄弱完全不存在了，因为中后卫去堵对方的时候后腰会自动补位到中后卫的位置，防下底的短板不太明显了，进攻双前锋永远是比单前锋好得分的，因为单前锋容易被针对，而双前锋可以拉扯和牵制对方的后卫给另一个前锋制造空间，优点是得分大比分比较的多，进攻单刀的机会很多，打法多种多样，下底花式单刀都可以有，缺点虽然不怕下底了但是这个阵型直塞的防守覆盖面并不大，每个防守球员只盯着自己的一亩三分地，容易被对方中场直塞出机会',
        author: '小冷王子(贴吧)',
        datetime: '2018/9/1',
        players: [["前锋", "前锋"], ["左前卫", "后腰", "前腰", "后腰", "右前卫"], ["中后卫", "中后卫", "中后卫"]]
      },
      {
        id: 18,
        name: "433防守",
        level: 18,
        analysis: '因为双后腰的存在，防守大于进攻的阵型，这个也是反击阵型，但是囤积了双后腰虽然保证了防守的安全性，可是在进攻上面不是很积极，需要前场的球员个人技术好才能得分',
        author: '小冷王子(贴吧)',
        datetime: '2018/9/1',
        players: [["左边锋", "前锋", "右边锋"], ["后腰", "中前卫", "后腰"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 19,
        name: "532",
        level: 20,
        analysis: '5-3-2，这个阵型我个人认为如果高强氪金用的话绝无可能出现输这个词，进攻有双前锋保证，中场有三中场输送炮弹，后场五后卫大巴一摆来吧，这个阵型如果真的氪金玩家用了的话对于我这种6元党或者平民玩家来说太惨了，优点就是结构很完整比5-2-1-2多了对中场的保护三个中前卫如果都是B2B中场就更没机会了，得分满场彩虹是常有的事，也不怕丢了，我只说下缺点，这个游戏目前来说再好的防守也没有进攻犀利，肯定是无攻不破的，这个阵型的缺点是过顶直塞，一旦对方前锋过顶直塞接球成功因为后场囤积较多的人，切人的时候容易切错，这样会给对方单刀的机会',
        author: '小冷王子(贴吧)',
        datetime: '2018/9/1',
        players: [["前锋", "前锋"], ["中前卫", "中前卫", "中前卫"], ["左翼卫", "中后卫", "中后卫", "中后卫", "右翼卫"]]
      },
      {
        id: 20,
        name: "4222",
        level: 22,
        analysis: '4-2-2-2，这个阵型和下面的4-4-2控球很像，但是完全不能一概而论，这个阵型是4后卫2后腰2前腰2前锋，优点是中路很大程度的加强进攻，因为有两个前腰第一脚不进的话第二脚很大程度会跟上补射，进攻是偏中路更多些，防守的时候因为有双后腰坐镇，补位和逼抢可以放开一搏，缺点这个阵型因为是偏中路倾向的，防守的时候也是中路更集中，而边路防守只有边后卫一个，相对下底比较单薄，如果对手是个非常喜欢下底并且会下底的，这样防守只能靠协防了，同样进攻是偏中路如果对手的阵型中路布兵很多或者很善于中路防守，那进攻压力也会增大',
        author: '小冷王子(贴吧)',
        datetime: '2018/9/1',
        players: [["前锋", "前锋"], ["前腰", "前腰"], ["后腰", "后腰"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 21,
        name: "4231边路",
        level: 24,
        analysis: '4-2-3-1边路，这个阵型不知道各位有没有玩过OL3，这个应该算是OL3韩服专业比赛最常用的阵型了，虽然不像OL3可以任意更改位置但是作用其实差不多，总体来说这个是比较平衡守大于攻的阵型，但是攻击力却不弱，优点是这个阵型边前卫可以选择边路攻击，而单前锋可以作为突击手或者一个支点，后面还潜伏一个前腰，进攻花样比较多，缺点是这个阵型对单前锋的能力要求比较高，左右边前卫要速度快，因为是守大于攻的阵型所以对于比较心急的玩家打进攻推进速度会让心里有股气',
        author: '小冷王子(贴吧)',
        datetime: '2018/9/1',
        players: [["前锋"], ["左前卫", "前腰", "右前卫"], ["后腰", "后腰"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 22,
        name: "343菱形",
        level: 26,
        analysis: '3-4-3菱形，首先这个阵型是从刚开服到现在的最主流的阵型了，无论是实时还是进攻你可以看到很多排行榜大佬都用这个阵型，想要证明自己是不是一个大佬首先要看你是不是用343菱形，其实这个阵型打进攻的用处要远远大于实时，之所以实时排行榜那么多用343菱的是因为那些大佬不想实时和进攻来回切换，这个阵型的优点很明显边路内切或者直塞花式过人等等，进攻很完善。作为缺点也是显而易见的防过顶直塞和下底防守压力明显大于352，所以如果是实时的话建议这个阵型如果对手不低于你能力值还是别上了，如果碰上就是喜欢玩过顶直塞和下底的对手，这个阵型防守远超你想象',
        author: '小冷王子(贴吧)',
        datetime: '2018/9/1',
        players: [["左边锋", "前锋", "右边锋"], ["左前卫", "后腰", "前腰", "右前卫"], ["中后卫", "中后卫", "中后卫"]]
      },
      {
        id: 23,
        name: "442控球",
        level: 28,
        analysis: '4-4-2控球，这个阵型和刚才我所讲的4-2-2-2很像，区别在于前者是双前腰，后者是双前卫，打法上也有很大区别，这个阵型很有欺骗性，用起来你们就会知道了，优点就是这个阵型是非常全面的进攻阵型，双前锋可以打中路，进不去的话还有双前卫边路往前推进，双后腰坐镇后场比较稳，而且这个阵型是很典型的诱敌深入的阵型，人少了进攻进不去，人多了进攻就被打反击会造成敌方人手不足，最常见的是对方8个人进入到自己半场只剩俩中后卫面对自己的俩前锋...缺点是这个阵型诱敌深入的前提是对手并不全能，如果是擅于远射和弧线的基本上就凉凉了，这个阵型防下底防中路人肯定是够，但是也很容易导致球员撞在一起需要注意',
        author: '小冷王子(贴吧)',
        datetime: '2018/9/1',
        players: [["前锋", "前锋"], ["左前卫", "后腰", "后腰", "右前卫"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 24,
        name: "4312",
        level: 30,
        analysis: null,
        author: null,
        datetime: '',
        players: [["前锋", "前锋"], ["前腰"], ["中前卫", "中前卫", "中前卫"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 25,
        name: "41212狭窄",
        level: 32,
        analysis: '该阵型特点很明显，没有边锋没有边前卫因此进攻偏向于中路，进攻对战中拿球的球员也偏向于中路球员，进攻路线更短，但同时比较依赖于中前卫的传球能力，假如你有幸运宝箱版莫德里奇，奖励推荐使用该阵型！另外很多人对4后卫和中前卫都很不屑，但4后卫容易被中路直塞的缺点该阵可以用后腰来弥补，而中前卫这个就见仁见智了，中前卫一般比边前卫防守和传球强，速度慢，所以两者之间选谁取决于你喜欢中路传导还是边路突破传中',
        // '4-1-2-1-2狭窄，这个阵型楼主要着重讲一下，之前有个4-1-2-1-2边路，那个阵型是侧重于边路进攻，防守边前卫基本消失无形，而这个阵型并不会，这个是一个侧重中路进攻推进的阵型边前卫换成了俩中前卫，这样保证了中路进攻和防守间的润滑不会给对方很大的空挡，缺点是这个阵型的边路进攻和边路防守都需要拉操作，不然边路基本等于没有',
        author: 'fifa_kyi(本APP开发人)',
        datetime: '2018/9/1',
        players: [["前锋", "前锋"], ["前腰"], ["中前卫", "中前卫"], ["后腰"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 26,
        name: "4411进攻",
        level: 34,
        analysis: '属于强不强弱不弱的阵型，推进速度和节奏是这个阵型的关键，但是因为没有后腰，双中前卫的后撤和逼抢并没有想象中那么好，边前卫的防守可以忽略不计了',
        author: '小冷王子(贴吧)',
        datetime: '2018/9/1',
        players: [["前锋"], ["中锋"], ["左前卫", "中前卫", "中前卫", "右前卫"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 27,
        name: "3412",
        level: 36,
        analysis: null,
        author: null,
        datetime: '',
        players: [["前锋", "前锋"], ["前腰"], ["左前卫", "中前卫", "中前卫", "右前卫"], ["中后卫", "中后卫", "中后卫"]]
      },
      {
        id: 28,
        name: "5221",
        level: 38,
        analysis: '5-2-2-1，这个阵型是五后卫中的3前锋版，和5-2-1-2是完全两种踢法的阵型，前者是中路进攻，后者更侧重于边路，同样是五后卫保证了防守时协防的优势，进攻对于习惯了3前锋的人来说这个阵型更保证了后防，缺点是和5212一样，没有后腰对手过半场直接面对的是中后卫，总体来说是防守反击的阵型',
        author: '小冷王子(贴吧)',
        datetime: '2018/9/1',
        players: [["前锋"], ["左边锋", "右边锋"], ["中前卫", "中前卫"], ["左翼卫", "中后卫", "中后卫", "中后卫", "右翼卫"]]
      },
      {
        id: 29,
        name: "451进攻",
        level: 40,
        analysis: '属于强不强弱不弱的阵型，有意思的在于你可以从中路传到边路边路再传到中路，是一个球形的阵型，这个阵型边路防守都比中路的要好太多了，同时喜欢下底的估计也会喜欢这个阵型',
        author: '小冷王子(贴吧)',
        datetime: '2018/9/1',
        players: [["前锋"], ["左前卫", "左内锋", "中前卫", "右内锋", "右前卫"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      },
      {
        id: 30,
        name: "433伪9号",
        level: 42,
        analysis: '4-3-3（伪9号），这个阵型楼主用的不多，因为在这个中锋（影锋）的位置上并没有找到比较满意的球员，这个阵型是最后一个阵型自然有它的道理，首先进攻的时候看似是以边锋为主可是实际上中锋（影锋）负责串联和得分，这个阵型会有迷惑性和误导性，一个后腰减轻了防守压力，边路进攻选择性更多点，而且这个阵型非常适合倒脚，传控流用着很舒服，缺点就是4后卫的通病，如果过掉了后腰打中路会轻松多了',
        author: '小冷王子(贴吧)',
        datetime: '2018/9/1',
        players: [["左边锋", "中锋", "右边锋"], ["中前卫", "后腰", "中前卫"], ["左后卫", "中后卫", "中后卫", "右后卫"]]
      }
    ]
  }
})
