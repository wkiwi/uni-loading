<template>
  <view class="loading16"></view>
</template>

<script>
export default {
  name: "loading16",
  data() {
    return {};
  }
};
</script>

<style scoped="true">
.loading16 {
  position: relative;
  width: 30upx;
  height: 30upx;
  border-radius: 50%;
  background: peachpuff;
  -webkit-animation: loading16 1.5s infinite linear;
  animation: loading16 1.5s infinite linear;
}
.loading16:after {
  content: "";
  position: absolute;
  width: 50upx;
  height: 50upx;
  border-top: 10upx solid coral;
  border-bottom: 10upx solid coral;
  border-left: 10upx solid transparent;
  border-right: 10upx solid transparent;
  border-radius: 50%;
  top: -20upx;
  left: -20upx;
}

@-webkit-keyframes loading16 {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loading16 {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
