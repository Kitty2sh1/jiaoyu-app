<template>
	<view class="content">
		<!-- 轮播图组件 -->
		<i-banner :bannerList="bannerList"></i-banner>
		<!-- 图标分类组件 -->
		<i-nav-bar :navBarList="navBarList"></i-nav-bar>
		<!-- 可用优惠券组件 -->
		<i-coupon :couponList="couponList"></i-coupon>
		<!-- 拼团列表组件 -->
		<i-group :groupList="groupList"></i-group>
		<!-- 秒杀列表 -->
		<!-- <i-flashsale :flashsaleList="flashsaleList"></i-flashsale> -->
		<!-- 最新列表 -->
		<i-newest :newestList="newestList"></i-newest>
	</view>
</template>

<script>
	// 轮播图组件
	import iBanner from '../../components/common/i-banner.vue';
	// 图标分类组件
	import iNavBar from '../../components/common/i-navBar.vue'
	// 可用优惠券组件
	import iCoupon from '../../components/common/i-coupon.vue'
	// 拼团
	import iGroup from '../../components/common/i-group.vue'
	// 秒杀列表
	// import iFlashsale from '../../components/common/i-flashsale.vue'
	// 最新列表
	import iNewest from '../../components/common/i-newest.vue'
	// 首页api
	import homeApi from '@/api/home.js'
	export default {
		data() {
			return {
				bannerList: [], //轮播图
				homeList: [], //首页数据
				navBarList: [], //图标分类
				couponList: [], //优惠券
				groupList: [], //拼团列表
				usable: '1',
				// flashsaleList: [], //秒杀列表
				newestList: [] //最新列表
			}
		},
		onLoad() {
			// 首页数据api
			this.handleHomeList()
			// 可用优惠券api
			this.handleCouponList()
			// 可用优惠券api
			this.handleGroupList()
			// 秒杀列表api
			// this.handleFlashsaleList()
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
							if (item.type == 'list') {
								this.newestList = item.data
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
					// console.log('优惠券---', res.data);
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
			},
			// 拼团列表api
			async handleGroupList() {
				try {
					const res = await homeApi.getGroupList(this.usable)
					// console.log('拼团---', res);
					if (res.data.code != 20000) {
						uni.showToast({
							title: res.data.data,
							icon: 'none',
							duration: 1500
						})
					} else {
						this.groupList = res.data.data.rows
					}
				} catch (e) {
					//TODO handle the exception
				}
			},
			// 可用秒杀列表api
			async handleFlashsaleList() {
				try {
					const res = await homeApi.getFlashsaleList(this.usable)
					console.log('秒杀列表---', res);
					if (res.data.code != 20000) {
						uni.showToast({
							title: res.data.data,
							icon: 'none',
							duration: 1500
						})
					} else {
						// this.flashsaleList = res.data.data
					}
				} catch (e) {
					//TODO handle the exception
				}
			}
		},
		onNavigationBarSearchInputClicked() {
			// console.log('e');
			uni.navigateTo({
				url: '/pages/search/search'
			})
		},
		components: {
			iBanner,
			iNavBar,
			iCoupon,
			iGroup,
			// iFlashsale,
			iNewest
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
