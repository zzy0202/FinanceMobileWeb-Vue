import axios from "axios";
import store from '@/store/index'

const request = axios.create({
	baseURL: 'http://api.cpengx.cn/finance/api',
})

request.interceptors.request.use(function (config) {
	if(store.state.user&&store.state.user.token) {
		config.headers.Authorization = 'Bearer'+store.state.user.token;
	}
	return config;
}, function (error) {
	return Promise.reject(error);
})

request.interceptors.response.use(function (response) {
	if(response.status===200) {			//代表拦截到的回应没问题
		return response.data;					//返回数据
	}else {
		return response;							//返回数据有问题
	}
},function (error) {
	return Promise.reject(error);		//出错了，显示错误
})

export default request;
