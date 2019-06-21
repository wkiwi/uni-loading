<template>
  <view class="loading15">
    <view></view>
    <view></view>
    <view></view>
    <view></view>
    <view></view>
  </view>
</template>

<script>
export default {
  name: "loading15",
  data() {
    return {};
  }
};
</script>

<style scoped="true">
.loading15 {
  position: relative;
  width: 100upx;
  height: 40upx;
}
.loading15 view {
  position: absolute;
  width: 20upx;
  height: 20upx;
  background: dodgerblue;
  border-radius: 50%;
  -webkit-animation: loading15 1s infinite ease-in-out;
  animation: loading15 1s infinite ease-in-out;
}
.loading15 view:nth-child(2) {
  left: 20upx;
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.loading15 view:nth-child(3) {
  left: 40upx;
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
.loading15 view:nth-child(4) {
  left: 60upx;
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}
.loading15 view:nth-child(5) {
  left: 80upx;
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

@-webkit-keyframes loading15 {
  0%,
  100% {
    opacity: 0.3;
    -webkit-transform: translateY(0);
    transform: translateY(0);
    box-shadow: 0 0 3upx rgba(255, 255, 255, 0.1);
  }
  50% {
    opacity: 1;
    -webkit-transform: translateY(-10upx);
    transform: translateY(-10upx);
    box-shadow: 0 20upx 3upx rgba(255, 255, 255, 0.05);
  }
}

@keyframes loading15 {
  0%,
  100% {
    opacity: 0.3;
    -webkit-transform: translateY(0);
    transform: translateY(0);
    box-shadow: 0 0 3upx rgba(255, 255, 255, 0.1);
  }
  50% {
    opacity: 1;
    -webkit-transform: translateY(-10upx);
    transform: translateY(-10upx);
    box-shadow: 0 20upx 3upx rgba(255, 255, 255, 0.05);
  }
}
</style>
