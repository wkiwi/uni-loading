<template>
  <view class="spinner-box">
    <view class="circle-border">
      <view class="circle-core"></view>
    </view>
  </view>
</template>

<script>
export default {
  name: "loading22",
  data() {
    return {};
  }
};
</script>

<style scoped="true">
@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(359deg);
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

.circle-border {
  width: 150upx;
  height: 150upx;
  padding: 3upx;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgb(63, 249, 220);
  background: linear-gradient(
    0deg,
    rgba(63, 249, 220, 0.1) 33%,
    rgba(63, 249, 220, 1) 100%
  );
  animation: spin 0.8s linear 0s infinite;
}

.circle-core {
  width: 100%;
  height: 100%;
  background-color: #040038;
  border-radius: 50%;
}
</style>
