<template>
  <view class="wrap-preload circle-ball">
    <view class="overlay"></view>
    <view class="wrap-content">
      <view class="wrap-circle-ball">
        <view class="wrap-ball">
          <view class="ball ball-top"></view>
          <view class="ball ball-top"></view>
        </view>
        <view class="wrap-ball">
          <view class="ball ball-bot"></view>
          <view class="ball ball-bot"></view>
        </view>
        <view class="wrap-effect">
          <view class="wrap-circle">
            <view class="circle-effect left"></view>
            <view class="circle-effect left"></view>
          </view>
          <view class="wrap-circle">
            <view class="circle-effect right"></view>
            <view class="circle-effect right"></view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "loading29",
  data() {
    return {};
  }
};
</script>

<style scoped="true">
@-webkit-keyframes ball-top {
  0% {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  25% {
    -webkit-transform: rotate(-13deg);
    -moz-transform: rotate(-13deg);
    -ms-transform: rotate(-13deg);
    -o-transform: rotate(-13deg);
    transform: rotate(-13deg);
  }
  75% {
    -webkit-transform: rotate(193deg);
    -moz-transform: rotate(193deg);
    -ms-transform: rotate(193deg);
    -o-transform: rotate(193deg);
    transform: rotate(193deg);
  }
  100% {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}
@-moz-keyframes ball-top {
  0% {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  25% {
    -webkit-transform: rotate(-13deg);
    -moz-transform: rotate(-13deg);
    -ms-transform: rotate(-13deg);
    -o-transform: rotate(-13deg);
    transform: rotate(-13deg);
  }
  75% {
    -webkit-transform: rotate(193deg);
    -moz-transform: rotate(193deg);
    -ms-transform: rotate(193deg);
    -o-transform: rotate(193deg);
    transform: rotate(193deg);
  }
  100% {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}
@-o-keyframes ball-top {
  0% {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  25% {
    -webkit-transform: rotate(-13deg);
    -moz-transform: rotate(-13deg);
    -ms-transform: rotate(-13deg);
    -o-transform: rotate(-13deg);
    transform: rotate(-13deg);
  }
  75% {
    -webkit-transform: rotate(193deg);
    -moz-transform: rotate(193deg);
    -ms-transform: rotate(193deg);
    -o-transform: rotate(193deg);
    transform: rotate(193deg);
  }
  100% {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}
@keyframes ball-top {
  0% {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  25% {
    -webkit-transform: rotate(-13deg);
    -moz-transform: rotate(-13deg);
    -ms-transform: rotate(-13deg);
    -o-transform: rotate(-13deg);
    transform: rotate(-13deg);
  }
  75% {
    -webkit-transform: rotate(193deg);
    -moz-transform: rotate(193deg);
    -ms-transform: rotate(193deg);
    -o-transform: rotate(193deg);
    transform: rotate(193deg);
  }
  100% {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}
@-webkit-keyframes ball-bot {
  0% {
    -webkit-transform: rotate(270deg);
    -moz-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    -o-transform: rotate(270deg);
    transform: rotate(270deg);
  }
  25% {
    -webkit-transform: rotate(345deg);
    -moz-transform: rotate(345deg);
    -ms-transform: rotate(345deg);
    -o-transform: rotate(345deg);
    transform: rotate(345deg);
  }
  75% {
    -webkit-transform: rotate(195deg);
    -moz-transform: rotate(195deg);
    -ms-transform: rotate(195deg);
    -o-transform: rotate(195deg);
    transform: rotate(195deg);
  }
  100% {
    -webkit-transform: rotate(270deg);
    -moz-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    -o-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}
@-moz-keyframes ball-bot {
  0% {
    -webkit-transform: rotate(270deg);
    -moz-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    -o-transform: rotate(270deg);
    transform: rotate(270deg);
  }
  25% {
    -webkit-transform: rotate(345deg);
    -moz-transform: rotate(345deg);
    -ms-transform: rotate(345deg);
    -o-transform: rotate(345deg);
    transform: rotate(345deg);
  }
  75% {
    -webkit-transform: rotate(195deg);
    -moz-transform: rotate(195deg);
    -ms-transform: rotate(195deg);
    -o-transform: rotate(195deg);
    transform: rotate(195deg);
  }
  100% {
    -webkit-transform: rotate(270deg);
    -moz-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    -o-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}
@-o-keyframes ball-bot {
  0% {
    -webkit-transform: rotate(270deg);
    -moz-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    -o-transform: rotate(270deg);
    transform: rotate(270deg);
  }
  25% {
    -webkit-transform: rotate(345deg);
    -moz-transform: rotate(345deg);
    -ms-transform: rotate(345deg);
    -o-transform: rotate(345deg);
    transform: rotate(345deg);
  }
  75% {
    -webkit-transform: rotate(195deg);
    -moz-transform: rotate(195deg);
    -ms-transform: rotate(195deg);
    -o-transform: rotate(195deg);
    transform: rotate(195deg);
  }
  100% {
    -webkit-transform: rotate(270deg);
    -moz-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    -o-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}
@keyframes ball-bot {
  0% {
    -webkit-transform: rotate(270deg);
    -moz-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    -o-transform: rotate(270deg);
    transform: rotate(270deg);
  }
  25% {
    -webkit-transform: rotate(345deg);
    -moz-transform: rotate(345deg);
    -ms-transform: rotate(345deg);
    -o-transform: rotate(345deg);
    transform: rotate(345deg);
  }
  75% {
    -webkit-transform: rotate(195deg);
    -moz-transform: rotate(195deg);
    -ms-transform: rotate(195deg);
    -o-transform: rotate(195deg);
    transform: rotate(195deg);
  }
  100% {
    -webkit-transform: rotate(270deg);
    -moz-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    -o-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}
@-webkit-keyframes circle-effect-left {
  0% {
    opacity: 0;
  }
  24.99% {
    opacity: 0;
  }
  25% {
    opacity: 1;
    border-color: rgba(255, 255, 255, 0.6);
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    -ms-transform: scale(0.5);
    -o-transform: scale(0.5);
    transform: scale(0.5);
  }
  40% {
    border-color: rgba(255, 255, 255, 0);
  }
  45% {
    opacity: 0;
    border-color: rgba(255, 255, 255, 0);
    -webkit-transform: scale(3, 1);
    -moz-transform: scale(3, 1);
    -ms-transform: scale(3, 1);
    -o-transform: scale(3, 1);
    transform: scale(3, 1);
  }
  100% {
    opacity: 0;
  }
}
@-moz-keyframes circle-effect-left {
  0% {
    opacity: 0;
  }
  24.99% {
    opacity: 0;
  }
  25% {
    opacity: 1;
    border-color: rgba(255, 255, 255, 0.6);
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    -ms-transform: scale(0.5);
    -o-transform: scale(0.5);
    transform: scale(0.5);
  }
  40% {
    border-color: rgba(255, 255, 255, 0);
  }
  45% {
    opacity: 0;
    border-color: rgba(255, 255, 255, 0);
    -webkit-transform: scale(3, 1);
    -moz-transform: scale(3, 1);
    -ms-transform: scale(3, 1);
    -o-transform: scale(3, 1);
    transform: scale(3, 1);
  }
  100% {
    opacity: 0;
  }
}
@-o-keyframes circle-effect-left {
  0% {
    opacity: 0;
  }
  24.99% {
    opacity: 0;
  }
  25% {
    opacity: 1;
    border-color: rgba(255, 255, 255, 0.6);
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    -ms-transform: scale(0.5);
    -o-transform: scale(0.5);
    transform: scale(0.5);
  }
  40% {
    border-color: rgba(255, 255, 255, 0);
  }
  45% {
    opacity: 0;
    border-color: rgba(255, 255, 255, 0);
    -webkit-transform: scale(3, 1);
    -moz-transform: scale(3, 1);
    -ms-transform: scale(3, 1);
    -o-transform: scale(3, 1);
    transform: scale(3, 1);
  }
  100% {
    opacity: 0;
  }
}
@keyframes circle-effect-left {
  0% {
    opacity: 0;
  }
  24.99% {
    opacity: 0;
  }
  25% {
    opacity: 1;
    border-color: rgba(255, 255, 255, 0.6);
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    -ms-transform: scale(0.5);
    -o-transform: scale(0.5);
    transform: scale(0.5);
  }
  40% {
    border-color: rgba(255, 255, 255, 0);
  }
  45% {
    opacity: 0;
    border-color: rgba(255, 255, 255, 0);
    -webkit-transform: scale(3, 1);
    -moz-transform: scale(3, 1);
    -ms-transform: scale(3, 1);
    -o-transform: scale(3, 1);
    transform: scale(3, 1);
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes circle-effect-right {
  0% {
    opacity: 0;
  }
  74.99% {
    opacity: 0;
  }
  75% {
    opacity: 1;
    border-color: rgba(255, 255, 255, 0.6);
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    -ms-transform: scale(0.5);
    -o-transform: scale(0.5);
    transform: scale(0.5);
  }
  90% {
    border-color: rgba(255, 255, 255, 0);
  }
  95% {
    opacity: 0;
    border-color: rgba(255, 255, 255, 0);
    -webkit-transform: scale(3, 1);
    -moz-transform: scale(3, 1);
    -ms-transform: scale(3, 1);
    -o-transform: scale(3, 1);
    transform: scale(3, 1);
  }
  100% {
    opacity: 0;
  }
}
@-moz-keyframes circle-effect-right {
  0% {
    opacity: 0;
  }
  74.99% {
    opacity: 0;
  }
  75% {
    opacity: 1;
    border-color: rgba(255, 255, 255, 0.6);
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    -ms-transform: scale(0.5);
    -o-transform: scale(0.5);
    transform: scale(0.5);
  }
  90% {
    border-color: rgba(255, 255, 255, 0);
  }
  95% {
    opacity: 0;
    border-color: rgba(255, 255, 255, 0);
    -webkit-transform: scale(3, 1);
    -moz-transform: scale(3, 1);
    -ms-transform: scale(3, 1);
    -o-transform: scale(3, 1);
    transform: scale(3, 1);
  }
  100% {
    opacity: 0;
  }
}
@-o-keyframes circle-effect-right {
  0% {
    opacity: 0;
  }
  74.99% {
    opacity: 0;
  }
  75% {
    opacity: 1;
    border-color: rgba(255, 255, 255, 0.6);
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    -ms-transform: scale(0.5);
    -o-transform: scale(0.5);
    transform: scale(0.5);
  }
  90% {
    border-color: rgba(255, 255, 255, 0);
  }
  95% {
    opacity: 0;
    border-color: rgba(255, 255, 255, 0);
    -webkit-transform: scale(3, 1);
    -moz-transform: scale(3, 1);
    -ms-transform: scale(3, 1);
    -o-transform: scale(3, 1);
    transform: scale(3, 1);
  }
  100% {
    opacity: 0;
  }
}
@keyframes circle-effect-right {
  0% {
    opacity: 0;
  }
  74.99% {
    opacity: 0;
  }
  75% {
    opacity: 1;
    border-color: rgba(255, 255, 255, 0.6);
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    -ms-transform: scale(0.5);
    -o-transform: scale(0.5);
    transform: scale(0.5);
  }
  90% {
    border-color: rgba(255, 255, 255, 0);
  }
  95% {
    opacity: 0;
    border-color: rgba(255, 255, 255, 0);
    -webkit-transform: scale(3, 1);
    -moz-transform: scale(3, 1);
    -ms-transform: scale(3, 1);
    -o-transform: scale(3, 1);
    transform: scale(3, 1);
  }
  100% {
    opacity: 0;
  }
}
.wrap-preload {
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0;
  margin: 0;
  opacity: 1;
  visibility: visible;
  width: 100%;
  height: 100%;
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
}
.wrap-preload.circle-ball .wrap-content {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  width: 128upx;
  height: 128upx;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.wrap-preload.circle-ball .wrap-content .wrap-circle-ball {
  position: relative;
  width: 100%;
  height: 100%;
}
.wrap-preload.circle-ball .wrap-content .wrap-circle-ball .ball {
  position: absolute;
  top: 50%;
  margin-top: -8upx;
  border-radius: 100%;
  width: 16upx;
  height: 16upx;
}
.wrap-preload.circle-ball .wrap-content .wrap-circle-ball .ball.ball-top {
  z-index: 1;
  background: #009d2f;
  -webkit-transform-origin: 64upx 50%;
  -moz-transform-origin: 64upx 50%;
  -ms-transform-origin: 64upx 50%;
  -o-transform-origin: 64upx 50%;
  transform-origin: 64upx 50%;
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-animation: ball-top 3s linear 0s infinite;
  -moz-animation: ball-top 3s linear 0s infinite;
  -ms-animation: ball-top 3s linear 0s infinite;
  -o-animation: ball-top 3s linear 0s infinite;
  animation: ball-top 3s linear 0s infinite;
}
.wrap-preload.circle-ball
  .wrap-content
  .wrap-circle-ball
  .ball.ball-top:nth-of-type(2) {
  background: #17b948;
  width: 8upx;
  height: 8upx;
  -webkit-animation: ball-top 3s linear 0.6s infinite;
  -moz-animation: ball-top 3s linear 0.6s infinite;
  -ms-animation: ball-top 3s linear 0.6s infinite;
  -o-animation: ball-top 3s linear 0.6s infinite;
  animation: ball-top 3s linear 0.6s infinite;
}
.wrap-preload.circle-ball .wrap-content .wrap-circle-ball .ball.ball-bot {
  opacity: 0.4;
  background: #f7ab03;
  -webkit-transform-origin: 64upx 50%;
  -moz-transform-origin: 64upx 50%;
  -ms-transform-origin: 64upx 50%;
  -o-transform-origin: 64upx 50%;
  transform-origin: 64upx 50%;
  -webkit-transform: rotate(270deg);
  -moz-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  -o-transform: rotate(270deg);
  transform: rotate(270deg);
  -webkit-animation: ball-bot 3s linear 0s infinite;
  -moz-animation: ball-bot 3s linear 0s infinite;
  -ms-animation: ball-bot 3s linear 0s infinite;
  -o-animation: ball-bot 3s linear 0s infinite;
  animation: ball-bot 3s linear 0s infinite;
}
.wrap-preload.circle-ball
  .wrap-content
  .wrap-circle-ball
  .ball.ball-bot:nth-of-type(2) {
  background: #ffc239;
  width: 8upx;
  height: 8upx;
  -webkit-animation: ball-bot 3s linear 0.6s infinite;
  -moz-animation: ball-bot 3s linear 0.6s infinite;
  -ms-animation: ball-bot 3s linear 0.6s infinite;
  -o-animation: ball-bot 3s linear 0.6s infinite;
  animation: ball-bot 3s linear 0.6s infinite;
}
.wrap-preload.circle-ball .wrap-content .wrap-circle-ball .wrap-effect {
  position: absolute;
  top: 50%;
  margin-top: -8upx;
  left: -8upx;
  right: -8upx;
}
.wrap-preload.circle-ball
  .wrap-content
  .wrap-circle-ball
  .wrap-effect
  .circle-effect {
  opacity: 0;
  position: absolute;
  border-radius: 100%;
  border: 1upx solid rgba(255, 255, 255, 0.6);
  width: 32upx;
  height: 32upx;
}
.wrap-preload.circle-ball
  .wrap-content
  .wrap-circle-ball
  .wrap-effect
  .circle-effect:nth-of-type(2):before {
  border: none;
  background: rgba(255, 255, 255, 0.2);
  width: 8upx;
  height: 8upx;
}
.wrap-preload.circle-ball
  .wrap-content
  .wrap-circle-ball
  .wrap-effect
  .circle-effect:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 100%;
  border: 1upx solid rgba(255, 255, 255, 0.2);
  width: 16upx;
  height: 16upx;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.wrap-preload.circle-ball
  .wrap-content
  .wrap-circle-ball
  .wrap-effect
  .circle-effect.left {
  left: 0;
  -webkit-animation: circle-effect-left 3s linear 0s infinite;
  -moz-animation: circle-effect-left 3s linear 0s infinite;
  -ms-animation: circle-effect-left 3s linear 0s infinite;
  -o-animation: circle-effect-left 3s linear 0s infinite;
  animation: circle-effect-left 3s linear 0s infinite;
}
.wrap-preload.circle-ball
  .wrap-content
  .wrap-circle-ball
  .wrap-effect
  .circle-effect.left:nth-of-type(2) {
  top: 8upx;
  left: 4upx;
  width: 16upx;
  height: 16upx;
  -webkit-animation: circle-effect-left 3s linear 0.6s infinite;
  -moz-animation: circle-effect-left 3s linear 0.6s infinite;
  -ms-animation: circle-effect-left 3s linear 0.6s infinite;
  -o-animation: circle-effect-left 3s linear 0.6s infinite;
  animation: circle-effect-left 3s linear 0.6s infinite;
}
.wrap-preload.circle-ball
  .wrap-content
  .wrap-circle-ball
  .wrap-effect
  .circle-effect.right {
  right: 0;
  -webkit-animation: circle-effect-right 3s linear 0s infinite;
  -moz-animation: circle-effect-right 3s linear 0s infinite;
  -ms-animation: circle-effect-right 3s linear 0s infinite;
  -o-animation: circle-effect-right 3s linear 0s infinite;
  animation: circle-effect-right 3s linear 0s infinite;
}
.wrap-preload.circle-ball
  .wrap-content
  .wrap-circle-ball
  .wrap-effect
  .circle-effect.right:nth-of-type(2) {
  top: 8upx;
  right: 4upx;
  width: 16upx;
  height: 16upx;
  -webkit-animation: circle-effect-right 3s linear 0.6s infinite;
  -moz-animation: circle-effect-right 3s linear 0.6s infinite;
  -ms-animation: circle-effect-right 3s linear 0.6s infinite;
  -o-animation: circle-effect-right 3s linear 0.6s infinite;
  animation: circle-effect-right 3s linear 0.6s infinite;
}
.wrap-preload.hide-out {
  z-index: -1;
  opacity: 0;
  visibility: hidden;
  -webkit-transform: scale(2);
  -moz-transform: scale(2);
  -ms-transform: scale(2);
  -o-transform: scale(2);
  transform: scale(2);
}
.wrap-preload .overlay {
  position: relative;
  display: none;
  width: 100%;
  height: 100%;
}
</style>
