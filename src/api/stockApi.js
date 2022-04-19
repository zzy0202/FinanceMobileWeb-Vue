import request from "@/api/index";

let getStockRank = (params) => {
	return request({
		url: '/stocks',
		method: "GET",
		params,
	})
}

export {
	getStockRank,
}
