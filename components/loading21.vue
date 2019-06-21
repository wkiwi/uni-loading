<template>
  <view class="loading-21">
    <view></view>
    <view></view>
    <view></view>
    <view></view>
    <view></view>
    <view></view>
  </view>
</template>

<script>
export default {
  name: "loading18",
  data() {
    return {};
  }
};
</script>

<style scoped="true">
.loading-21 view {
  width: 40upx;
  height: 40upx;
  border-radius: 20upx;
  backface-visibility: hidden;
  position: absolute;
  animation-name: move;
  animation-timing-function: cubic-bezier(0.4, 0, 1, 0.8);
  animation-iteration-count: infinite;
  animation-duration: 3s;
  top: calc(50% - 20upx);
  left: 50%;
  transform-origin: -20upx center;
}
.loading-21 view:nth-child(1) {
  background: #226b80;
  animation-delay: -0.5s;
  opacity: 0;
}
.loading-21 view:nth-child(2) {
  background: #226b80;
  animation-delay: -1s;
  opacity: 0;
}
.loading-21 view:nth-child(3) {
  background: #35b0ab;
  animation-delay: -1.5s;
  opacity: 0;
}
.loading-21 view:nth-child(4) {
  background: #c5f0a4;
  animation-delay: -2s;
  opacity: 0;
}
.loading-21 view:nth-child(5) {
  background: #226b80;
  animation-delay: -2.5s;
  opacity: 0;
}
.loading-21 view:nth-child(6) {
  background: #c5f0a4;
  animation-delay: -3s;
  opacity: 0;
}

@keyframes move {
  0% {
    transform: scale(1) rotate(0deg) translate3d(0, 0, 1px);
  }
  30% {
    opacity: 1;
  }
  100% {
    z-index: 10;
    transform: scale(0) rotate(360deg) translate3d(0, 0, 1px);
  }
}
</style>
