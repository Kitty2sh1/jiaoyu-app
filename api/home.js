import http from "@/utils/request.js"
export default {
	// 获取首页数据api
	getHomeList(data) {
		return http.request({
			url: '/index',
			method: 'GET',
			data
		})
	},
	// 获取可用优惠券列表api
	getCouponList(data) {
		return http.request({
			url: '/coupon',
			method: 'GET',
			data
		})
	},
}
