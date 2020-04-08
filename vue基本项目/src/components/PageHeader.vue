<template>
  <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="container container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link class="navbar-brand"  to="/home" active-class="active" exact>新闻系统</router-link>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
        	<router-link tag="li" to="/ask" active-class="active"><a>发布新闻</a></router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <template v-if="!login">
            <router-link tag="li" to="/user/signin" active-class="active"><a>登录{{userInfo}}</a></router-link>
            <router-link tag="li" to="/user/register" active-class="active"><a>注册</a></router-link>
          </template>
        
          <li class="dropdown" v-else>
            <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{userInfo.account}} <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">个人信息</a></li>
              <li><a href="#" @click.prevent="outLogin">退出登录</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

// 导入mapState方法
import {mapState} from  'vuex'
import {OUT_LOGIN} from '../store/mutation-types'

export default {
  name: 'header',
  data () {
    return {
      msg: 'header'
    }
  },
  methods:{
    // 退出登录
    outLogin(){
      
      this.$store.commit(OUT_LOGIN);
      // 删除cookie
      this.$cookies.remove('USERACCOUNT')
      this.$cookies.remove('USERPASSWORD')

    }
  },
  computed:mapState(['userInfo','login'])
}
</script>

<style scoped>
</style>