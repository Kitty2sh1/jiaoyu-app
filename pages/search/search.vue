<template>
	<view class="search">
		<view class="history">
			历史记录
		</view>
		<view class="history-item">
			uni-app
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		// 监听原生标题栏按钮点击事件，参数为Object
		onNavigationBarButtonTap() {},
		// 监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。
		onNavigationBarSearchInputConfirmed() {
			console.log(111);
		},
		// 监听原生标题栏搜索输入框输入内容变化事件
		onNavigationBarSearchInputChanged() {}
	}
</script>

<style lang="scss">
	.search {
		padding: 30rpx 20rpx;
	}

	.history {
		font-size: 30rpx;
		font-weight: bold;
	}

	.history-item {
		width: 158rpx;
		height: 64rpx;
		border-radius: 5rpx;
		background-color: #f7f7f7;
		text-align: center;
		line-height: 64rpx;
		font-size: 30rpx;
	}
</style>
