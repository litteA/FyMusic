<template>
	<view class="page">
		<!-- 民族音乐大图 -->
		<view class="Introduce">
			<view>
				<image class="BigImage" src="../../../static/img/fenlei/音乐分类3.png"></image>
			</view>
			<view class="detailed">
				<text>
					民族音乐分为：民间歌曲、民间歌舞音乐、民间器乐、民间说唱音乐和民间戏曲音乐。
				</text>
				<hr/>
			</view>
		</view>
		<!-- 民族音乐列表 -->
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
