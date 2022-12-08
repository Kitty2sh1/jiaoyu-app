<template>
	<view class="imageAd">
		<image :src="imageUrl" mode=""></image>
	</view>
</template>

<script>
	export default {
		props: {
			imageUrl: {
				type: String,
				default: ''
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

	.imageAd {
		width: 100%;
		background-color: #fff;
		padding: 18rpx;
		margin-top: 15rpx;
		box-sizing: border-box;

		image {
			width: 100%;
			height: 326rpx;
			border-radius: 15rpx;
		}
	}
</style>
