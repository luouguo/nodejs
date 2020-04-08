<template>
  <div>
    <!-- 头部 -->
    <page-header></page-header>
    <!-- 内容 -->
    <div class="container">
      <div class="row">
        <!-- sidebar -->
        <side-bar></side-bar>
        <!-- 左边内容 -->
        <div class="col-md-9 col-md-pull-3 question home-question">
          <div class="media" v-for="qu in pageDate">
            <a class="media-left" href="#">
              <img class="media-object" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PGRlZnMvPjxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjEzLjIzMzMzMzU4NzY0NjQ4NCIgeT0iMzIiIHN0eWxlPSJmaWxsOiNBQUFBQUE7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBPcGVuIFNhbnMsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtmb250LXNpemU6MTBwdDtkb21pbmFudC1iYXNlbGluZTpjZW50cmFsIj42NHg2NDwvdGV4dD48L2c+PC9zdmc+">
            </a>
            <div class="media-body">
              <h4 class="media-heading">
                <router-link :to="'/detail?id='+qu._id">
                  {{qu.title}}
                </router-link>  
              </h4> {{qu.content}}
              <div class="row keys">
                <div class="col-md-8"><span class="label label-success">Bootstrap</span>
                  <span class="label label-default">MongoDB</span></div>
                <div class="col-md-4 text-right"><span class="label label-success">难</span> 12 &#x3000;</div>
              </div>
              <div class="time">
                2017-5-8 21:10
              </div>
            </div>
          </div>
          <nav aria-label="Page navigation">
            <ul class="pagination">
              <li>
                <a href="#" aria-label="Previous" @click="prev">
                  <span aria-hidden="true" >&laquo;</span>
                </a>
              </li>
              <li v-for="item in pageCount" @click.prevent = "page=item"><a href="#">{{item}}</a></li>
              <li>
                <a href="#" aria-label="Next" @click="next">
                  <span aria-hidden="true" >&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <page-footer></page-footer>
  </div>
</template>
<script>
// 公用 
import share from './share.js'
export default {
  name: 'home',
  // 混入
  mixins: [share],
  data() {
    return {
      msg: 'home',
      questions:[],
      page:1,
      pageSize:3,
    }
  },
  computed: {
    pageCount(){
      return Math.ceil(this.questions.length / this.pageSize) 
    },
    pageDate(){
      return this.questions.slice((this.page-1)*this.pageSize,this.page*this.pageSize)
    }
  },
  methods:{
    getData(){
      $.post('/new/')
      .then((res)=>{
        // console.log(res.data);
        this.questions = res.data;
      })
      .catch((err)=>{
        console.log(err);
      })
    },
    prev(){
      if (this.page==1) {
        this.page == 1
      }else{
        this.page = this.page - 1;
      }
    },
    next(){
      if (this.page==this.pageCount) {
        this.page == this.pageCount
      }else{
        this.page = this.page + 1;
      }
    }

  },
  created () {
    this.getData();
  }
}
</script>
<style scoped>
</style>