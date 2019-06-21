<template>
  <view class="loader loading12">
    <view class="css-heart heart1"></view>
    <view class="css-heart heart2"></view>
    <view class="css-heart heart3"></view>
    <view class="css-heart heart4"></view>
  </view>
</template>

<script>
export default {
  name: "loading12",
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
.css-heart:before,
.css-heart:after {
  position: absolute;
  content: "";
  left: 50upx;
  top: 0;
  width: 50upx;
  height: 80upx;
  background: #950d0d;
  border-radius: 50upx 50upx 0 0;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
}
.css-heart:after {
  left: 0;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
}

.loading12 .css-heart {
  position: absolute;
  -webkit-animation: star-fly-out 1s ease alternate infinite;
  animation: star-fly-out 1s ease alternate infinite;
  -webkit-transform: scale(0.2);
  transform: scale(0.2);
}
.loading12 .heart1 {
  top: 0;
  left: 30upx;
}
.loading12 .heart2 {
  left: 60upx;
  top: 30upx;
}
.loading12 .heart3 {
  top: 60upx;
  left: 30upx;
}
.loading12 .heart4 {
  left: 0;
  top: 30upx;
}

@-webkit-keyframes star-fly-out {
  0% {
    top: 19upx;
    left: 19upx;
  }
  100% {
  }
}
@keyframes star-fly-out {
  0% {
    top: 19upx;
    left: 19upx;
  }
  100% {
  }
}
</style>
