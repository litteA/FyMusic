<template>
	<view class="page">
		<view style="margin-top: 8%;">
			<view class="UserDiv">
				<navigator url="../Login/login/login" hover-class="navigator-hover">
					<image  src="../../static/img/tabbar/collect.png" mode="scaleToFill" border="0"    class="userImg"></image>
				</navigator>
				<text decode="true" class="dengru">点击头像登入</text>
			</view>
		</view>
		<!-- 个人应用 -->
		<text decode="true" class="my_service_5">个人应用</text>
		<view class="my_service_6">
			<view class="my_service_7">
				<image src="/static/img/geren/music-list.png" mode="scaleToFill" border="0"    class="my_service_8"></image>
				<text decode="true" class="my_service_9">我的歌单</text>
			</view>
			<view class="my_service_10">
				<image src="/static/img/geren/rank.png" mode="scaleToFill" border="0"    class="my_service_11"></image>
				<text decode="true" class="my_service_12">我的详情</text>
			</view>
			<view class="my_service_13">
				<image src="../../static/img/geren/run-fm.png" mode="scaleToFill" border="0"    class="my_service_14"></image>
				<text decode="true" class="my_service_15">评论记录</text>
			</view>
			<view class="my_service_16">
				<image src="../../static/img/geren/private-fm.png" mode="scaleToFill" border="0"    class="my_service_17"></image>
				<text decode="true" class="my_service_18">收听记录</text>
			</view>
		</view>
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
	.UserDiv{
		white-space:normal;
		width:663upx;
		height:113upx;
		padding:0upx;
		clear:both;
		margin-top:40upx;
		margin-left:43upx;
		float:left; 
		border-bottom-color:#e1e1e1;
		border-bottom-width:1upx; 
		border-bottom-style:solid; 
		border-radius:0upx;
		font-size:8upx;
		}
	.UserDiv .userImg{
		white-space:normal;
		width:73upx;
		height:73upx;
		overflow:hidden;
		padding:0upx;
		margin-top:9upx;
		margin-left:6upx;
		float:left; 
		border-radius:53upx;
		font-size:8upx; 
		line-height:73upx;}
	.UserDiv .dengru{
		white-space:normal;
		width:382upx;
		height:36upx;
		padding:0upx;
		margin-top:29upx;
		margin-left:36upx;
		float:left; 
		border-radius:0upx; 
		color:#000000;font-size:30upx; line-height:36upx;}
	.my_service_5{white-space:normal;width:119upx;height:37upx;padding:0upx;clear:both;margin-top:43upx;margin-left:41upx;float:left; border-radius:0upx; color:#c8c8c8;font-size:22upx; line-height:37upx;}
	.my_service_6{white-space:normal;width:693upx;height:186upx;padding:0upx;clear:both;margin-top:18upx;margin-left:35upx;float:left; border-radius:0upx;font-size:8upx;}
	.my_service_6 .my_service_7{white-space:normal;width:108upx;height:128upx;padding:0upx;margin-top:29upx;margin-left:4upx;float:left; border-radius:0upx;font-size:8upx;}
	.my_service_6 .my_service_7 .my_service_8{white-space:normal;width:78upx;height:78upx;padding:0upx;clear:both;margin-top:0upx;margin-left:14upx;float:left; border-radius:0upx;font-size:8upx; line-height:78upx;}
	.my_service_6 .my_service_7 .my_service_9{white-space:normal;width:108upx;height:24upx;padding:0upx;clear:both;margin-top:25upx;margin-left:0upx;float:left;text-align:center;justify-content:center; border-radius:0upx; color:#808080;font-size:20upx; line-height:24upx;}
	.my_service_6 .my_service_10{white-space:normal;width:108upx;height:128upx;padding:0upx;margin-top:29upx;margin-left:79upx;float:left; border-radius:0upx;font-size:8upx;}
	.my_service_6 .my_service_10 .my_service_11{white-space:normal;width:77upx;height:79upx;padding:0upx;clear:both;margin-top:0upx;margin-left:14upx;float:left; border-radius:0upx;font-size:8upx; line-height:79upx;}
	.my_service_6 .my_service_10 .my_service_12{white-space:normal;width:108upx;height:24upx;padding:0upx;clear:both;margin-top:24upx;margin-left:0upx;float:left;text-align:center;justify-content:center; border-radius:0upx; color:#808080;font-size:20upx; line-height:24upx;}
	.my_service_6 .my_service_13{white-space:normal;width:108upx;height:127upx;padding:0upx;margin-top:30upx;margin-left:79upx;float:left; border-radius:0upx;font-size:8upx;}
	.my_service_6 .my_service_13 .my_service_14{white-space:normal;width:78upx;height:78upx;padding:0upx;clear:both;margin-top:0upx;margin-left:14upx;float:left; border-radius:0upx;font-size:8upx; line-height:78upx;}
	.my_service_6 .my_service_13 .my_service_15{white-space:normal;width:108upx;height:24upx;padding:0upx;clear:both;margin-top:24upx;margin-left:0upx;float:left;text-align:center;justify-content:center; border-radius:0upx; color:#808080;font-size:20upx; line-height:24upx;}
	.my_service_6 .my_service_16{white-space:normal;width:110upx;height:127upx;padding:0upx;margin-top:30upx;margin-left:79upx;float:left; border-radius:0upx;font-size:8upx;}
	.my_service_6 .my_service_16 .my_service_17{white-space:normal;width:79upx;height:77upx;padding:0upx;clear:both;margin-top:0upx;margin-left:14upx;float:left; border-radius:0upx;font-size:8upx; line-height:77upx;}
	.my_service_6 .my_service_16 .my_service_18{white-space:normal;width:107upx;height:24upx;padding:0upx;clear:both;margin-top:25upx;margin-left:0upx;float:left;text-align:center;justify-content:center; border-radius:0upx; color:#808080;font-size:20upx; line-height:24upx;}
	
</style>
