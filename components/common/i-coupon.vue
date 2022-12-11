<template>
	<view class="i-coupon">
		<scroll-view class="scroll-view" scroll-x="true">
			<view class="couponItem" v-for="(item,i) in couponList" :key="i">
				<view class="coupon-item">
					<view class="left" :class="item.isgetcoupon?'active':'left'">
						<text class="money">￥{{item.price}}</text>
						<text class="title">{{item.type=='course'?'适用课程：':'适用专栏：'}}{{item.value.title}}</text>
					</view>
					<view class="right" :class="item.isgetcoupon?'active':'right'" @click="handleReceive(item)">
						{{item.isgetcoupon?'已领取':'领取'}}
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>


<script>
	export default {
		props: {
			couponList: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {

			};
		},
		methods: {
			handleReceive(item) {
				console.log(item);
				this.$emit('handleReceive', item)
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fff;
	}

	.i-coupon {
		background-color: #fff;
		padding: 20rpx;
		width: 100%;

		.scroll-view {
			white-space: nowrap;
			padding-left: 18rpx;
		}

		.couponItem {
			display: inline-block;
			margin-right: 40rpx;

			.coupon-item {
				display: flex;
				align-items: center;
				height: 128rpx;
				color: #fff;
			}

			.left {
				height: 100%;
				background-color: #d29d0f;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				border-right: #fff 4rpx dashed;
				padding: 0 30rpx;

				.money {
					font-size: 30rpx;
					margin-bottom: 10rpx;
				}

				.title {
					font-size: 24rpx;
				}
			}

			.right {
				width: 112rpx;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: #fdc018;
				font-size: 25rpx;
			}

			.active {
				background-color: #dae0e5;
			}
		}
	}
</style>
