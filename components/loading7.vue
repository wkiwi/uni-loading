<template>
	<view class="wrapper">
		<view class="rainbow">
			<view class="arc red"></view>
			<view class="arc orange"></view>
			<view class="arc yellow"></view>
			<view class="arc green"></view>
			<view class="arc blue"></view>
			<view class="arc violet"></view>
			<view class="arc purple"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'loading7',
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped="true">
	.wrapper {
  border-bottom: solid 1upx #757575;
  height: 100upx;
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300upx;
}
.wrapper .rainbow {
  animation: spin 2s ease-in-out infinite;
  height: 200upx;
  margin: 0 auto;
  position: relative;
  width: 200upx;
}
.wrapper .rainbow:after {
  background-color: #040038;
  bottom: 100upx;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.wrapper .rainbow .arc {
  border: solid 8upx;
  border-radius: 50%;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.wrapper .rainbow .arc.red {
  border-color: red;
}
.wrapper .rainbow .arc.orange {
  border-color: orange;
  margin: 8upx;
}
.wrapper .rainbow .arc.yellow {
  border-color: yellow;
  margin: 16upx;
}
.wrapper .rainbow .arc.green {
  border-color: yellowgreen;
  margin: 24upx;
}
.wrapper .rainbow .arc.blue {
  border-color: skyblue;
  margin: 32upx;
}
.wrapper .rainbow .arc.violet {
  border-color: violet;
  margin: 40upx;
}
.wrapper .rainbow .arc.purple {
  border-color: mediumpurple;
  margin: 48upx;
}

@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
