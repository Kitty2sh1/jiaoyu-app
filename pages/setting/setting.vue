<template>
	<view class="setting">
		<favour :favourList="settingList" @clearCache="clearCache"></favour>
		<button class="button" v-if="$store.getters.getToken" @click="goLoginOut">退出登录</button>
	</view>
</template>

<script>
	import favour from "@/pages/user/components/favour.vue"
	import setting from "@/config/user-setting.js"
	export default {
		props: {
			settingList: {
				type: Array,
				default: () => setting()
			}
		},
		components: {
			favour
		},
		data() {
			return {};
		},
		methods: {
			// 退出登录按钮
			goLoginOut() {
				uni.showModal({
					content: "是否要退出登录？",
					success: async (res) => {
						if (res.confirm) {
							const out = await this.$store.dispatch('handleLoginOut')
							if (out) {
								this.$store.commit('init')
							}
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			},
			// 清除缓存
			clearCache() {
				uni.showModal({
					content: "是否要清除缓存？",
					success: async (res) => {
						if (res.confirm) {
							uni.showToast({
								title: '清除成功',
								icon: "none",
								duration: 1500
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.setting {
		.button {
			margin-top: 40rpx;
			height: 76rpx;
			width: 694rpx;
			color: #fff;
			background-color: #5acb84;
			font-size: 30rpx;

			&::after {
				border: 0;
			}
		}
	}
</style>
