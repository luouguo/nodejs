<template>
  <div>
    <!-- 头部 -->
    <page-header></page-header>
    <!-- 内容 -->
    <div class="container">
      <div class="row">
        <!-- sidebar -->
        <side-bar></side-bar>
        <div class="col-md-9 col-md-pull-3">
          <form>
            <div class="form-group">
              <label for="account">用户名：</label>
              <input type="text" class="form-control" id="account" placeholder="请输入用户名"
              v-model="user.account">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">密码</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="密码"v-model="user.password">
            </div>
            <button type="button" class="btn btn-lg btn-success" @click="signin(user)">登录</button>
          </form>
        </div>
      </div>
    </div>

    <!-- 弹窗 -->
    <modal-alery></modal-alery>
    <!-- 底部 -->
    <page-footer></page-footer>
  </div>
</template>
<script>

// 导入常量
import {RECORD_USERINFO} from '../store/mutation-types.js'

// 公用 
import share from './share.js'
export default {
  name: 'signin',
  // 混入
  mixins: [share],
  data() {
    return {
      msg: 'signin',
      user:{}
    }
  },
  methods:{
    // 用户登录
    signin(user){
      var that = this;
      // 发请求
      $.post('/new/api/user/signin',user)
      .done((res)=>{
        console.log(res)
        this.user.id = res.data[0]._id
        // console.log(this.user);
        if(!res.err){
          // 改变用户信息
          this.$store.commit(RECORD_USERINFO,user);
          // 存入cookie
          this.$cookies.set('USERACCOUNT',user.account,"1m")   //return this
          this.$cookies.set('USERPASSWORD',user.password,"1m")   //return this
          this.$cookies.set('USERID',user.id,"1m")   //return this
          // console.log(this.$cookies);
        }
        $('#message').find('.modal-body').html(res.msg).end().modal('show')
          .on('hidden.bs.modal', function () {
            if (!res.err) {
              that.$router.push('/Home')
            }
          })
      })

    }
  },
  // 组件创建
  created(){
   

  }
}
</script>
<style scoped>
</style>
