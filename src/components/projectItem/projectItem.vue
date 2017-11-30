<template>
  <div class="item">
    <div class="pic">
      <img :src="item.img">
    </div>
    <div class="content">
      <div class="status" :class="item.status ? 'overStatus' : 'ingStatus'">{{item.status ? '筹款完成':'正在筹款'}}</div>
      <p class="desc">{{item.desc}}</p>
      <progressBar :item="item"></progressBar>
      <div class="info">
        <div class="now-mount">
          <span class="name">已筹金额</span>
          <span claSS="num">{{item.nowMount}}</span>
        </div>
        <div class="target-mount">
          <span class="name">目标金额</span>
          <span claSS="num">{{item.targetMount}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import progressBar from '../progressbar/progressbar'
  export default{
    props: {
      item: {
        type: Object,
        default: {}
      },
      colorStatus: {
        type: Boolean
      }
    },
    components: {
      progressBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .item
    height: 140px
    display: flex
    box-shadow :  0 0 0, //左边阴影
      2px -2px 2px 0 rgba(0,0,0,0.04), //顶部阴影
      0px 5px 5px 0 rgba(0,0,0,0.04), //底部阴影
      5px 5px 5px 0 rgba(0,0,0,0.04) //右边阴影
    .pic
      flex: 0 0 140px
      width:140px
      height:140px
      position:relative
      top:-10px
      z-index:2
      .img
        width:100%
        z-index:2
    .content
      flex:1
      padding:0 10px
      margin-top:10px
      .status
        height:15px
        font-size:11px
        font-family:PingFangSC-Regular
        line-height:15px
        &.ingStatus
          color:rgba(255,221,0,1)
        &.overStatus
          color:rgba(52,170,76,1)
      .desc
        height:36px
        font-size:13px
        font-family:PingFangSC-Regular
        color:rgba(51,51,51,1)
        line-height:18px
        overflow: hidden
        margin-bottom:9px
      .info
        display: flex
        .now-mount
          flex:1
          text-align: center
          border-right:1px solid rgba(0,0,0,0.08)
          .name
            height:15px
            font-size:11px
            font-family:PingFangSC-Regular
            color:rgba(153,153,153,1)
            line-height:15px
            margin-bottom: 4px
          .num
            height:15px
            font-size:12px
            font-family:SFUIText-Medium
            color:rgba(51,51,51,1)
            line-height:15px
        .target-mount
          flex:1
          text-align:center
          .name
            height:15px
            font-size:11px
            font-family:PingFangSC-Regular
            color:rgba(153,153,153,1)
            line-height:15px
            margin-bottom: 4px
          .num
            height:15px
            font-size:12px
            font-family:SFUIText-Medium
            color:rgba(51,51,51,1)
            line-height:15px
</style>
