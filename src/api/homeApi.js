import request from "@/api/index";

let getHotspot = () => {
	return request({
		method:'GET',
		url:'/quote',
	})
}

let getArticle = (params) => {
	return request({
		method:"GET",
		url:'/articles',
		params,
	})
}

export {
	getHotspot,getArticle,
}
