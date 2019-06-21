<template>
  <view class="loading14">
    <view></view>
    <view></view>
    <view></view>
    <view></view>
  </view>
</template>

<script>
export default {
  name: "loading14",
  data() {
    return {};
  }
};
</script>

<style scoped="true">
.loading14 {
  position: relative;
  width: 40upx;
  height: 40upx;
}
.loading14 view {
  position: absolute;
  display: block;
  bottom: 0upx;
  width: 20upx;
  height: 20upx;
  background: #9b59b6;
}
.loading14 view:nth-child(1) {
  -webkit-animation: loading14-1 1.5s infinite ease-in-out;
  animation: loading14-1 1.5s infinite ease-in-out;
}
.loading14 view:nth-child(2) {
  left: 20upx;
  -webkit-animation: loading14-2 1.5s infinite ease-in-out;
  animation: loading14-2 1.5s infinite ease-in-out;
}
.loading14 view:nth-child(3) {
  top: 0upx;
  -webkit-animation: loading14-3 1.5s infinite ease-in-out;
  animation: loading14-3 1.5s infinite ease-in-out;
}
.loading14 view:nth-child(4) {
  top: 0upx;
  left: 20upx;
  -webkit-animation: loading14-4 1.5s infinite ease-in-out;
  animation: loading14-4 1.5s infinite ease-in-out;
}

@-webkit-keyframes loading14-1 {
  0% {
    -webkit-transform: translateX(0) translateY(0) rotate(0);
    transform: translateX(0) translateY(0) rotate(0);
    border-radius: 0;
  }
  50% {
    -webkit-transform: translateX(-20upx) translateY(-10upx) rotate(-180deg);
    transform: translateX(-20upx) translateY(-10upx) rotate(-180deg);
    border-radius: 50%;
    background: #3498db;
  }
  80% {
    -webkit-transform: translateX(0) translateY(0) rotate(-360deg);
    transform: translateX(0) translateY(0) rotate(-360deg);
    border-radius: 0;
  }
  100% {
    -webkit-transform: translateX(0) translateY(0) rotate(-360deg);
    transform: translateX(0) translateY(0) rotate(-360deg);
    border-radius: 0;
  }
}

