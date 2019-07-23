<template>
  <view class="mask" :class= "mask == 'true' || mask == true ? 'mask-show' : ''" @click="Mclose" v-if="show" @touchmove.stop.prevent="preventTouchMove">
		<!-- 加载动画开始 -->    <!-- loading1~loading30挑选任意一个替换下方html 且替换对应css -->
    <view class="container">
      <view class="popsicle">
        <view class="colors"></view>
      </view>
      <view class="stick"></view>
      <view class="shadow"></view>
    </view>
		<!-- 加载动画结束 -->
		<view class="title">{{text}}</view>
  </view>
  <!-- 遮罩层-->
</template>

<script scoped="true">
export default {
  name: "w-loading",
	props:{
		text: String,
		mask: Boolean | String,
		click: Boolean | String,
	},
  data() {
    return {
			show: false
		};
  },
	methods:{
		preventTouchMove(){
			console.log('stop user scroll it!');
			return;
		},
		Mclose(){
			if(this.click == 'false' || this.click == false){
				this.show = false
			}
		},
		open(){
			this.show = true
    },
    close(){
      this.show = false
    }
	}
};
</script>

<style>
.mask {
  /* pointer-events: none; */
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
	flex-direction:column;
  justify-content: center;
  align-items: center;
	flex-wrap: wrap;
}
.mask.mask-show{
	background: rgba(7, 17, 27, .3);
}
.title{
	color: #fff;
	font-size: 28upx;
}





/* loading加载动画的css */
.container {
  height: 280upx;
  width: 200upx;
}

.popsicle {
  height: 180upx;
  width: 120upx;
  border-radius: 55upx 55upx 10upx 10upx;
  position: relative;
  display: block;
  margin: 0 auto;
  overflow: hidden;
  -webkit-animation: float 2s ease-in infinite alternate;
  animation: float 2s ease-in infinite alternate;
}
.popsicle:before {
  content: "";
  height: 120%;
  width: 140%;
  position: absolute;
  left: -20%;
  top: -10%;
  background-image: -webkit-linear-gradient(
    bottom,
    #f63999 25%,
    #30dcf6 25%,
    #30dcf6 50%,
    #f2d200 50%,
    #f2d200 75%,
    #70ca5c 75%
  );
  background-image: linear-gradient(
    0deg,
    #f63999 25%,
    #30dcf6 25%,
    #30dcf6 50%,
    #f2d200 50%,
    #f2d200 75%,
    #70ca5c 75%
  );
  display: block;
  -webkit-transform: rotate(-20deg);
  transform: rotate(-20deg);
  -webkit-animation: magic 2.5s linear infinite;
  animation: magic 2.5s linear infinite;
}
@-webkit-keyframes magic {
  to {
    background-position: 0 210upx;
  }
}
@keyframes magic {
  to {
    background-position: 0 210upx;
  }
}
.popsicle:after {
  content: "";
  position: absolute;
  left: 10upx;
  bottom: 10upx;
  width: 13upx;
  height: 120upx;
  border-radius: 50upx;
  background: rgba(255, 255, 255, 0.35);
}

.stick {
  width: 38upx;
  height: 45upx;
  background: #e09c5f;
  border-radius: 0 0 12upx 12upx;
  display: block;
  margin: 0 auto;
  -webkit-animation: float 2s ease-in infinite alternate;
  animation: float 2s ease-in infinite alternate;
}
.stick:after {
  display: block;
  content: "";
  width: 100%;
  height: 14upx;
  background: rgba(0, 0, 0, 0.4);
}

@-webkit-keyframes float {
  to {
    -webkit-transform: translateY(20upx);
    transform: translateY(20upx);
  }
}

@keyframes float {
  to {
    -webkit-transform: translateY(20upx);
    transform: translateY(20upx);
  }
}
.shadow {
  width: 124upx;
  height: 35upx;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 60upx / 22upx;
  display: block;
  margin: 0 auto;
  -webkit-transform: scaleY(0.7) translateY(30upx);
  transform: scaleY(0.7) translateY(30upx);
  -webkit-animation: shad 2s ease-in infinite alternate;
  animation: shad 2s ease-in infinite alternate;
}

@-webkit-keyframes shad {
  to {
    -webkit-transform: scaleX(0.9) scaleY(0.7) translateY(30upx);
    transform: scaleX(0.9) scaleY(0.7) translateY(30upx);
  }
}

@keyframes shad {
  to {
    -webkit-transform: scaleX(0.9) scaleY(0.7) translateY(30upx);
    transform: scaleX(0.9) scaleY(0.7) translateY(30upx);
  }
}
</style>
