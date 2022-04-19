import request from "@/api/index";

//获取基金轮播图
let getFund = () => {
	return request({
		url: '/fund/banner',
		method: "GET",
	})
}

let getFundTabList = () => {
	return request({
		url:'/fund/tablist',
		method:"GET",
	})
}

export {
	getFund,getFundTabList
}
