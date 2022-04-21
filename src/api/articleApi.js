import request from "@/api/index";

let getComment = (params) => {
	return request({
		url: '/article/comments',
		method:"GET",
		params,
	})
}

export {
	getComment,
}
