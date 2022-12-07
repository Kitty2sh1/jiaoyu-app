<template>
	<view class="i-group">
		<h2>拼团</h2>
		<scroll-view class="scroll-view" scroll-x="true">
			<view class="groupItem" v-for="(item,i) in groupList" :key="i">
				<view class="image">
					<image :src="item.cover" mode=""></image>
					<text
						class="text">{{item.type=='video'?'视频':item.type=='media'?'图文':item.type=='audio'?'音频':'专栏'}}</text>
				</view>
				<view class="title">
					{{item.title}}
				</view>
				<view class="price">
					<text class="t_price1">{{item.price=='0.00'?'免费':'￥'+item.price}}</text>
					<text class="t_price2">￥{{item.t_price}}</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			groupList: {
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

	.i-group {
		width: 100%;
		background-color: #fff;
		margin-top: 15rpx;
		padding: 30rpx 24rpx;
		box-sizing: border-box;

		h2 {
			font-size: 32rpx;
		}

		.scroll-view {
			margin-top: 20rpx;
			white-space: nowrap;

			.groupItem {
				width: 300rpx;
				display: inline-block;
				margin-right: 18rpx;

				&:last-child {
					margin: 0;
				}

				.image {
					width: 300rpx;
					height: 168rpx;
					position: relative;

					image {
						width: 100%;
						height: 100%;
					}

					.text {
						width: 66rpx;
						height: 44rpx;
						font-size: 24rpx;
						color: #fff;
						background-color: rgba(0, 0, 0, .4);
						display: block;
						text-align: center;
						line-height: 44rpx;
						position: absolute;
						bottom: 8rpx;
						right: 8rpx;
					}
				}

				.title {
					width: 100%;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					font-size: 28rpx;
				}

				.price {
					.t_price1 {
						color: red;
						font-size: 26rpx;
					}

					.t_price2 {
						color: #ccc;
						font-size: 20rpx;
						text-decoration: line-through;
					}
				}
			}
		}
	}
</style>
