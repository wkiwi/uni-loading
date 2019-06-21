<template>
  <view class="loader">
    <view></view>
    <view></view>
    <view></view>
    <view></view>
    <view></view>
    <view></view>
    <view></view>
    <view></view>
    <view></view>
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
  name: "loading17",
  data() {
    return {};
  }
};
</script>

<style scoped="true">
.loader {
  position: absolute;
  top: 0upx;
  bottom: 0upx;
  left: 0upx;
  right: 0upx;
  margin: auto;
  width: 175upx;
  height: 100upx;
}
.loader view {
  display: block;
  background: #ccc;
  width: 7upx;
  height: 10%;
  border-radius: 14upx;
  margin-right: 5upx;
  float: left;
  margin-top: 25%;
}
.loader view:last-child {
  margin-right: 0upx;
}
.loader view:nth-child(1) {
  animation: load 2.5s 1.4s infinite linear;
}
.loader view:nth-child(2) {
  animation: load 2.5s 1.2s infinite linear;
}
.loader view:nth-child(3) {
  animation: load 2.5s 1s infinite linear;
}
.loader view:nth-child(4) {
  animation: load 2.5s 0.8s infinite linear;
}
.loader view:nth-child(5) {
  animation: load 2.5s 0.6s infinite linear;
}
.loader view:nth-child(6) {
  animation: load 2.5s 0.4s infinite linear;
}
.loader view:nth-child(7) {
  animation: load 2.5s 0.2s infinite linear;
}
.loader view:nth-child(8) {
  animation: load 2.5s 0s infinite linear;
}
.loader view:nth-child(9) {
  animation: load 2.5s 0.2s infinite linear;
}
.loader view:nth-child(10) {
  animation: load 2.5s 0.4s infinite linear;
}
.loader view:nth-child(11) {
  animation: load 2.5s 0.6s infinite linear;
}
.loader view:nth-child(12) {
  animation: load 2.5s 0.8s infinite linear;
}
.loader view:nth-child(13) {
  animation: load 2.5s 1s infinite linear;
}
.loader view:nth-child(14) {
  animation: load 2.5s 1.2s infinite linear;
}
.loader view:nth-child(15) {
  animation: load 2.5s 1.4s infinite linear;
}

@keyframes load {
  0% {
    background: #ccc;
    margin-top: 25%;
    height: 10%;
  }
  50% {
    background: #444;
    height: 100%;
    margin-top: 0%;
  }
  100% {
    background: #ccc;
    height: 10%;
    margin-top: 25%;
  }
}
</style>
