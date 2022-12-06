<template>
	<view class="i-banner">
		<swiper class="swiper" indicator-dots autoplay :interval="3000" :duration="1000">
			<swiper-item v-for="(item,i) in bannerList" :key="i">
				<view class="swiper-item">
					<image :src="item.src" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>


<script>
	export default {
		props: {
			bannerList: {
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

	.i-banner {
		width: 100%;
		background-color: #fff;
		margin-top: 10rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.swiper {
			width: 100%;
			height: 300rpx;

			.swiper-item {
				width: 100%;
				height: 100%;
				// overflow: hidden;
				padding: 0 18rpx;
				box-sizing: border-box;

				image {
					width: 100%;
					height: 100%;
					border-radius: 15rpx;
				}
			}
		}
	}
</style>
