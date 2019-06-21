<template>
  <view class="spinner-box">
  <view class="configure-border-1">  
    <view class="configure-core"></view>
  </view>  
  <view class="configure-border-2">
    <view class="configure-core"></view>
  </view> 
</view>
</template>

<script>
export default {
  name: "loading23",
  data() {
    return {};
  }
};
</script>

<style scoped="true">


@keyframes configure-clockwise {
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(359deg);
  }
}

@keyframes configure-xclockwise {
  0% {
    transform: rotate(45deg);
  }
  25% {
    transform: rotate(-45deg);
  }
  50% {
    transform: rotate(-135deg);
  }
  75% {
    transform: rotate(-215deg);
  }
  100% {
    transform: rotate(-305deg);
  }
}

.spinner-box {
  width: 300upx;
  height: 300upx;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}

.configure-border-1 {
  width: 115upx;
  height: 115upx;
  padding: 3upx;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffab91;
  animation: configure-clockwise 3s ease-in-out 0s infinite alternate;
}

.configure-border-2 {
  width: 115upx;
  height: 115upx;
  padding: 3upx;
  left: -115upx;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(63,249,220);
  transform: rotate(45deg);
  animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;
}

.configure-core {
  width: 100%;
  height: 100%;
  background-color: #040038;
}

</style>
