<template>
  <div class="col-md-3 col-md-push-9">
      <form class="form-right">
        <div class="form-group">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="搜索问题">
            <span class="input-group-btn"><a href="search.html" class="btn btn-default glyphicon glyphicon-search" type="button"></a></span>
          </div>
        </div>
      </form>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">分类</h3>
        </div>
        <div class="list-group">
          <a href="#" class="list-group-item" v-for="item in categorys">{{item[1]}}</a>
        </div>
      </div>
    </div>
</template>
<script>
  import {mapState} from'vuex'
  export default {
  name: 'side',
  data() {
    return {
      msg: 'side'
    }
  },
  computed: {
    ...mapState({
      categorys:(state)=>{
        return state.categorys
      }
    })
  }
}
</script>
<style scoped>
</style>
