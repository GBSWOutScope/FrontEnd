import axios from 'axios';
const loginStore = {
	namespaced: true,
	state: {
        id: '',
        accessToken: ''
    },
	getters: {
        isLogin(state) {
            return state.accessToken == '' ? false : true;
        }
    },
	mutations: {

        setid(state, id) {
            state.id = id;
        },

        setAccessToken(state, accessToken) {
            state.accessToken = accessToken;
        },

        reset(state) {
            state.id = '';
            state.accessToken = '';
        }
    },
	actions: {

	async doLogin({ commit }, memberInfo) {
		let result = false;
		let resultErr = null;
		try {
			let res = await axios.post("http://localhost:8080/api/login", memberInfo);
			if (res.data.success == true) {
				console.log("로그인되었습니다.");
				commit('setid', memberInfo.id);
				commit('setAccessToken', res.data.accessToken);
				result = true;
			} else {
				console.log("로그인되지 않았습니다.");
				let err = new Error("Request failed with status code 401");
				err.response = {data:{"success":false, "errormessage":"로그인되지 않았습니다."}};
				resultErr = err;
			}
		} catch(err) {
			console.log(err);
			if (!err.response) {
				err.response = {data:{"success":false, "errormessage":err.message}};
			}
			resultErr = err;
		}
		return new Promise((resolve, reject) => {
			if (result) {
				resolve();
			} else {
				reject(resultErr);
			}
		});
	},

	doLogout({commit}) {
		commit('reset');
	}
	}
};

export default loginStore;