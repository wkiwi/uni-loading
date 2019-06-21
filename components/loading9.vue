<template>
  <view class="loader loading9">
    <view class="css-square square1"></view>
    <view class="css-square square2"></view>
    <view class="css-square square3"></view>
    <view class="css-square square4"></view>
    <view class="css-square square5"></view>
    <view class="css-square square6"></view>
    <view class="css-square square7"></view>
    <view class="css-square square8"></view>
  </view>
</template>

<script>
export default {
  name: "loading9",
  data() {
    return {};
  }
};
</script>

<style scoped="true">
.loader {
  position: relative;
  width: 60upx;
  height: 60upx;
  border-radius: 50%;
  margin: 75upx;
  display: inline-block;
  vertical-align: middle;
}

.loading9 .css-square {
  position: absolute;
  top: 50%;
  width: 25upx;
  height: 7upx;
  background: white;
  box-shadow: 2upx 2upx 3upx 0upx black;
}
.loading9 .square1 {
  left: 70upx;
  -webkit-animation: dominos 1s 0.125s ease infinite;
  animation: dominos 1s 0.125s ease infinite;
}
.loading9 .square2 {
  left: 60upx;
  -webkit-animation: dominos 1s 0.3s ease infinite;
  animation: dominos 1s 0.3s ease infinite;
}
.loading9 .square3 {
  left: 50upx;
  -webkit-animation: dominos 1s 0.425s ease infinite;
  animation: dominos 1s 0.425s ease infinite;
}
.loading9 .square4 {
  left: 40upx;
  -webkit-animation: dominos 1s 0.54s ease infinite;
  animation: dominos 1s 0.54s ease infinite;
}
.loading9 .square5 {
  left: 30upx;
  -webkit-animation: dominos 1s 0.665s ease infinite;
  animation: dominos 1s 0.665s ease infinite;
}
.loading9 .square6 {
  left: 20upx;
  -webkit-animation: dominos 1s 0.79s ease infinite;
  animation: dominos 1s 0.79s ease infinite;
}
.loading9 .square7 {
  left: 10upx;
  -webkit-animation: dominos 1s 0.9s ease infinite;
  animation: dominos 1s 0.9s ease infinite;
}
.loading9 .square8 {
  left: 0upx;
  -webkit-animation: dominos 1s 1s ease infinite;
  animation: dominos 1s 1s ease infinite;
}
@-webkit-keyframes dominos {
  50% {
    opacity: 0.7;
  }
  75% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  80% {
    opacity: 1;
  }
}
@keyframes dominos {
  50% {
    opacity: 0.7;
  }
  75% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  80% {
    opacity: 1;
  }
}

</style>
