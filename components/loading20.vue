<template>
  <view class="c">
    <view></view>
    <view></view>
    <view></view>
    <view></view>
    <view></view>
  </view>
</template>

<script>
export default {
  name: "loading20",
  data() {
    return {};
  }
};
</script>

<style scoped ="true">
.c {
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  width: 150upx;
  width: 150upx;
}
.c view {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  border-radius: 50%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-transform-origin: center center;
  transform-origin: center center;
  -webkit-animation: anim 1s ease-in-out infinite;
  animation: anim 1s ease-in-out infinite;
  will-change: transform, filter;
}
.c view:nth-child(1) {
  width: 30upx;
  height: 30upx;
}
.c view:nth-child(1):after {
  content: "";
  display: block;
  font-size: 25%;
  width: 30upx;
  height: 30upx;
  border-radius: 50%;
  -webkit-box-shadow: 30upx 0 0 rgba(72, 157, 138, 0.2),
    -30upx 0 0 rgba(50, 70, 80, 0.2), 0 30upx 0 rgba(211, 75, 76, 0.2),
    0 -30upx 0 rgba(232, 169, 97, 0.2);
  box-shadow: 30upx 0 0 rgba(72, 157, 138, 0.2), -30upx 0 0 rgba(50, 70, 80, 0.2),
    0 30upx 0 rgba(211, 75, 76, 0.2), 0 -30upx 0 rgba(232, 169, 97, 0.2);
}
.c view:nth-child(2) {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
  width: 60upx;
  height: 60upx;
}
.c view:nth-child(2):after {
  content: "";
  display: block;
  font-size: 50%;
  width: 30upx;
  height: 30upx;
  border-radius: 50%;
  -webkit-box-shadow: 1.150upx 0 0 rgba(72, 157, 138, 0.4),
    -1.150upx 0 0 rgba(50, 70, 80, 0.4), 0 1.150upx 0 rgba(211, 75, 76, 0.4),
    0 -1.150upx 0 rgba(232, 169, 97, 0.4);
  box-shadow: 1.150upx 0 0 rgba(72, 157, 138, 0.4),
    -1.150upx 0 0 rgba(50, 70, 80, 0.4), 0 1.150upx 0 rgba(211, 75, 76, 0.4),
    0 -1.150upx 0 rgba(232, 169, 97, 0.4);
}
.c view:nth-child(3) {
  -webkit-animation-delay: 0.15s;
  animation-delay: 0.15s;
  width: 90upx;
  height: 90upx;
}
.c view:nth-child(3):after {
  content: "";
  display: block;
  font-size: 75%;
  width: 30upx;
  height: 30upx;
  border-radius: 50%;
  -webkit-box-shadow: 60upx 0 0 rgba(72, 157, 138, 0.6),
    -60upx 0 0 rgba(50, 70, 80, 0.6), 0 60upx 0 rgba(211, 75, 76, 0.6),
    0 -60upx 0 rgba(232, 169, 97, 0.6);
  box-shadow: 60upx 0 0 rgba(72, 157, 138, 0.6), -60upx 0 0 rgba(50, 70, 80, 0.6),
    0 60upx 0 rgba(211, 75, 76, 0.6), 0 -60upx 0 rgba(232, 169, 97, 0.6);
}
.c view:nth-child(4) {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
  width: 120upx;
  height: 120upx;
}
.c view:nth-child(4):after {
  content: "";
  display: block;
  font-size: 100%;
  width: 30upx;
  height: 30upx;
  border-radius: 50%;
  -webkit-box-shadow: 75upx 0 0 rgba(72, 157, 138, 0.8),
    -75upx 0 0 rgba(50, 70, 80, 0.8), 0 75upx 0 rgba(211, 75, 76, 0.8),
    0 -75upx 0 rgba(232, 169, 97, 0.8);
  box-shadow: 75upx 0 0 rgba(72, 157, 138, 0.8),
    -75upx 0 0 rgba(50, 70, 80, 0.8), 0 75upx 0 rgba(211, 75, 76, 0.8),
    0 -75upx 0 rgba(232, 169, 97, 0.8);
}
.c view:nth-child(5) {
  -webkit-animation-delay: 0.25s;
  animation-delay: 0.25s;
  width: 150upx;
  height: 150upx;
}
.c view:nth-child(5):after {
  content: "";
  display: block;
  font-size: 125%;
  width: 30upx;
  height: 30upx;
  border-radius: 50%;
  -webkit-box-shadow: 90upx 0 0 #489d8a, -90upx 0 0 #324650, 0 90upx 0 #d34b4c,
    0 -90upx 0 #e8a961;
  box-shadow: 90upx 0 0 #489d8a, -90upx 0 0 #324650, 0 90upx 0 #d34b4c,
    0 -90upx 0 #e8a961;
}

@-webkit-keyframes anim {
  50% {
    -webkit-filter: blur(2upx);
    filter: blur(2upx);
  }
  90%,
  100% {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
    -webkit-filter: blur(0);
    filter: blur(0);
  }
}

@keyframes anim {
  50% {
    -webkit-filter: blur(2upx);
    filter: blur(2upx);
  }
  90%,
  100% {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
    -webkit-filter: blur(0);
    filter: blur(0);
  }
}

</style>
