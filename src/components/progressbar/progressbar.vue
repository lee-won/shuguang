<template>
  <div class="progress">
    <div class="layer1"></div>
    <div class="layer2" :style="progressLayer2"></div>
    <div class="layer3"  :style="progressLayer3">{{progressLayer2.width}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    item: {
      type: Object
    }
  },
  data() {
    return {
      progressLayer2: {
        width: this.item.progress * 100 + '%'
      },
      progressLayer3: {
        right: (1 - this.item.progress) * 100 + '%'
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .progress
    margin-bottom:11px
    height: 18px
    position:relative
    .layer1
      width:100%
      height: 6px
      background:rgba(0,0,0,0.08)
      border-radius:3px
      position :absolute
      top:6px
      left:0
    .layer2
      width:65%
      height: 8px
      background:url(./pingpu.png)repeat-x center center
      border-radius:4px
      position :absolute
      top:5px
      left:0
    .layer3
      width:30px
      height: 18px
      background:url(./Rectangle.png)repeat-x center center
      font-size:9px
      font-family:SFUIText-Medium
      color:rgba(255,255,255,1)
      line-height:18px
      text-align:center
      position :absolute
      top:0
      right:35%
</style>
