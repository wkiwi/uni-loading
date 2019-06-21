<template>
  <view class="loading-26">
    <view class="lego red">
      <view class="left"></view>
      <view class="right"></view>
      <view class="container-top">
        <view class="top">
          <view class="dot d-n1"></view>
          <view class="dot d-n2"></view>
          <view class="dot d-n3"></view>
          <view class="dot d-n4"></view>
        </view>
      </view>
    </view>

    <view class="lego blue">
      <view class="left"></view>
      <view class="right"></view>
      <view class="container-top">
        <view class="top">
          <view class="dot d-n1"></view>
          <view class="dot d-n2"></view>
          <view class="dot d-n3"></view>
          <view class="dot d-n4"></view>
        </view>
      </view>
    </view>

    <view class="lego yellow">
      <view class="left"></view>
      <view class="right"></view>
      <view class="container-top">
        <view class="top">
          <view class="dot d-n1"></view>
          <view class="dot d-n2"></view>
          <view class="dot d-n3"></view>
          <view class="dot d-n4"></view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "loading26",
  data() {
    return {};
  }
};
</script>

<style scoped="true">
.red.lego {
  animation-delay: 0s;
}
.red.lego > .left {
  background: #f55a4e;
}
.red.lego > .right {
  background: #f32c1e;
}
.red.lego > .container-top > .top {
  background: #f44336;
}
.red.lego > .container-top > .top > .dot {
  background: #f55a4e;
  filter: drop-shadow(5upx 5upx 0upx #ea1c0d);
}

.blue.lego {
  animation-delay: 1.4s;
}
.blue.lego > .left {
  background: #3594e8;
}
.blue.lego > .right {
  background: #187bd1;
}
.blue.lego > .container-top > .top {
  background: #1e88e5;
}
.blue.lego > .container-top > .top > .dot {
  background: #3594e8;
  filter: drop-shadow(5upx 5upx 0upx #166dba);
}

.yellow.lego {
  animation-delay: 2.8s;
}
.yellow.lego > .left {
  background: #fddd4e;
}
.yellow.lego > .right {
  background: #fdd31c;
}
.yellow.lego > .container-top > .top {
  background: #fdd835;
}
.yellow.lego > .container-top > .top > .dot {
  background: #fddd4e;
  filter: drop-shadow(5upx 5upx 0upx #fdce03);
}

.lego {
  width: 150upx;
  height: 150upx;
  position: absolute;
  left: 30%;
  top: 20%;
  animation: loading 4.2s infinite ease;
  opacity: 0;
}
.lego > .left {
  width: 102upx;
  height: 35upx;
  position: absolute;
  transform: rotateY(60deg) rotate(10deg) rotateX(6deg);
  bottom: 15upx;
  border-radius: 5upx 0 5upx 5upx;
}
.lego > .right {
  width: 102upx;
  height: 35upx;
  position: absolute;
  transform: rotateY(-60deg) rotate(-10deg) rotateX(5deg);
  bottom: 15upx;
  right: 0;
  border-radius: 0 5upx 5upx 5upx;
}
.lego .container-top {
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 75upx;
  height: 75upx;
  transform: rotateZ(45deg);
  bottom: 16.5upx;
}
.lego .container-top .top {
  width: 68upx;
  height: 69upx;
  position: absolute;
  transform: rotateY(42deg) rotateZ(-17deg) rotateX(-43deg);
  border-radius: 5upx 0 0 0;
}
.lego .container-top .top > .dot {
  position: absolute;
  width: 18upx;
  height: 18upx;
  border-radius: 100%;
}
.lego .container-top .top > .dot.d-n1 {
  left: 7upx;
  top: 7upx;
}
.lego .container-top .top > .dot.d-n2 {
  right: 10upx;
  top: 7upx;
}
.lego .container-top .top > .dot.d-n3 {
  right: 10upx;
  bottom: 10upx;
}
.lego .container-top .top > .dot.d-n4 {
  left: 7upx;
  bottom: 10upx;
}

@-webkit-keyframes loading {
  0% {
    transform: translate(0, -50upx);
    opacity: 0;
    z-index: 10;
  }
  10% {
    opacity: 1;
  }
  40% {
    transform: translate(0, 0);
    z-index: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    transform: translate(0, 100upx);
    opacity: 0;
  }
}
@-moz-keyframes loading {
  0% {
    transform: translate(0, -50upx);
    opacity: 0;
    z-index: 10;
  }
  40% {
    transform: translate(0, 0);
    opacity: 1;
    z-index: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    transform: translate(0, 100upx);
    opacity: 0;
  }
}
</style>
