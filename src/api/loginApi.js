import request from "@/api/index";

let getLogin = (data) => {
	return request({
		url: '/login',
		method: "POST",
		data,
	})
}
let getVerifyCode = (params) => {
	return request({
		url: '/code',
		method: "GET",
		params,
	})
}
export {
	getLogin,getVerifyCode
}
