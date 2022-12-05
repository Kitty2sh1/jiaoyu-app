<template>
	<view class="user-safe">
		<!-- 密码 -->
		<view class="original" v-for="(item,i) in passwordList" :key="i">
			<view class="left">
				{{item.title}}
			</view>
			<view class="right">
				<input class="input" type="text" :placeholder="item.placeholder" v-model="form[item.prop]">
			</view>
		</view>
		<button class="button" v-if="$store.getters.getToken" @click="goModify">保存</button>
	</view>
</template>

<script>
	import loginApi from "@/api/login.js"
	export default {
		data() {
			return {
				form: {
					opassword: "", //原密码
					password: "", //新密码
					repassword: "" //确认密码
				},
				passwordList: [{
						type: "text",
						placeholder: "请输入原密码",
						prop: "opassword",
						title: "原密码"
					},
					{
						type: "text",
						placeholder: "请输入新密码",
						prop: "password",
						title: "新密码"
					},
					{
						type: "text",
						placeholder: "请输入确认密码",
						prop: "repassword",
						title: "确认密码"
					}
				]
			};
		},
		methods: {
			// 修改密码api
			async handleUpdatePassword() {
				try {
					const res = await loginApi.getPassword(this.form)
					if (res.data.code != 20000) {
						uni.showToast({
							title: res.data.data,
							icon: "none",
							duration: 1000
						})
					} else {
						uni.showToast({
							title: '修改成功',
							icon: "none",
							duration: 2000
						})
						uni.navigateBack(1)
					}
				} catch (e) {
					//TODO handle the exception
				}
			},
			goModify() {
				uni.showLoading({
					title: ''
				})
				this.handleUpdatePassword()
			}
		}
	}
</script>

<style lang="scss">
	.user-safe {
		.original {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 30rpx;
			border-bottom: 1rpx solid #eee;
			line-height: 109rpx;
			font-size: 28rpx;

			&:last-child {
				border: 0;
			}

			.input {
				text-align: right;
			}
		}

		.button {
			margin-top: 40rpx;
			height: 76rpx;
			width: 694rpx;
			color: #fff;
			background-color: #5acb84;
			font-size: 30rpx;

			&::after {
				border: 0;
			}
		}
	}
</style>
