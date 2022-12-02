const pageMixins = {
	data() {
		return {}
	},
	methods: {
		// 跳转某一页面保留当前页面
		navTo(url, option = {}) {
			uni.navigateTo({
				url,
			})
		},
		// 返回上级页面
		navBack(delta = 1) {
			uni.navigateBack({
				delta
			})
		}
	}
}
export default pageMixins
