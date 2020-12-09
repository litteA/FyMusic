<template>
	<view class="page">
		<!-- 流行音乐大图 -->
		<view class="Introduce">
			<view>
				<image class="flex-item BigImage" src="../../../static/img/fenlei/音乐分类1.png"></image>
			</view>
			<view class="flex-item detailed">
				<text>包括很多种类，包括R&B、HOUSE、Britpop、Trip-Hop、Gangsta、Rap、Synth Pop、ORCHESTRA、CHAMBER POP、民歌（FOLK）、BOSSA NOVA、CLASSICAL等</text>
				<hr/>
			</view>
		</view>
		<!-- 流行音乐列表 -->
		<uni-list style="margin-top: 5px;">
			<uni-list-item :show-arrow="false" title="歌曲名" note="作者名">
			<image class="ListLueSuo" src="../../../static/img/fenlei/音乐略缩图.png"></image>						
			</uni-list-item>
			<uni-list-item :show-arrow="false" title="歌曲名" note="作者名">
			<image class="ListLueSuo" src="../../../static/img/fenlei/音乐略缩图.png"></image>						
			</uni-list-item>
			<uni-list-item :show-arrow="false" title="歌曲名" note="作者名">
			<image class="ListLueSuo" src="../../../static/img/fenlei/音乐略缩图.png"></image>						
			</uni-list-item>
			<uni-list-item :show-arrow="false" title="歌曲名" note="作者名">
			<image class="ListLueSuo" src="../../../static/img/fenlei/音乐略缩图.png"></image>						
			</uni-list-item>
			<uni-list-item :show-arrow="false" title="歌曲名" note="作者名">
			<image class="ListLueSuo" src="../../../static/img/fenlei/音乐略缩图.png"></image>						
			</uni-list-item>
			<uni-list-item :show-arrow="false" title="歌曲名" note="作者名">
			<image class="ListLueSuo" src="../../../static/img/fenlei/音乐略缩图.png"></image>						
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
	.detailed{
		height: auto;
		text-align: left;
		font-size: 28rpx;
		-webkit-flex:1;
		flex:1;
	}
	.BigImage{
		width: 320rpx;
		height: 320rpx;
	}
	.Introduce{
		width: auto;
		height: auto;
		margin-top: 10px;
		margin-left: 10px;
		margin-right: 10px;
	}
</style>
