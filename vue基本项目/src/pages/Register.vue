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
              <label for="account">*用户名：</label>
              <input type="text" class="form-control" id="account" placeholder="请输入用户名！" v-model="user.account">
            </div>
            <div class="form-group">
              <label for="password">*密码</label>
              <input type="password" class="form-control" id="password" placeholder="密码" v-model="user.password">
            </div>
            <div class="form-group">
              <label for="password2">*重复密码</label>
              <input type="password" class="form-control" id="password2" placeholder="重复密码" v-model="user.password2">
            </div>
            <!-- <div class="form-group">
              <label for="exampleInputFile">上传头像</label>
              <input type="file" id="exampleInputFile">
              <p class="help-block">Example block-level help text here.</p>
            </div> -->
            <div class="checkbox">
              <label>
                <input type="checkbox"> 同意协议
              </label>
            </div>
            <button type="button" class="btn btn-lg btn-success" @click="register(user)">注册用户</button>
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
// 公用 
import share from './share.js'

export default {
  name: 'register',
  // 混入
  mixins: [share],
  data() {
    return {
      msg: 'register',
      user:{}
    }
  },
  methods:{
    // 注册用户
    register(user){
      var that = this
      // 发请求
      $.post('/new/api/user/register',user)
      .done((res)=>{
        console.log(res);
        $('#message').find('.modal-body').html(res.msg).end().modal('show')
          .on('hidden.bs.modal', function () {
            if (!res.err) {
              that.$router.push('/user/signin')
            }
          })
      })
    }
  },
  created(){
  }
}
</script>
<style scoped>
</style>
