<template>
	<view class="user">
		<view class="userInfo">
			<!-- 个人信息  登录 组件-->
			<userInfo></userInfo>
			<!-- nav组件 -->
			<nav-list></nav-list>
		</view>
		<!-- 选项菜单组件 -->
		<favour></favour>
	</view>
</template>

<script>
	import userInfo from "@/pages/user/components/userInfo.vue"
	import navList from "@/pages/user/components/nav.vue"
	import favour from "@/pages/user/components/favour.vue"
	export default {
		components: {
			userInfo,
			navList,
			favour
		},
		data() {
			return {

			};
		},
		onNavigationBarButtonTap(e) {
			if (e.index == 0) {
				this.navTo('/pages/setting/setting')
			}
		},
		onShow() {
			this.$store.commit('init')
		}
	}
</script>

<style lang="scss">
	page,
	.user {
		height: 100%;
		background-color: #fff;
	}

	.userInfo {
		height: 320rpx;
		padding: 20rpx;
		background-color: #5ccc84;
		border-radius: 0 0 48px 48px;
		margin-bottom: 30rpx;
	}
</style>
