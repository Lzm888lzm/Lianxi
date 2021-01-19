import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import hoem from '../views/hoem.vue'
import el from '../views/el'
import CreateArticle  from '../views/CreateArticle.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name:"index",
    component:Index
  },
  {
    path:"/hoem",
    name:"hoem",
    component:hoem
  },
  {
    path:"/el",
    name:"el",
    component:el
  },
  {
    path:"/CreateArticle",
    name:"CreateArticle",
    component:CreateArticle
  },
]

const router = new VueRouter({
  routes
})

export default router
