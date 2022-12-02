<template>
	<view class="nav-page">
		<view class="navItem" v-for="(item,i) in navBar" :key="i">
			<view :class="item.icon" class="icon"></view>
			<view class="title">
				{{item.title}}
			</view>

		</view>
	</view>
</template>

<script>
	import navBarList from "@/config/user-nav.js"
	export default {
		data() {
			return {

			};
		},
		props: {
			navBar: {
				type: Array,
				default: () => (navBarList())
			}
		}
	}
</script>

<style lang="scss">
	.nav-page {
		background-color: #fff;
		height: 150rpx;
		margin: 60rpx 10rpx 0rpx 10rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-radius: 4rpx;
		box-shadow: 0 1px 6px #ddd;

		.navItem {
			// text-align: center;
			display: flex;
			// 灵活的项目将垂直显示，正如一个列一样。
			flex-direction: column;
			justify-content: space-between;
			align-items: center;

			.icon {
				color: #febd00;
				font-size: 40rpx !important;
			}

			.title {
				margin-top: 10rpx;
				color: #6c757d;
				font-size: 24rpx;
			}
		}
	}
</style>
