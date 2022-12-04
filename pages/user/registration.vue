<template>
	<view class="registration">
		<!-- 返回上一页 -->
		<view class="back">
			<view class="span">
				<span @click="backTo"></span>
			</view>
		</view>
		<!-- 表单 -->
		<view class="regInput">
			<h2>{{loginFlag?'登 录':'注 册'}}</h2>
			<!-- <user-input icon="iconfont icon-icon-test" placeholder="请输入用户名" type="text" v-model.sync="form.username">
			</user-input>
			<user-input icon="iconfont icon-mima" placeholder="请输入密码" type="password" v-model.sync="form.password">
			</user-input>
			<user-input v-if="!loginFlag" icon="iconfont icon-mima" placeholder="请输入确认密码" type="password" v-model.sync="form.repassword"></user-input>-->

			<user-input :formList="formList" v-model="form"></user-input>
			<!-- 登录注册按钮 -->
			<view class="btn">
				<button class="button" @click="handleRegister">{{loginFlag?'登 录':'注 册'}}</button>
			</view>

			<!-- 去登录去注册 以及忘记密码 -->
			<view class="text-button">
				<text class="goregister" @click="handleLoginFlag">{{loginFlag?'注册账号':'去登录'}}</text>
				<text class="forget" @click="goForget">忘记密码？</text>
			</view>
			<!-- 微信图标 -->
			<view class="wxin">
				<text class="iconfont icon-weixindenglu icon"></text>
			</view>
			<!-- 登录协议 -->
			<view class="agreement" v-if="loginFlag">
				<checkbox-group @change="handleChecked">
					<checkbox class="checkbox" :checked="checked" />
				</checkbox-group>
				<text>已阅读并同意用户协议&隐私声明</text>
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
				loginFlag: true, //登录 注册 状态切换
				form: {
					username: "",
					password: "",
					repassword: ""
				},
				checked: false,
				formList: [{
						icon: "iconfont icon-icon-test",
						type: "text",
						placeholder: "请输入用户名",
						show: false,
						prop: "username"
					},
					{
						icon: "iconfont icon-mima",
						type: "password",
						placeholder: "请输入密码",
						show: false,
						prop: "password"
					}, {
						icon: "iconfont icon-mima",
						type: "password",
						placeholder: "请输入确认密码",
						show: true,
						prop: "repassword"
					}
				]
			};
		},
		methods: {
			// 返回上一页
			backTo() {
				uni.navigateBack()
			},
			// 登录注册状态切换
			handleLoginFlag() {
				this.form = {
					username: "",
					password: "",
					repassword: ""
				}
				this.loginFlag = !this.loginFlag
				this.formList[2].show = this.loginFlag
			},
			// 复选框状态
			handleChecked(e) {
				// console.log(e);
				if (e.detail.value.length > 0) {
					this.checked = true
				} else {
					this.checked = false
				}
			},
			// 登陆注册
			handleRegister() {
				if (this.loginFlag) {
					console.log('点击登录');
					if (!this.checked) {
						uni.showToast({
							title: '请先阅读并同意用户协议&隐私声明',
							duration: 1000,
							icon: "none"
						})
						return
					}
					this.handleLogin()
				} else {
					console.log('点击注册');
					this.registerGo()
				}
			},
			// 注册账号api
			async registerGo() {
				try {
					const res = await loginApi.registerAccount(this.form)
					console.log(res);
					if (res.data.code != 20000) {
						console.log(res.data.data);
						uni.showToast({
							title: res.data.data,
							duration: 1000,
							icon: "none"
						});
					} else {
						uni.showToast({
							title: '注册成功',
							duration: 1000,
							icon: "none"
						});
						this.form = {
							username: "",
							password: "",
							repassword: ""
						}
						// 登录注册状态切换
						this.handleLoginFlag()
					}
				} catch (e) {
					//TODO handle the exception
					// console.log(e);
				}
			},
			// 登录api
			async handleLogin() {
				try {
					const res = await loginApi.getLogin(this.form)
					// console.log(res);
					if (res.data.code != 20000) {
						uni.showToast({
							title: res.data.data,
							duration: 1000,
							icon: "none"
						})
					} else {
						uni.showToast({
							title: '登录成功',
							duration: 1000,
							icon: "none"
						})
						this.$store.commit('setToken', res.data.data)
						if (!res.data.data.phone) {
							uni.navigateTo({
								url: '/pages/bind-phone/bind-phone'
							})
						} else {
							uni.switchTab({
								url: '/pages/user/user'
							})
						}
					}
				} catch (e) {
					//TODO handle the exception
				}
			},
			// 跳转找回密码页面
			goForget() {
				uni.navigateTo({
					url: '/pages/forget/forget'
				})
			}
		},
		components: {
			userInput
		}
	}
</script>

<style lang="scss">
	page,
	.registration {
		height: 100%;
		// background-image: linear-gradient(to right, #82f6b4, #8ed6ee);

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

		.regInput {
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

			.text-button {
				height: 100rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin: 30rpx 0;

				.goregister {
					color: #81eba8;
					font-size: 26rpx;
				}

				.forget {
					color: #93908b;
					font-size: 28rpx;
				}
			}
		}

		.wxin {
			text-align: center;

			.icon {
				color: #5acb84;
				font-size: 96rpx;
			}
		}

		.agreement {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 20rpx;

			.checkbox {
				transform: scale(0.7)
			}

			text {
				color: #94908b;
				font-size: 26rpx;
			}
		}
	}
</style>