@keyframes loading14-1 {
  0% {
    -webkit-transform: translateX(0) translateY(0) rotate(0);
    transform: translateX(0) translateY(0) rotate(0);
    border-radius: 0;
  }
  50% {
    -webkit-transform: translateX(-20upx) translateY(-10upx) rotate(-180deg);
    transform: translateX(-20upx) translateY(-10upx) rotate(-180deg);
    border-radius: 50%;
    background: #3498db;
  }
  80% {
    -webkit-transform: translateX(0) translateY(0) rotate(-360deg);
    transform: translateX(0) translateY(0) rotate(-360deg);
    border-radius: 0;
  }
  100% {
    -webkit-transform: translateX(0) translateY(0) rotate(-360deg);
    transform: translateX(0) translateY(0) rotate(-360deg);
    border-radius: 0;
  }
}
@-webkit-keyframes loading14-2 {
  0% {
    -webkit-transform: translateX(0upx) translateY(0upx) rotate(0deg);
    transform: translateX(0upx) translateY(0upx) rotate(0deg);
    border-radius: 0;
  }
  50% {
    -webkit-transform: translateX(20upx) translateY(-10upx) rotate(180deg);
    transform: translateX(20upx) translateY(-10upx) rotate(180deg);
    border-radius: 50%;
    background: #f1c40f;
  }
  80% {
    -webkit-transform: translateX(0) translateY(0) rotate(360deg);
    transform: translateX(0) translateY(0) rotate(360deg);
    border-radius: 0;
  }
  100% {
    -webkit-transform: translateX(0) translateY(0) rotate(360deg);
    transform: translateX(0) translateY(0) rotate(360deg);
    border-radius: 0;
  }
}
@keyframes loading14-2 {
  0% {
    -webkit-transform: translateX(0upx) translateY(0upx) rotate(0deg);
    transform: translateX(0upx) translateY(0upx) rotate(0deg);
    border-radius: 0;
  }
  50% {
    -webkit-transform: translateX(20upx) translateY(-10upx) rotate(180deg);
    transform: translateX(20upx) translateY(-10upx) rotate(180deg);
    border-radius: 50%;
    background: #f1c40f;
  }
  80% {
    -webkit-transform: translateX(0) translateY(0) rotate(360deg);
    transform: translateX(0) translateY(0) rotate(360deg);
    border-radius: 0;
  }
  100% {
    -webkit-transform: translateX(0) translateY(0) rotate(360deg);
    transform: translateX(0) translateY(0) rotate(360deg);
    border-radius: 0;
  }
}
@-webkit-keyframes loading14-3 {
  0% {
    -webkit-transform: translateX(0upx) translateY(0upx) rotate(0deg);
    transform: translateX(0upx) translateY(0upx) rotate(0deg);
    border-radius: 0;
  }
  50% {
    -webkit-transform: translateX(-20upx) translateY(10upx) rotate(-180deg);
    transform: translateX(-20upx) translateY(10upx) rotate(-180deg);
    border-radius: 50%;
    background: #2ecc71;
  }
  80% {
    -webkit-transform: translateX(0) translateY(0) rotate(-360deg);
    transform: translateX(0) translateY(0) rotate(-360deg);
    border-radius: 0;
  }
  100% {
    -webkit-transform: translateX(0) translateY(0) rotate(-360deg);
    transform: translateX(0) translateY(0) rotate(-360deg);
    border-radius: 0;
  }
}
@keyframes loading14-3 {
  0% {
    -webkit-transform: translateX(0upx) translateY(0upx) rotate(0deg);
    transform: translateX(0upx) translateY(0upx) rotate(0deg);
    border-radius: 0;
  }
  50% {
    -webkit-transform: translateX(-20upx) translateY(10upx) rotate(-180deg);
    transform: translateX(-20upx) translateY(10upx) rotate(-180deg);
    border-radius: 50%;
    background: #2ecc71;
  }
  80% {
    -webkit-transform: translateX(0) translateY(0) rotate(-360deg);
    transform: translateX(0) translateY(0) rotate(-360deg);
    border-radius: 0;
  }
  100% {
    -webkit-transform: translateX(0) translateY(0) rotate(-360deg);
    transform: translateX(0) translateY(0) rotate(-360deg);
    border-radius: 0;
  }
}
@-webkit-keyframes loading14-4 {
  0% {
    -webkit-transform: translateX(0upx) translateY(0upx) rotate(0deg);
    transform: translateX(0upx) translateY(0upx) rotate(0deg);
    border-radius: 0;
  }
  50% {
    -webkit-transform: translateX(20upx) translateY(10upx) rotate(180deg);
    transform: translateX(20upx) translateY(10upx) rotate(180deg);
    border-radius: 50%;
    background: #e74c3c;
  }
  80% {
    -webkit-transform: translateX(0) translateY(0) rotate(360deg);
    transform: translateX(0) translateY(0) rotate(360deg);
    border-radius: 0;
  }
  100% {
    -webkit-transform: translateX(0) translateY(0) rotate(360deg);
    transform: translateX(0) translateY(0) rotate(360deg);
    border-radius: 0;
  }
}
@keyframes loading14-4 {
  0% {
    -webkit-transform: translateX(0upx) translateY(0upx) rotate(0deg);
    transform: translateX(0upx) translateY(0upx) rotate(0deg);
    border-radius: 0;
  }
  50% {
    -webkit-transform: translateX(20upx) translateY(10upx) rotate(180deg);
    transform: translateX(20upx) translateY(10upx) rotate(180deg);
    border-radius: 50%;
    background: #e74c3c;
  }
  80% {
    -webkit-transform: translateX(0) translateY(0) rotate(360deg);
    transform: translateX(0) translateY(0) rotate(360deg);
    border-radius: 0;
  }
  100% {
    -webkit-transform: translateX(0) translateY(0) rotate(360deg);
    transform: translateX(0) translateY(0) rotate(360deg);
    border-radius: 0;
  }
}
</style>
