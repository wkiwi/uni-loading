<template>
  <view class="loader loading8">
    <view class="loader-pacman"></view>
  </view>
</template>

<script>
export default {
  name: "loading8",
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
.loading8 {
  border: 8upx dotted rgba(255, 255, 0, 1);
  -webkit-transition: all 1s ease;
  transition: all 1s ease;
  -webkit-animation: dotted-spin 1s linear infinite;
  animation: dotted-spin 1s linear infinite;
  border-bottom-width: 1upx;
  border-bottom-color: rgba(255, 255, 0, 0.3);
  border-left-width: 2upx;
  border-left-color: rgba(255, 255, 0, 0.5);
  border-top-width: 3upx;
  border-right-width: 4upx;
  border-top-color: rgba(255, 255, 0, 0.7);
}
.loading8 .loader-pacman,
.loader-pacman {
  position: absolute;
  top: 40upx;
  left: 25upx;
  width: 0upx;
  height: 0upx;
  border-right: 12upx solid transparent;
  border-top: 12upx solid rgba(255, 255, 0, 1);
  border-left: 12upx solid rgba(255, 255, 0, 1);
  border-bottom: 12upx solid rgba(255, 255, 0, 1);
  border-top-left-radius: 12upx;
  border-top-right-radius: 12upx;
  border-bottom-left-radius: 12upx;
  border-bottom-right-radius: 12upx;
}

@-webkit-keyframes dotted-spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
@keyframes dotted-spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}

</style>
