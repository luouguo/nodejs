import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 组件
import Hello from '@/components/Hello'
// 首页
import Home from '@/pages/Home'
// 登录
import Signin from '@/pages/Signin'
// 注册
import Register from '@/pages/Register'
// 提问
import Ask from '@/pages/Ask'
// 详情
import Detail from '@/pages/Detail'
// 编辑
import Edit from '@/pages/Edit'

// 路由规则
var routes = [{
    name: 'Home',
    path: '/home',
    component: Home
}, {
    name: 'Signin',
    path: '/user/signin',
    component: Signin
}, {
    name: 'Detail',
    path: '/detail',
    component: Detail
}, {
    name: 'Register',
    path: '/user/register',
    component: Register
}, {
    name: '/Ask',
    path: '/ask',
    component: Ask
}, {
    name: '/Edit',
    path: '/edit',
    component: Edit
}, {
    path: '/',
    redirect: '/home'
}]

export default new Router({
    routes
})
