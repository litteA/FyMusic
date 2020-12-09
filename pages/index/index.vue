<template>
	<view class="page">
		<!-- 搜索功能 -->
		<view class="searchdiv">
			<input class="searchinput" adjust-position="true" placeholder="搜索音乐" confirm-type="search" />
		</view>
		<!-- 轮播图 -->
		<swiper :indicator-dots="true":autoplay="true":interval="3000":duration="1000" indicator-color="#FFF" class="carousel">
			<swiper-item>
				<image class="sw-img" src="../../static/img/Image/谭松韵_我在.png"></image>
			</swiper-item>
			<swiper-item>
				<image class="sw-img" src="../../static/img/Image/TaylorSwift_LoveStory.jpg"></image>
			</swiper-item>
			<swiper-item>
				<image class="sw-img" src="../../static/img/Image/林俊杰_StayWithYou.jpg"></image>
			</swiper-item>
		</swiper>
		<!-- 歌曲分类 -->
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-flex uni-row" style="display: flex; justify-content: space-between;align-items:center;">
				<navigator class="MusicFenlei" url="../SongClass/popmusic/popmusic" hover-class="navigator-hover">
					<view class="flex-item">
						<image class="FenleiImage" src="../../static/img/fenlei/音乐分类1.png"></image>
						<hr />
						<text class="FenleiText">流行音乐</text>
					</view>
				</navigator>
				<navigator class="MusicFenlei" url="../SongClass/classicalmusic/classicalmusic" hover-class="navigator-hover">
					<view class="flex-item">
						<image class="FenleiImage" src="../../static/img/fenlei/音乐分类2.png"></image>
						<hr />
						<text class="FenleiText">古典音乐</text>
					</view>
				</navigator>
				<navigator class="MusicFenlei" url="../SongClass/NationalMusic/NationalMusic" hover-class="navigator-hover">
					<view class="flex-item">
						<image class="FenleiImage" src="../../static/img/fenlei/音乐分类3.png"></image>
						<hr />
						<text class="FenleiText">民族音乐</text>
					</view>
				</navigator>
			</view>
		</view>
		<!-- 歌曲列表 -->
		<uni-list style="margin-top: 5px;">
			<uni-list-item :show-arrow="false" title="歌曲名" note="作者名">
			<image class="ListLueSuo" src="../../static/img/fenlei/音乐略缩图.png"></image>						
			</uni-list-item>
			<uni-list-item :show-arrow="false" title="歌曲名" note="作者名">
			<image class="ListLueSuo" src="../../static/img/fenlei/音乐略缩图.png"></image>						
			</uni-list-item>
			<uni-list-item :show-arrow="false" title="歌曲名" note="作者名">
			<image class="ListLueSuo" src="../../static/img/fenlei/音乐略缩图.png"></image>						
			</uni-list-item>
			<uni-list-item :show-arrow="false" title="歌曲名" note="作者名">
			<image class="ListLueSuo" src="../../static/img/fenlei/音乐略缩图.png"></image>						
			</uni-list-item>
			<uni-list-item :show-arrow="false" title="歌曲名" note="作者名">
			<image class="ListLueSuo" src="../../static/img/fenlei/音乐略缩图.png"></image>						
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.ListLueSuo{
		height: 100rpx;
		width: 100rpx;
	}
	.FenleiText{
		align-items: center;
		height: auto;
		width: 200rpx;
	}
	.FenleiImage{
		align-items: center;
		width: 200rpx;
		height: 200rpx;
	}
	.MusicFenlei{
		background-color: #e1e1e1;
		border-radius: 5px;
		height: auto;
		width: 30%;
		text-align: center;
		margin-top: 1%;
		margin-left: 5px;
		margin-right: 5px;
	}
	.searchdiv{
		margin-top: 1%;
	}
	.searchinput{
		background-color:#b3b5b1;
		color: #E1E1E1;
		width: 98%;
		height: 40px;
		border-radius: 5px;
		font-size: 24sp;
		margin-left: 1%;
		margin-right: 1%;
	}
	.carousel{
		width: 98%;
		height: 440upx;
		margin: auto;
		margin-top: 1%;
		margin-block-end: 1%;
	}
	.sw-img{
		width: 750upx;
		height: 440upx;
		border-radius: 10px 10px;
	}
</style>
