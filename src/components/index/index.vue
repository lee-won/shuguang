<template>
  <div class="index">
    <div class="head">
      <div class="date-wrapper">
        <span class="date">11月25日</span>
        <span class="week">星期六</span>
      </div>
      <div class="info">
        <div class="info-left">
          <h1>首页</h1>
        </div>
        <div class="info-right">
          <div class="headPic">

          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content-wrapper">
        <div class="head">
          <h1>今日爱心值</h1>
          <div class="time">更新至13：30</div>
        </div>
        <div class="chart">
          <div class="line">
            <img src="./pic_line.png">
          </div>
          <div class="wave">
            <img src="./pic_wave.png">
          </div>
          <div class="list">
            <ul>
              <li>Mon</li>
              <li>Tue</li>
              <li>Wed</li>
              <li>Thu</li>
              <li>Fri</li>
              <li>Sat</li>
            </ul>
          </div>
        </div>
        <div class="info">
          <div class="money-wrapper">
            <div class="money">
              <span class="circle"></span>
              <span class="num">1.225.563</span>
            </div>
            <div class="name">筹款金额</div>
          </div>
          <div class="people-wrapper">
            <div class="people">
              <span class="circle"></span>
              <span class="num">25.563</span>
            </div>
            <div class="name">帮助人次</div>
          </div>
        </div>
      </div>
    </div>
    <div class="donation">
      <div class="head">
        <h1>曙光筹</h1>
        <p class="info">一次帮助多个项目</p>
        <div class="goHelp">去帮助</div>
      </div>
      <div class="donation-list">
        <div class="item">
          <div class="item-left">
            <div class="name">马老师茶</div>
            <div class="info">帮助了 <span class="num1">5</span> 个家庭 <span class="num2">100</span> 元</div>
            <div class="date">15分钟前</div>
          </div>
          <div class="item-right">
            <div classs="face">
              <img src="./head1.png">
            </div>
            <div class="detail">
                <span class="icon"></span>
                <span class="num">100曙光值</span>
            </div>
          </div>
        </div>

        <div class="item">
          <div class="item-left">
            <div class="name">番薯地里长西瓜</div>
            <div class="info">帮助了 <span class="num1">5</span> 个家庭 <span class="num2">1000</span> 元</div>
            <div class="date">11/25 12:26</div>
          </div>
          <div class="item-right">
            <div classs="face">
              <img src="./head2.png">
            </div>
            <div class="detail">
              <span class="icon"></span>
              <span class="num">1000曙光值</span>
            </div>
          </div>
        </div>

        <div class="item">
          <div class="item-left">
            <div class="name">北燕</div>
            <div class="info">帮助了 <span class="num1">5</span> 个家庭 <span class="num2">100</span> 元</div>
            <div class="date">11/25 12:40</div>
          </div>
          <div class="item-right">
            <div classs="face">
              <img src="./head3.png">
            </div>
            <div class="detail">
              <span class="icon"></span>
              <span class="num">500曙光值</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .head
    padding: 40px 0
    margin:0 20px
    .date-wrapper
      font-size:0
      color:#999
      text-align: left
      height: 18px
      line-height:18px
      span
        display :inline-block
        font-size:13px
        &.week
          margin-left:13px
    .info
      height: 40px
      .info-left
        float:left
        h1
          width:60px
          height:40px
          font-size:28px
          font-family:PingFangSC-Semibold
          color:rgba(51,51,51,1)
          line-height:40px
          vertical-align :top
      .info-right
        float:right
        .headPic
          width:36px
          height: 36px
          border-radius: 50%
          line-height:40px
          margin-top:2px
          background :url("./head3.png")no-repeat center center

  .content-wrapper
    margin:0 20px
    padding-top:20px
    position:relative
    border-radius:20px
    box-shadow :  -5px 5px 10px 0 rgba(0,0,0,0.14), //左边阴影
      0 0 0, //顶部阴影
      0px 20px 20px 0 rgba(0,0,0,0.14), //底部阴影
      5px 5px 10px 0 rgba(0,0,0,0.14) //右边阴影
    .head
      font-size:0
      margin-left:20px
      h1
        height:39px
        font-size:28px
        font-family:PingFangSC-Medium
        color:rgba(51,51,51,1)
        line-height:39px
      .time
        width:80px;
        height:19px;
        font-size:13px;
        font-family:PingFangSC-Regular
        color:rgba(153,153,153,1)
        line-height:19px;
    .chart
      margin-top:37px
      position: relative
      .line
        width:100%
        img
          width:100%
      .wave
        position: relative
        width:100%
        top:5px
        img
          width:100%
      .list
        position:absolute
        bottom:15px
        left:0
        width:100%
        ul
          display flex
          li
            flex:1
            text-align: center
            height:13px;
            font-size:11px;
            font-family:SFUIText-Medium
            color:rgba(255,255,255,1)
            line-height:13px
    .info
      position:absolute
      right:20px
      top:25px
      .money-wrapper
        margin-bottom: 12px
        .money
          height: 22px
          height: 22px
          font-size:0
          .circle
            display :inline-block
            width: 10px
            height:10px
            border-radius:50%
            background:url("./dot1.png") no-repeat center center
          .num
            height:22px;
            font-size:17px;
            font-family:DINPro-Medium
            color:rgba(51,51,51,1)
            line-height:22px
            margin-left:8px
        .name
          height:15px;
          font-size:11px;
          font-family:PingFangSC-Regular
          color:rgba(153,153,153,1);
          line-height:15px
          text-indent :18px
      .people-wrapper
        .people
          height: 22px
          font-size:0
          .circle
            display :inline-block
            width: 10px
            height:10px
            border-radius:50%
            background:url("./dot2.png") no-repeat center center
          .num
            height:22px;
            font-size:17px;
            font-family:DINPro-Medium
            color:rgba(51,51,51,1)
            line-height:22px
            margin-left:8px
        .name
          height:15px;
          font-size:11px;
          font-family:PingFangSC-Regular
          color:rgba(153,153,153,1)
          line-height:15px
          text-indent :18px

  .donation
    margin:30px 20px 80px 20px
    padding: 20px 0
    border-radius:20px
    box-shadow :  -5px 5px 10px 0 rgba(0,0,0,0.14), //左边阴影
      0 0 0, //顶部阴影
      0px 20px 20px 0 rgba(0,0,0,0.14), //底部阴影
      5px 5px 10px 0 rgba(0,0,0,0.14) //右边阴影
    .head
      padding:0 20px
      position: relative
      margin-bottom:15px
      h1
        height:39px
        font-size:28px
        font-family:PingFangSC-Medium
        color:rgba(51,51,51,1)
        line-height:39px
        margin-bottom: 4px
      .info
        height:18px;
        font-size:13px;
        font-family:PingFangSC-Regular
        color:rgba(153,153,153,1);
        line-height:18px;
      .goHelp
        position: absolute
        top:20px
        right: 20px
        width: 90px
        height: 38px
        background :url("./btn_gohelp.png")no-repeat center top
        font-size:15px;
        font-family:PingFangSC-Medium;
        color:rgba(255,255,255,1)
        line-height: 38px
        text-align: center
    .donation-list
      padding:0 20px
      .item
        display :flex
        padding:15px 0
        border-bottom:1px solid rgba(7,17,27,0.1)
        &:last-child
          border-bottom:none
        .item-left
          flex:1
          .name
            height:21px
            font-size:15px
            font-family:PingFangSC-Regular
            color:rgba(51,51,51,1)
            line-height:21px
            margin-bottom:4px
          .info
            height:18px
            font-size:13px
            font-family:PingFangSC-Regular
            color:rgba(153,153,153,1)
            line-height:18px
            margin-bottom:8px
            .num1
              color:#26C7AF
            .num2
              color:#FFDD00
          .date
            height:13px
            font-size:11px
            font-family:SFUIText-Regular
            color:rgba(153,153,153,1)
            line-height:13px
        .item-right
          flex:0 0 76px
          text-align: center
          .face
            width:50px
            height:50px
            border-radius:50%
            .img{
              width:100%
            }
          .detail
            position:relative
            top:-4px
            width: 76px
            height: 18px
            background :url("./btn_shuguangzhi.png")no-repeat center top
            font-size:0
            .icon{
              display: inline-block
              width:10px
              height: 10px
              background url("./icon_up.png")no-repeat center center
              margin-left: 2px
            }
            .num
              display: inline-block
              height:12px
              font-size:9px
              font-family:PingFangSC-Regular
              color:rgba(255,255,255,1)
              line-height:18px
              margin-left:2px

</style>
