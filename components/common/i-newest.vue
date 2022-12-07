<template>
	<view class="i-newest">
		<h2>最新列表</h2>
		<view class="newestItem" v-for="(item,i) in newestList" :key="i">
			<view class="img">
				<image :src="item.cover" mode=""></image>
				<text
					class="text">{{item.type=='video'?'视频':item.type=='media'?'图文':item.type=='audio'?'音频':'专栏'}}</text>
			</view>
			<view class="right">
				<view class="title">
					{{item.title}}
				</view>
				<view class="recommend">
					一句话推荐
				</view>
				<view class="price">
					<text class="t_price1">{{item.price=='0.00'?'免费':'￥'+item.price}}</text>
					<text class="t_price2">￥{{item.t_price}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			newestList: {
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

	.i-newest {
		width: 100%;
		background-color: #fff;
		margin-top: 15rpx;
		padding: 30rpx 24rpx 0rpx 24rpx;
		box-sizing: border-box;

		h2 {
			font-size: 32rpx;
		}

		.newestItem {
			width: 100%;
			display: flex;
			height: 206rpx;
			align-items: center;
			border-bottom: 1rpx #ddd solid;

			&:last-child {
				border: 0;
			}

			.img {
				position: relative;

				image {
					width: 300rpx;
					height: 168rpx;
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

			.right {
				width: 370rpx;
				height: 168rpx;
				display: flex;
				flex-direction: column;
				align-content: space-between;
				padding-left: 20rpx;

				.title {
					width: 100%;
					flex: 1;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					font-size: 30rpx;
				}

				.recommend {
					flex: 1;
					font-size: 26rpx;
					color: #94918a;
				}

				.price {
					flex: 1;

					.t_price1 {
						color: red;
						font-size: 30rpx;
					}

					.t_price2 {
						color: #94918a;
						font-size: 20rpx;
						text-decoration: line-through;
					}
				}
			}


		}

	}
</style>
