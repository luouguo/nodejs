<!-- 组件的模板 -->
<template>
    <div class="detail">
        <!-- 头部 -->
    <page-header></page-header>
    <!-- 内容 -->
    <div class="container">
      <div class="row">
        <!-- sidebar -->
        <side-bar></side-bar>
        <div class="col-md-9 col-md-pull-3" v-for="(item,index) in data">
          <div class="title">{{item.title}}</div>
          <div class="content">{{item.content}}</div>
          <div class="first">
              <span class="time">2017.11.11</span>
              <span v-if="login==true && userInfo.id == item.author._id">
                <router-link :to="'/edit?id='+item._id">
                    <span class="fa fa-edit">编辑</span>
                </router-link>
                <a href="javascript:;" @click.prevent="remove">
                    <span class="fa fa-remove" >删除</span>
                </a>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- 弹窗 -->
    <modal-alery></modal-alery>
    <!-- 底部 -->
    <page-footer></page-footer>
    </div>
</template>

<!-- 组件的模型 -->
<script>
    
// 导入常量
// import {RECORD_USERINFO} from '../store/mutation-types.js'
import {mapState} from'vuex'
// 公用 
import share from './share.js'
export default {
    // 组件的名称
    name:"detail",
    mixins:[share],
    data () {
        return {
            title:"详情",
            data:[]
        }
    },
    methods: {
        getInfo(id){
            $.post('/new/detail',{id})
            .then((res)=>{
                console.log(res);
                this.data = res.data;
            })
            .catch((err)=>{
                console.log(err);
            })
        },
        remove(){
            var that = this;
            var id = this.$route.query.id
            $.get('/new/delete',{id})
            .then((res)=>{
                $('#message').find('.modal-body').html(res.msg).end().modal('show')
                .on('hidden.bs.modal', function () {
                if (!res.err) {
                    that.$router.push('/Home')
                }
              })
            })
        }
    },
    computed: {
    ...mapState({
        userInfo:(state)=>{
        return state.userInfo
      },
      login:(state)=>{
        return state.login
      }    
    }),

  },
    created () {
        console.log(this.userInfo);
        var id = this.$route.query.id
        if (id) {
            this.getInfo(id)
        }        
    }
}
</script>

<!-- 组件的样式 -->
<style scoped>

</style>