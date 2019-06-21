<template>
	 <view class="container loading4">
		<view class="shape shape1"></view>
		<view class="shape shape2"></view>
		<view class="shape shape3"></view>
		<view class="shape shape4"></view>
	</view>
</template>

<script>
	export default {
		name: 'loading4',
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped="true">
.container {
  width: 30px;
  height: 30px;
  position: relative;
}
.container.loading4 {
  -webkit-transform: rotate(10deg);
          transform: rotate(10deg);
}
.container.loading4 .shape {
  border-radius: 5px;
}
.container.loading4 {
  -webkit-animation: rotation 1s infinite;
          animation: rotation 1s infinite;
}

.container.loading4 {
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

.container .shape {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 1px;
}
.container .shape.shape1 {
  left: 0;
  background-color: #5C6BC0;
}
.container .shape.shape2 {
  right: 0;
  background-color: #8BC34A;
}
.container .shape.shape3 {
  bottom: 0;
  background-color: #FFB74D;
}
.container .shape.shape4 {
  bottom: 0;
  right: 0;
  background-color: #F44336;
}

@-webkit-keyframes animation4shape1 {
  from {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  to {
    -webkit-transform: translate(5px, 5px);
            transform: translate(5px, 5px);
  }
}

@keyframes animation4shape1 {
  from {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  to {
    -webkit-transform: translate(5px, 5px);
            transform: translate(5px, 5px);
  }
}
.loading4 .shape2 {
  -webkit-animation: animation4shape2 0.3s ease 0.3s infinite alternate;
          animation: animation4shape2 0.3s ease 0.3s infinite alternate;
}

@-webkit-keyframes animation4shape2 {
  from {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  to {
    -webkit-transform: translate(-5px, 5px);
            transform: translate(-5px, 5px);
  }
}

@keyframes animation4shape2 {
  from {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  to {
    -webkit-transform: translate(-5px, 5px);
            transform: translate(-5px, 5px);
  }
}
.loading4 .shape3 {
  -webkit-animation: animation4shape3 0.3s ease 0.3s infinite alternate;
          animation: animation4shape3 0.3s ease 0.3s infinite alternate;
}

@-webkit-keyframes animation4shape3 {
  from {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  to {
    -webkit-transform: translate(5px, -5px);
            transform: translate(5px, -5px);
  }
}

@keyframes animation4shape3 {
  from {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  to {
    -webkit-transform: translate(5px, -5px);
            transform: translate(5px, -5px);
  }
}
.loading4 .shape4 {
  -webkit-animation: animation4shape4 0.3s ease 0s infinite alternate;
          animation: animation4shape4 0.3s ease 0s infinite alternate;
}

@-webkit-keyframes animation4shape4 {
  from {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  to {
    -webkit-transform: translate(-5px, -5px);
            transform: translate(-5px, -5px);
  }
}

@keyframes animation4shape4 {
  from {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  to {
    -webkit-transform: translate(-5px, -5px);
            transform: translate(-5px, -5px);
  }
}
</style>
