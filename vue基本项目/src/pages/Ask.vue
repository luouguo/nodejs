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
          <!-- <h2 class="page-left-title">提问问题</h2> -->
          <form class="form-horizontal" role="form">
            <div class="form-group">
              <label for="tags" class="col-sm-2 control-label">问题分类：</label>
              <div class="col-sm-4">
                <select class="form-control" name="tags" id="tags" v-model="question.category">
                  <option v-for="item in categorys" :value="item[0]">{{item[1]}}</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="title" class="col-sm-2 control-label">问题：</label>
              <div class="col-sm-6">
                <!--标题长度请不要超过30个字-->
                <input type="text" class="form-control" name="title" id="title" placeholder="请输入您要提问的问题"
                v-model="question.title">
              </div>
            </div>
            <!-- <div class="form-group">
              <label for="cover" class="col-sm-2 control-label">上传封面：</label>
              <div class="col-sm-2" id="cover">
                <button class="btn btn-default btn-block" type="button">上传图片</button>
                <input type="file" name="cover" class="hidden">
              </div>
            </div> -->
            <div class="form-group">
              <label for="post" class="col-sm-2 control-label">问题描述：</label>
              <div class="col-sm-10">
                <!-- <textarea class="form-control" name="post" rows="6" id="post"></textarea> -->
                <textarea name="content" style="width:500px;height:200px;visibility:hidden;">KindEditor</textarea>
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-4">
                <button type="submit" class="btn btn-success btn-block" @click.prevent="ask(question)">提问问题</button>
              </div>
            </div>
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
var editor;
import share from './share.js'
import {mapState} from'vuex'
export default {
  name: 'ask',
  // 混入
  mixins: [share],
  data() {
    return {
      msg: 'ask',
      question:{
        category:'life'
      }
    }
  },
  methods:{
    // 使用useEditor
    useEditor(selector){
      
      editor = KindEditor.create(selector, {
        width : '100%',
        minWidth : '560px',
        resizeType : 1,
        allowPreviewEmoticons : false,
        allowImageUpload : false,
        items : [
          'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline',
          'removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist',
          'insertunorderedlist', '|', 'emoticons', 'image', 'link']
      });
    },
    ask(question){
      // console.log(this.userInfo);
      var that = this;
      if (!this.login) {
        $('#message').find('.modal-body').html("请先登录!").end().modal('show')
        .on('hidden.bs.modal', function () {
                that.$router.push('/user/signin')
            })
      } else {
        this.question.content = editor.html()
        this.question.author = this.userInfo.id
        console.log(this.question);
        $.post('/new/create',question)
        .done((res)=>{
          // console.log(res);
          $('#message').find('.modal-body').html(res.msg).end().modal('show')
            .on('hidden.bs.modal', function () {
              if (!res.err) {
                that.$router.push('/Home')
              }
            })
        })
        .fail((err)=>{
          console.log(err);
        })
      }
      
    }
  },
  computed: {
    ...mapState({
      categorys:(state)=>{
        return state.categorys
      },
      login:(state)=>{
        return state.login
      },
      userInfo:(state)=>{
        return state.userInfo
      }   
    }),

  },
  created(){
  },
  mounted(){
    this.useEditor('textarea[name="content"]')    
  }
}
</script>
<style scoped>
</style>
