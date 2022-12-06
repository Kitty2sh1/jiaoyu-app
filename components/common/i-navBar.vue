<template>
	<view class="i-navBar">
		<view class="navBarItem" v-for="(item,i) in navBarList" :key="i">
			<image :src="item.src" mode=""></image>
			<view class="title">{{item.name}}</view>
		</view>
	</view>
</template>


<script>
	export default {
		props: {
			navBarList: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fff;
	}

	.i-navBar {
		width: 100%;
		height: 280rpx;
		padding: 20rpx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		background-color: #fff;

		.navBarItem {
			flex: 25%;
			text-align: center;
			padding: 10rpx 0;
			height: 50%;
			box-sizing: border-box;

			image {
				width: 68rpx;
				height: 68rpx;
				border-radius: 50%;
			}

			.title {
				font-size: 24rpx;
				color: #565e69;
				margin-top: 10rpx;
			}
		}
	}
</style>
