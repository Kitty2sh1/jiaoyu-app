<template>
	<view class="content">
		<!-- 轮播图组件 -->
		<i-banner :bannerList="bannerList"></i-banner>
		<!-- 图标分类组件 -->
		<i-nav-bar :navBarList="navBarList"></i-nav-bar>
		<!-- 可用优惠券组件 -->
		<i-coupon :couponList="couponList"></i-coupon>
	</view>
</template>

<script>
	// 轮播图组件
	import iBanner from '../../components/common/i-banner.vue';
	// 图标分类组件
	import iNavBar from '../../components/common/i-navBar.vue'
	// 可用优惠券组件
	import iCoupon from '../../components/common/i-coupon.vue'
	// 首页api
	import homeApi from '@/api/home.js'
	export default {
		data() {
			return {
				bannerList: [], //轮播图
				homeList: [], //首页数据
				navBarList: [], //图标分类
				couponList: [], //优惠券
			}
		},
		onLoad() {
			// 首页数据api
			this.handleHomeList()
			// 可用优惠券api
			this.handleCouponList()
		},
		methods: {
			// 首页数据api
			async handleHomeList() {
				try {
					const res = await homeApi.getHomeList()
					// console.log('首页数据---', res.data);
					if (res.data.code != 20000) {
						uni.showToast({
							title: res.data.data,
							icon: 'none',
							duration: 1500
						})
					} else {
						this.homeList = res.data.data
						// console.log(this.homeList);
						this.homeList.forEach(item => {
							if (item.type == 'swiper') {
								this.bannerList = item.data
							}
							if (item.type == 'icons') {
								this.navBarList = item.data
							}
						})
					}
				} catch (e) {
					//TODO handle the exception
				}
			},
			// 可用优惠券api
			async handleCouponList() {
				try {
					const res = await homeApi.getCouponList()
					console.log('优惠券---', res.data);
					if (res.data.code != 20000) {
						uni.showToast({
							title: res.data.data,
							icon: 'none',
							duration: 1500
						})
					} else {
						this.couponList = res.data.data
					}
				} catch (e) {
					//TODO handle the exception
				}
			}
		},
		onNavigationBarSearchInputClicked() {
			console.log('e');
			// uni.navigateTo({
			// 	url:'/pages/search/search'
			// })
		},
		components: {
			iBanner,
			iNavBar,
			iCoupon
		}
	}
</script>

<style>
	page {
		background-color: #f4f4f2;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #f4f4f2;
	}
</style>
