<template>
	<view class="favour">
		<view class="favourItem" v-for="(item,i) in favourList" :key="i">
			<view class="ele" v-for="(ele,index) in item" :key="index" @click="goNewPage(ele)">
				<view class="left">
					<text class="icon" :class="ele.icon"></text>
					<text class="title">{{ele.title}}</text>
				</view>
				<view class="right">
					<text class="rightText">{{ele.rightText}}</text>
					<text class="rightIcon" v-if="ele.rightIcon"></text>
				</view>
			</view>
		</view>
	</view>
</template>


<script>
	import favour from "@/config/user-favour.js"
	export default {
		props: {
			favourList: {
				type: Array,
				default: () => favour()
			}
		},
		data() {
			return {

			};
		},
		methods: {
			goNewPage(item) {
				if (item.event) {
					this.$emit(item.event)
				}
				if (item.login || this.$store.getters.getToken) {
					uni.navigateTo({
						url: item.page
					})
				} else {
					if (item.page) {
						uni.navigateTo({
							url: '/pages/user/registration'
						})
					}
				}
			}
		},
	}
</script>

<style lang="scss">
	.favour {
		padding: 0 30rpx;

		.favourItem {
			.ele {
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1rpx solid #eee;
				line-height: 109rpx;
				padding-right: 40rpx;

				&:last-child {
					border: 0;
				}

				.left {
					display: flex;
					align-items: center;
					padding-left: 30rpx;

					.icon {
						font-size: 40rpx;
						color: rgb(67, 150, 236);
					}

					.title {
						display: inline-block;
						font-size: 28rpx;
						color: #3b4144;
						margin-left: 20rpx;
					}
				}

				.right {
					.rightIcon {
						&::after {
							content: "";
							display: inline-block;
							width: 15rpx;
							height: 15rpx;
							border-right: 4rpx solid #ccc;
							border-bottom: 4rpx solid #ccc;
							transform: rotate(-45deg);
						}
					}
				}
			}
		}
	}
</style>
