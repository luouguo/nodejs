# vuex 状态管理
> vue的全局状态管理

### 技术选型
```
使用到的模块包：vuex
```

### 目录划分
```
|-- actions.js    导步提交数据action
|-- getters.js    获取状态的getters
|-- index.js      创建存储
|-- mutation-types.js     同步提交数据类型
|-- mutation.js   同步提交mutation
├── test.js       事例使用
```


### 使用方法

#### 导入mapState方法
```
import {mapState} from  'vuex'
```

#### 1. 状态的使用 
```
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
```

#### 2. getters的使用
```
 return this.$store.getters.upperOwnner
```

#### 3. 提交mutations方法去修改状态
```
this.$store.commit('add',10)
```

#### 4. 调用action方法addAsync
```
this.$store.dispatch('addAsync',-2)
```