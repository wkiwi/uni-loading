<template>
  <view class="loader loading11">
    <view class="line line1"></view>
    <view class="line line2"></view>
    <view class="line line3"></view>
  </view>
</template>

<script>
export default {
  name: "loading11",
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

.loading11 .line {
  width: 8upx;
  position: absolute;
  border-radius: 5upx;
  bottom: 0;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#1ee95d),
    to(#5714ce)
  );
  background: -webkit-linear-gradient(top, #1ee95d, #5714ce);
  background: linear-gradient(to bottom, #1ee95d, #5714ce);
}
.loading11 .line1 {
  left: 0;
  -webkit-animation: line-grow 0.5s ease alternate infinite;
  animation: line-grow 0.5s ease alternate infinite;
}
.loading11 .line2 {
  left: 20upx;
  -webkit-animation: line-grow 0.5s 0.2s ease alternate infinite;
  animation: line-grow 0.5s 0.2s ease alternate infinite;
}
.loading11 .line3 {
  left: 40upx;
  -webkit-animation: line-grow 0.5s 0.4s ease alternate infinite;
  animation: line-grow 0.5s 0.4s ease alternate infinite;
}
@-webkit-keyframes line-grow {
  0% {
    height: 0;
  }
  100% {
    height: 75%;
  }
}
@keyframes line-grow {
  0% {
    height: 0;
  }
  100% {
    height: 75%;
  }
}
</style>
