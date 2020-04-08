// mutation类型
import { RECORD_USERINFO, GET_USERINFO ,OUT_LOGIN} from './mutation-types.js'



export default {
    // 记录用户信息
    [RECORD_USERINFO](state, info) {
        state.userInfo = info;
        state.login = true;
    },
    //用户退出登录
    [GET_USERINFO](state, info) {
        if (state.userInfo && (state.userInfo.username !== info.username)) {
            return;
        };
        if (!state.login) {
            return
        }
        if (!info.message) {
            state.userInfo = {...info };
            let validity = 30;
            let now = new Date();
            now.setTime(now.getTime() + validity * 24 * 60 * 60 * 1000);
            document.cookie = "USERACCOUNT=" + info.user_id + ";expires=" + now.toGMTString();
        } else {
            state.userInfo = null;
        }
    },
    //退出登陆
	[OUT_LOGIN](state) {
		state.userInfo = null;
		state.login = false;
	},
}
