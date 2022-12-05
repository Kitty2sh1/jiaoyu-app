<template>
	<view class="user-page" @click="myLogin">
		<view class="user-content">
			<!-- 头像 用户信息 -->
			<view class="buddha">
				<image v-if="!getToken || userInfo.avatar==''" src="../../../static/demo/icon/hd.png" mode=""></image>
				<image v-if="getToken" :src="userInfo.avatar" mode=""></image>
			</view>
			<!-- 登录文字 -->
			<view class="user-login">
				<view class="login-po1">
					<text class="top">{{getToken?userInfo.username:'立即登录'}}</text>
					<text class="vip" v-if="getToken">永久会员</text>
				</view>
				<view class="login-po2">
					{{getToken?'暂无描述':'登录解锁更多功能'}}
				</view>
			</view>
		</view>
		<view class="setting" v-if="getToken">
			<text class="iconfont icon-leimupinleifenleileibie set"></text>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapGetters
	} from "vuex"
	// import userInfo from "@/config/user-login.js"
	// import mixinPage from "@/common/mixins/mixins.js"
	export default {
		// mixins:['mixinPage'],
		name: "login",
		props: {
			// infoList: {
			// 	type: Object,
			// 	default: () => {}
			// }
		},
		computed: {
			...mapGetters(['getToken']),
			...mapState(['userInfo'])
		},
		methods: {
			myLogin() {
				if (this.getToken) {
					// console.log('已登录');
					uni.navigateTo({
						url: '/pages/user-info/user-info'
					})
				} else {
					// console.log('未登录');
					uni.navigateTo({
						url: '/pages/user/registration'
					})
				}
			}
		},
	}
</script>

<style lang="scss">
	.user-page {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-left: 10rpx;
		margin-top: 15rpx;

		.user-content {
			display: flex;
			align-items: center;

			.buddha {
				width: 120rpx;
				height: 120rpx;
				border-radius: 50%;

				image {
					width: 100%;
					height: 100%;
					border-radius: 50%;

				}
			}

			.user-login {
				display: flex;
				// 灵活的项目将垂直显示，正如一个列一样。
				flex-direction: column;
				color: #fff;
				margin-left: 30rpx;

				.login-po1 {
					margin-bottom: 20rpx;

					.top {
						font-size: 32rpx;
					}

					.vip {
						font-size: 26rpx;
						color: #f2c310;
						padding-top: 3rpx;
						padding-left: 35rpx;
					}
				}

				.login-po2 {
					font-size: 24rpx;
				}
			}
		}

		.setting {
			.set {
				color: #fff;
			}
		}
	}
</style>
