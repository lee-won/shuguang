<template>
  <div class="project">
    <div class="header">
      <div class="location">
        <span class="location-logo"></span>
        <span class="location-name">上海市</span>
        <span class="arrow"></span>
      </div>
      <div class="search">
        <span class="name">急需救助</span>
        <span class="search-icon">
          <img src="./icon_search.png">
        </span>
        <span class="clearfix"></span>
      </div>
      <div class="nav">
        <span class="project-num">
          <span class="num" :class="NavStatus ? 'overStatus' : 'ingStatus'">{{navProject.length}}</span>个项目
        </span>
        <span class="ing" :class="{ingStatus:NavStatus===false}" @click="changeNavStatus(false)">进行中</span>
        <span class="over" :class="{overStatus:NavStatus===true}" @click="changeNavStatus(true)">已完成</span>
        <div class="sort" @click="listShow"  :class="{ingStatus:show}" v-if="NavStatus===false">
          <span ref="sortType">{{sortState}}</span><span class="arrow"  :class="{ing:show}"></span>
        </div>
        <div class="sort" @click="listShow"  :class="{overStatus:show}" v-if="NavStatus===true">
          <span ref="sortType">{{sortState}}</span><span class="arrow"  :class="{over:show}"></span>
        </div>
      </div>
    </div>
    <transition name="move">
      <div class="selectList" v-if="show">
        <ul v-if="NavStatus===false">
          <li v-for="type in sortTypes" @click="selectType(type)">
            <span class="list-item"  :class="{ingStatus: type === sortState}">{{type}}</span>
            <span class="pic ing" v-show="type === sortState"></span>
          </li>
        </ul>
        <ul v-if="NavStatus===true">
          <li v-for="type in sortTypes" @click="selectType(type)">
            <span class="list-item"  :class="{overStatus: type === sortState}">{{type}}</span>
            <span class="pic over" v-show="type === sortState"></span>
          </li>
        </ul>
      </div>
    </transition>
    <transition name="fade">
      <div class="blur" v-if="show"></div>
    </transition>
    <div class="project-list" ref="projectList">
        <ul>
          <li v-for="project in navProject">
           <projectItem :item="project" :colorStatus="NavStatus"></projectItem>
          </li>
        </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import projectItem from '../projectItem/projectItem'
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      projects: [
        {
          img: 'http://localhost:8080/static/img/pic_project2.png',
          status: false,
          desc: '为我的白血病宝宝加油！',
          progress: 0.8,
          nowMount: 3202222,
          targetMount: 454661266
        },
        {
          img: 'http://localhost:8080/static/img/pic_project1.png',
          status: false,
          desc: '花季少女坚强抗争病魔 希望得到大家的帮助',
          progress: 0.6,
          nowMount: 1200000,
          targetMount: 2400000

        },
        {
          img: 'http://localhost:8080/static/img/pic_project3.png',
          status: false,
          desc: '贫苦家庭雪上加霜，肝癌儿急需救助',
          progress: 0.1,
          nowMount: 200000,
          targetMount: 2400000
        },
        {
          img: 'http://localhost:8080/static/img/pic_project2.png',
          status: true,
          desc: '为我的白血病宝宝加油！',
          progress: 0.8,
          nowMount: 1202222,
          targetMount: 454661266
        },
        {
          img: 'http://localhost:8080/static/img/pic_project1.png',
          status: true,
          desc: '花季少女坚强抗争病魔 希望得到大家的帮助',
          progress: 0.6,
          nowMount: 1200000,
          targetMount: 2400000
        },
        {
          img: 'http://localhost:8080/static/img/pic_project3.png',
          status: true,
          desc: '贫苦家庭雪上加霜，肝癌儿急需救助',
          progress: 0.1,
          nowMount: 200000,
          targetMount: 2400000
        }
      ],
      sortTypes: ['智能排序', '距离最近', '剩余天数', '项目进度'],
      NavStatus: false,
      show: false,
      sortState: '智能排序'
    }
  },
  components: {
    projectItem
  },
  created() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.projectList, {
        click: true
      })
    })
  },
  methods: {
    changeNavStatus(status) {
      this.NavStatus = status
      this.show = false
    },
    listShow() {
      this.show = !this.show
      this.sortActive = !this.sortActive
    },
    selectType(data) {
      this.sortState = data
      this.show = !this.show
    }
  },
  computed: {
    navProject() {
      let obj = []
      this.projects.forEach((item) => {
        if (item.status === this.NavStatus) {
          obj.push(item)
        }
      })
      return obj
    },
    selectColor() {
      if (this.sortActive) {
        if (this.NavStatus) {
          return 'overStatus'
        } else {
          return `ingStatus :type === sortStatus`
        }
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/basic.styl"
.header
  position :fixed
  top:0
  left:0
  background:#fff
  width:100%
  padding-top:40px
  z-index:10
  .location
    padding:0 20px
    height:18px
    font-size:0
    margin-bottom:2px
    .location-logo
      display:inline-block
      width: 15px
      height: 12px
      background url("./icon_locate.png")no-repeat center center
      position:relative
      top:2px
    .location-name
      height:18px
      font-size:13px
      font-family:PingFangSC-Regular
      color:rgba(153,153,153,1)
      line-height:18px
      margin-left:8px
    .arrow
      display: inline-block
      width: 8px
      height: 5px
      background url("./icon_arrow_grey.png")no-repeat center center
      position:relative
      top:-2px
      margin-left:4px
  .search
    padding:0 20px
    height:39px
    margin-bottom:15px
    .name
      display: inline-block
      float:left
      height:39px
      font-size:28px
      font-family:PingFangSC-Semibold
      color:rgba(51,51,51,1)
      line-height:39px
    .search-icon
      height:39px
      display: inline-block
      float:right
      width: 17px
      height: 17px
      line-height:39px
      img
        vertical-align :middle

  .nav
    display :flex
    border-top:1px solid rgba(0,0,0,0.08)
    border-bottom:1px solid rgba(0,0,0,0.08)
    height:44px
    line-height:44px
    padding:0 20px
    .project-num
      flex:1
      font-size:13px
      font-family:PingFangSC-Medium
      color:rgba(51,51,51,1)
      .num
        padding-right:4px
        &.ingStatus
          color:rgba(255,221,0,1)
        &.overStatus
          color:rgba(52,170,76,1)
    .ing
      flex:0 0 70px
      font-size:13px
      font-family:PingFangSC-Regular
      text-align: center
      border-right:1px solid rgba(0,0,0,0.08)
      height:20px
      color:rgba(153,153,153,1)
      line-height:20px
      position:relative
      top:11px
      &.ingStatus
        color:rgba(255,221,0,1)
    .over
      flex:0 0 70px
      font-size:13px;
      font-family:PingFangSC-Regular
      color:rgba(153,153,153,1)
      text-align: center
      height:20px
      line-height:20px
      position:relative
      top:11px
      &.overStatus
        color:rgba(52,170,76,1)
    .sort
      flex:0 0 80px
      text-align: right
      font-size:13px;
      font-family:PingFangSC-Regular
      color:rgba(51,51,51,1);
      border-left:1px solid rgba(0,0,0,0.08)
      &.ingStatus
        color:rgba(255,221,0,1)
      &.overStatus
        color:rgba(52,170,76,1)
      .arrow
        display: inline-block
        width: 8px
        height: 5px
        background url("./icon_arrow_black.png")no-repeat center center
        position:relative
        top:-2px
        margin-left:4px
        &.ing
          background:url("./icon_arrow_yellow.png") no-repeat center center
        &.over
          background:url("./icon_arrow_green.png") no-repeat center center

.selectList
  position: fixed
  z-index :5
  width:100%
  background:#fff
  transform : translate3d(0,138px,0)
  &.move-enter-active,&.move-leave-active {
    transition: all 0.4s ease-out
    transform : translate3d(0,138px,0)
  }
  &.move-enter,&.move-leave-to {
    transform :translate3d(0, 0, 0)
  }
  ul
    li
      height:50px
      line-height:50px
      margin:0 15px
      border-bottom:1px solid rgba(0,0,0,0.08)
      padding:0 5px
      font-size:13px
      font-family:PingFangSC-Regular
      color:rgba(153,153,153,1)
      &:last-child
        border-bottom:none
      .list-item
        float:left
        &.ingStatus
          color:rgba(255,221,0,1)
        &.overStatus
          color:rgba(52,170,76,1)
      .pic
        display :inline-block
        float:right
        width: 11px
        height:50px
        vertical-align :middle
        &.ing
          background:url("./icon_selected_yellow.png") no-repeat center center
        &.over
          background:url("./icon_selected_green.png") no-repeat center center
.blur
  position:fixed
  top:0
  bottom:0
  width:100%
  background:rgb(0,0,0)
  opacity:0.7
  z-index:4
  &.fade-enter-active,&.fade-leave-active {
    transition: all 0.4s ease-out
  }
  &.fade-enter,&.fade-leave-to {
    opacity:0
  }
.project-list
  position:absolute
  top:138px
  bottom:50px
  overflow: hidden
  ul
    padding:0 20px
    margin:40px 0 80px 0
    padding-bottom:20px
    li
      margin-bottom:40px
</style>
