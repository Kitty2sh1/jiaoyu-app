<template>
	<view class="user">
		<view class="userInfo">
			<!-- 个人信息  登录 组件-->
			<login></login>
			<!-- nav组件 -->
			<nav-list></nav-list>
		</view>
		<!-- 选项菜单组件 -->
		<favour></favour>
	</view>
</template>

<script>
	import login from "@/pages/user/components/login.vue"
	import navList from "@/pages/user/components/nav.vue"
	import favour from "@/pages/user/components/favour.vue"
	export default {
		components: {
			login,
			navList,
			favour
		},
		data() {
			return {

			};
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
		height: 310rpx;
		padding: 20rpx;
		background-color: #5ccc84;
		border-radius: 0 0 48px 48px;
		margin-bottom: 30rpx;
	}
</style>
