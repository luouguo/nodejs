// 导入mapState方法
import {mapState} from  'vuex'



///////////
// 1. 状态的使用 //
///////////

///
 // 计算属性
 // 第一种使用存储数据方法
 computed:{
 	message(){
 		return this.msg.slice(0, 3)
 	},
 	// es7扩展对象   最终会编译成es5语法
 	// map 映射 state
 	...mapState({
 		myCount:(state)=>{
 			return state.count
 		}
 	}),
 	// 当count = state.count
 	// 简写
 	...mapState(['count','userName','ownner'])
 }

///////////////////
//2. getters的使用 //
///////////////////


 return this.$store.getters.upperOwnner


 ////////////////////////
 //3. 提交mutations方法去修改状态 //
 ////////////////////////
this.$store.commit('add',10)



////////////////////////
// 4. 调用action方法addAsync //
////////////////////////
this.$store.dispatch('addAsync',-2)
