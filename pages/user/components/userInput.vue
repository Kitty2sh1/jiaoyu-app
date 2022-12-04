<template>
	<view class="userInput">
		<!-- <view class="inputItem">
			<text class="icon" :class="icon"></text>
			<input :type="type" :placeholder="placeholder" v-model="value" class="input">
		</view> -->
		<view class="inputItem" v-if="!item.show" v-for="(item,i) in formList" :key="i">
			<text class="icon" :class="item.icon"></text>
			<view class="input-button">
				<input :type="item.type" :placeholder="item.placeholder" v-model.sync="value[item.prop]" class="input">
				<button @click="getCode" class="button" v-if="item.prop=='code'">{{sendOutText}}</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "userInput",
		props: {
			value: {
				type: Object,
				default: {}
			},
			// icon: {
			// 	type: String,
			// 	default: ""
			// },
			// type: {
			// 	type: String,
			// 	default: ""
			// },
			// placeholder: {
			// 	type: String,
			// 	default: ""
			// }
			formList: {
				type: Array,
				default: () => []
			},
			sendOutText: {
				type: String,
				default: '发送'
			}
		},
		data() {
			return {

			};
		},
		methods: {
			// 点击发送  获取验证码
			getCode() {
				this.$emit('getCode')
			}
		}

	}
</script>

<style lang="scss">
	.userInput {
		.inputItem {
			width: 615rpx;
			height: 96rpx;
			background-color: #f4f4f4;
			margin-top: 50rpx;
			border-radius: 8rpx;
			display: flex;
			align-items: center;

			.input-button {
				display: flex;
				height: 100%;

				.input {
					height: 96rpx;
					border: 0;
					background: none;
					outline: none;
					font-size: 32rpx;
				}

				.button {
					width: 200rpx;
					height: 100%;
					background-color: #5ccc84;
					color: #fff;
					font-size: 28rpx;
					border-bottom-left-radius: 0;
					border-top-left-radius: 0;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}

			.icon {
				width: 95rpx;
				text-align: center;
				color: #1c1c1c;
				font-size: 32rpx !important;
			}


		}
	}
</style>
