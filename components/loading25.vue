<template>
  <view class="loader">
    <view class="block-1"></view>
    <view class="block-2"></view>
    <view class="block-3"></view>
    <view class="block-4"></view>
    <view class="block-5"></view>
    <view class="block-6"></view>
    <view class="block-7"></view>
    <view class="block-8"></view>
    <view class="block-9"></view>
    <view class="block-10"></view>
    <view class="block-11"></view>
    <view class="block-12"></view>
    <view class="block-13"></view>
    <view class="block-14"></view>
    <view class="block-15"></view>
    <view class="block-16"></view>
  </view>
</template>

<script>
export default {
  name: "loading25",
  data() {
    return {};
  }
};
</script>

<style scoped="true">
* {
  box-sizing: border-box;
}
.loader {
  height: 60upx;
  transform: translateX(-50%) translateY(-50%);
  width: 60upx;
}
.loader view {
  animation: load 4s ease-in-out infinite;
  background: #fff;
  display: block;
  height: 12upx;
  opacity: 0;
  position: absolute;
  width: 12upx;
}
.loader view.block-1 {
  animation-delay: 0.92s;
  left: 0upx;
  top: 0upx;
}
.loader view.block-2 {
  animation-delay: 0.84s;
  left: 16upx;
  top: 0upx;
}
.loader view.block-3 {
  animation-delay: 0.76s;
  left: 32upx;
  top: 0upx;
}
.loader view.block-4 {
  animation-delay: 0.68s;
  left: 48upx;
  top: 0upx;
}
.loader view.block-5 {
  animation-delay: 0.6s;
  left: 0upx;
  top: 16upx;
}
.loader view.block-6 {
  animation-delay: 0.52s;
  left: 16upx;
  top: 16upx;
}
.loader view.block-7 {
  animation-delay: 0.44s;
  left: 32upx;
  top: 16upx;
}
.loader view.block-8 {
  animation-delay: 0.36s;
  left: 48upx;
  top: 16upx;
}
.loader view.block-9 {
  animation-delay: 0.28s;
  left: 0upx;
  top: 32upx;
}
.loader view.block-10 {
  animation-delay: 0.2s;
  left: 16upx;
  top: 32upx;
}
.loader view.block-11 {
  animation-delay: 0.12s;
  left: 32upx;
  top: 32upx;
}
.loader view.block-12 {
  animation-delay: 0.04s;
  left: 48upx;
  top: 32upx;
}
.loader view.block-13 {
  animation-delay: -0.04s;
  left: 0upx;
  top: 48upx;
}
.loader view.block-14 {
  animation-delay: -0.12s;
  left: 16upx;
  top: 48upx;
}
.loader view.block-15 {
  animation-delay: -0.2s;
  left: 32upx;
  top: 48upx;
}
.loader view.block-16 {
  animation-delay: -0.28s;
  left: 48upx;
  top: 48upx;
}

@keyframes load {
  0% {
    opacity: 0;
    transform: translateY(-100upx);
  }
  15% {
    opacity: 0;
    transform: translateY(-100upx);
  }
  30% {
    opacity: 1;
    transform: translateY(0);
  }
  70% {
    opacity: 1;
    transform: translateY(0);
  }
  85% {
    opacity: 0;
    transform: translateY(100upx);
  }
  100% {
    opacity: 0;
    transform: translateY(100upx);
  }
}
</style>
