<template>
  <view class="wrapper">
    <view class="loader loading10">
      <view class="dot dot1"></view>
      <view class="dot dot2"></view>
      <view class="dot dot3"></view>
    </view>
  </view>
</template>

<script>
export default {
  name: "loading10",
  data() {
    return {};
  }
};
</script>

<style scoped="true">
.wrapper{
  width:50upx;
  height: 30upx;
  position: relative;
}
.loading10 .dot {
  width: 10upx;
  height: 10upx;
  background: #00e676;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 5upx);
}
.loading10 .dot1 {
  left: 0upx;
  -webkit-animation: dot-jump 0.5s cubic-bezier(0.77, 0.47, 0.64, 0.28)
    alternate infinite;
  animation: dot-jump 0.5s cubic-bezier(0.77, 0.47, 0.64, 0.28) alternate
    infinite;
}
.loading10 .dot2 {
  left: 20upx;
  -webkit-animation: dot-jump 0.5s 0.2s cubic-bezier(0.77, 0.47, 0.64, 0.28)
    alternate infinite;
  animation: dot-jump 0.5s 0.2s cubic-bezier(0.77, 0.47, 0.64, 0.28) alternate
    infinite;
}
.loading10 .dot3 {
  left: 40upx;
  -webkit-animation: dot-jump 0.5s 0.4s cubic-bezier(0.77, 0.47, 0.64, 0.28)
    alternate infinite;
  animation: dot-jump 0.5s 0.4s cubic-bezier(0.77, 0.47, 0.64, 0.28) alternate
    infinite;
}

@-webkit-keyframes dot-jump {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-15upx);
    transform: translateY(-15upx);
  }
}
@keyframes dot-jump {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-15upx);
    transform: translateY(-15upx);
  }
}

</style>
