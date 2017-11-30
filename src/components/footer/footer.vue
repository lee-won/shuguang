<template>
  <div class="footer">
    <ul>

        <li @click="addClass(0)">
          <router-link to="/">
          <span class="icon">
            <img src="./icon_home_dis.png" v-show="iconList[0]===false">
            <img src="./icon_home_sel.png" v-show="iconList[0]===true">
          </span>
          <span class="name" :class="{active:iconList[0]===true}">首页</span>
          </router-link>
        </li>


        <li  @click="addClass(1)">
          <router-link to="project">
          <span class="icon">
            <img src="./icon_project_dis.png" v-show="iconList[1]===false">
            <img src="./icon_project_sel.png" v-show="iconList[1]===true">
          </span>
            <span class="name" :class="{active:iconList[1]===true}">项目</span>
          </router-link>
        </li>

      <li>
        <span class="noMargin">
          <img src="./icon_startproject.png">
        </span>

      </li>
      <li @click="addClass(2)">
        <span class="icon">
          <img src="./icon_message_dis.png" v-show="iconList[2]===false">
          <img src="./icon_message_sel.png" v-show="iconList[2]===true">
        </span>
        <span class="name" :class="{active:iconList[2]===true}">消息</span>
      </li>
      <li @click="addClass(3)">
        <span class="icon">
          <img src="./icon_personal_dis.png" v-show="iconList[3] === false">
          <img src="./icon_personal_sel.png" v-show="iconList[3] === true">
        </span>
        <span class="name" :class="{active:iconList[3] === true}">个人</span>
      </li>
    </ul>
  </div>

</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      iconList: [true, false, false, false]
    }
  },
  methods: {
    addClass(data) {
      this.iconList = [false, false, false, false]
      this.iconList[data] = true
      // window.location.reload()
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/basic.styl"
  .footer
    position: fixed
    bottom:0
    left:0
    width:100%
    background :#fff
    height:50px
    ul
      display :flex
      li
        flex:1
        text-align:center
        span
          display :block
          &.icon
            margin-top:5px
          &.noMargin
            line-height:50px
          &.name
            height:14px
            font-size:10px
            font-family:PingFangSC-Regular
            color:rgba(216,216,216,1)
            line-height:14px
          &.active
            color:rgba(102,102,102,1)

</style>
