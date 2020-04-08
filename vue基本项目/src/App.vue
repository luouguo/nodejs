<template>
  <div id="app">
    <router-view class="warp"></router-view>
  </div>
</template>

<script>

// 导入常量
import {RECORD_USERINFO} from './store/mutation-types.js'

export default {
  name: 'app',
  data(){
    return {
    }
  },
  mounted(){
  	if(this.$cookies.isKey('USERACCOUNT') && this.$cookies.isKey('USERPASSWORD')){
      // console.log('用户已登录')
      var user ={
        account:this.$cookies.get('USERACCOUNT'),
        password:this.$cookies.get('USERPASSWORD'),
        id:this.$cookies.get('USERID'),
      }
      // 发请求
      $.post('/new/api/user/signin',user)
      .done((res)=>{
        // console.log(res)
        if(!res.err){
          // 改变用户信息
          this.$store.commit(RECORD_USERINFO,user);
        }
      })
    }
  }
}
</script>

<style>
/* 导入样式 */
@import url('./assets/css/main.css');
</style>
