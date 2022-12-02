<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */

	/* 公共样式表 */
	@import url("@/common/free.css");
	/* 页面主题色，背景色 */
	@import url("@/common/common.css");
	/* 动画 */
	@import url("@/common/animate.min.css");
	/* 字体图标 */
	@import url("@/common/iconfont.css");
	@import url("~@/common/fonts/iconfont.css");
</style>
