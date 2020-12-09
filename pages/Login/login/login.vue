<template>
	<view class="page">
		<view class="inputview">
			<input class="inputcss" v-model="username" placeholder="请输入账户"/>
			<input class="inputcss" v-model="userpass" password type="text" placeholder="请输入密码"/>
			<navigator url="../../index/index">
				<button @tap="UserLogin" style="margin-top: 8px;margin-left: 16px;margin-right: 16px;">登入</button>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:"",
				userpass:"",
				loginstate: false
			}
		},
		methods: {
			UserLogin() {
				if (this.username.length < 3) {
					uni.showToast({
						icon: 'none',
						title: '账号最短为 3 个字符'
					});
					return;
				}
				if (this.userpass.length < 2) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 2 个字符'
					});
					return;
				}
				
				this.loginstate = true;
				if (this.loginstate === true){
					uni.showToast({
						icon: 'none',
						title: '用户登入成功',
					});
					uni.navigateBack()
				}
				/*
				const data = {
					username : this.username,
					userpass = this.userpass
				}				
				if (this.username.getText().toString().equals("User") && this.userpass.getText().toString().equals("123")){
					uni.showToast({
						icon: 'none',
						title: '用户登入成功',
					});
					uni.navigateBack()
				}else{
					uni.showToast({
						icon: 'none',
						title: '用户登入失败',
					});
				}*/
			}
		}
	}
</script>

<style>
	.inputview{
		width: 300px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	.inputcss{
		height: 40px;
		margin-top: 8px;
		background-color: #B3B5B1;
		margin-left: 8px;
		margin-right: 8px;
		border-radius: 5px;
	}
	
	page{
		 background-color: #febe09;
	}
</style>
