<template>
	<view class="forget">
		<!-- 返回上一页 -->
		<view class="back">
			<view class="span">
				<span @click="backTo"></span>
			</view>
		</view>
		<!-- 表单 -->
		<view class="forgetInput">
			<h2>找回密码</h2>
			<user-input :formList="formList" v-model="form" :sendOutText="forgetText" @getCode="getCode"></user-input>
			<!-- 绑定按钮 -->
			<view class="btn">
				<button class="button" @click="goRetrieve">立即找回</button>
			</view>
		</view>
	</view>
</template>

<script>
	import userInput from "@/pages/user/components/userInput.vue"
	import loginApi from "@/api/login.js"
	export default {
		data() {
			return {
				form: {
					phone: '',
					code: '',
					password: '',
					repassword: ''
				},
				formList: [{
						icon: "iconfont icon-icon-test",
						type: "text",
						placeholder: "请输入手机号",
						show: false,
						prop: "phone"
					},
					{
						icon: "iconfont icon-mima",
						type: "text",
						placeholder: "验证码",
						show: false,
						prop: "code"
					},
					{
						icon: "iconfont icon-mima",
						type: "password",
						placeholder: "请输入密码",
						show: false,
						prop: "password"
					},
					{
						icon: "iconfont icon-mima",
						type: "password",
						placeholder: "请输入确认密码",
						show: false,
						prop: "repassword"
					}
				],
				forgetText: '发送',
				time: null, //定时器
				timeFlag: false, //定时器开关
			};
		},
		methods: {
			// 返回上一页
			backTo() {
				uni.navigateBack()
			},
			// 找回密码api
			async handleForget() {
				try {
					const res = await loginApi.getForget(this.form)
					// console.log(res, '找回密码');
					if (res.data.code != 20000) {
						uni.showToast({
							title: res.data.data,
							icon: "none",
							duration: 1000
						})
					} else {
						uni.showToast({
							title: '找回成功',
							icon: "none",
							duration: 2000
						})
						// 找回密码成功返回至登录页面
						uni.navigateBack(1)
					}
				} catch (e) {
					//TODO handle the exception
				}
			},
			// 找回密码按钮
			goRetrieve() {
				uni.showLoading({
					title: "提交中"
				})
				this.handleForget()
			},
			// 点击发送按钮获取验证码
			getCode() {
				// if(this.timeFlag){
				// 	return false
				// }
				this.handleCaptcha()
			},
			// 验证码api
			async handleCaptcha() {
				try {
					const res = await loginApi.getCaptcha({
						phone: this.form.phone
					})
					// console.log(res);
					if (res.data.code != 20000) {
						uni.showToast({
							title: res.data.data,
							icon: 'none',
							duration: 1000
						})
					} else {
						uni.showToast({
							title: '验证码：' + res.data.data,
							icon: 'none',
							duration: 1000
						})
						this.setTime()
					}
				} catch (e) {
					//TODO handle the exception
				}
			},
			// 定时器  发送验证码
			setTime() {
				if (this.timeFlag) return
				this.timeFlag = true
				let num = 60
				this.time = setInterval(() => {
					if (num <= 0) {
						this.timeFlag = false
						this.bindText = '发送'
						clearInterval(this.time)
						this.time = null
					}
					num--
					this.bindText = num + 's'
				}, 1000)
			}
		},
		components: {
			userInput
		}
	}
</script>

<style lang="scss">
	page,
	.forget {
		height: 100%;

		.back {
			height: 220rpx;
			background-image: linear-gradient(to right, #82f6b4, #8ed6ee);

			.span {
				width: 100rpx;
				height: 100rpx;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			span {
				width: 40rpx;
				height: 40rpx;
				text-align: center;
				line-height: 40rpx;
				margin-left: 10rpx;
				display: inline-block;

				&::after {
					content: "";
					display: inline-block;
					width: 20rpx;
					height: 20rpx;
					border-left: 4rpx solid #fff;
					border-bottom: 4rpx solid #fff;
					transform: rotate(45deg);
				}


			}
		}

		.forgetInput {
			width: 100%;
			height: 1000rpx;
			background-color: #fff;
			border-top-left-radius: 30rpx;
			border-top-right-radius: 30rpx;
			position: absolute;
			top: 200rpx;
			left: 0;
			padding: 30px 35px 0 35px;
			box-sizing: border-box;

			h2 {
				// 文字不加粗
				font-weight: normal;
			}

			.button {
				background-color: #5acb84 !important;
				color: #fff;
				margin-top: 50rpx;
				height: 100rpx;
				font-size: 32rpx;
				line-height: 100rpx;

				&::after {
					border: 0;
				}
			}
		}
	}
</style>
