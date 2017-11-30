import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index/index'
import Project from '../components/project/project'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    }
  ]
})
