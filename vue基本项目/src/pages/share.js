// 头部
import PageHeader from '@/components/PageHeader'
// 底部
import PageFooter from '@/components/PageFooter'
// side
import SideBar from '@/components/PageSideBar'
// 弹窗
import modalAlery from '@/components/modal'


export default {
	data(){
		return {
			author:"尹学江"
		}
	},
	components:{
		PageHeader,
		PageFooter,
		SideBar,
		modalAlery
	},
	methods:{
		getCookies(keyName){
			// 获取cookie
		  let cookies = document.cookie;
		  // 拆分得到单个cookie组成数组
		  let cookiesArr = cookies.split('; ');
		  let result = {};
		  // 把单个cookie转化成键值对
		  cookiesArr.forEach(function(ele) {
			  // let key = arr[0]
			  // let value = arr[1]
			  // 变量结构赋值
			  let [key,value] = ele.split("=");
			  result[key] = value;
		  });
		  if(keyName){
			return result[keyName];
		  }else{
			return result;
		  }
		  
		}
	}
}