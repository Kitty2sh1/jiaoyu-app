<template>
	<view class="my-coupon">
		<view class="couponItem" v-for="(item,i) in couponList" :key="i">
			<view class="coupon-item">
				<view class="left">
					<!-- :class="item.isgetcoupon?'active':'left'" -->
					<text class="money">￥{{item.price}}</text>
					<text class="title">{{item.type=='course'?'适用课程：':'适用专栏：'}}{{item.title}}</text>
				</view>
				<view class="right">
					{{timeItem(item.end_time,item.start_time)}}
					{{time==0?'已过期':'立即使用'}}
					<!-- :class="item.isgetcoupon?'active':'right'" -->
				</view>
			</view>
		</view>
		<view class="no-more">
			没有更多数据了
		</view>
	</view>
</template>

<script>
	import homeApi from '@/api/home.js'
	export default {
		data() {
			return {
				couponList: [],
				pagesize: {
					page: 1,
					limit: 10
				},
				// time:null
			};
		},
		methods: {
			async handleMyCoupon() {
				try {
					const res = await homeApi.getMyCoupon(this.pagesize)
					console.log(res);
					if (res.data.code != 20000) {
						uni.showToast({
							title: res.data.data,
							icon: 'none',
							duration: 1000
						})
					} else {
						this.couponList = res.data.data.rows
					}
				} catch (e) {
					//TODO handle the exception
				}
			},
			timeItem(time1, time2) {
				let data = Date.parse(time1)
				let data1 = Date.parse(time2)
				this.time = data - data1
				console.log('111', this.time);

			}
		},
		computed: {

		},
		onLoad() {
			this.handleMyCoupon()
		}
	}
</script>

<style lang="scss">
	.my-coupon {
		padding: 0 28rpx;
		box-sizing: border-box;

		.couponItem {
			width: 100%;
			margin-top: 28rpx;
			border-radius: 10rpx;
			overflow: hidden;

			.coupon-item {
				width: 100%;
				display: flex;
				align-items: center;
				height: 128rpx;
				color: #fff;
			}

			.left {
				flex: 1;
				height: 100%;
				background-color: #d29d0f;
				display: flex;
				flex-direction: column;
				border-right: #fff 4rpx dashed;
				padding: 20rpx 26rpx;
				box-sizing: border-box;

				.money {
					font-size: 34rpx;
					margin-bottom: 6rpx;
				}

				.title {
					font-size: 24rpx;
				}
			}

			.right {
				width: 198rpx;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: #fdc018;
				font-size: 26rpx;
			}

			.active {
				background-color: #dae0e5;
			}
		}

		.no-more {
			text-align: center;
			font-size: 24rpx;
			color: #707070;
			margin-top: 60rpx;
		}
	}
</style>
