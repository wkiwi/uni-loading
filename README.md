# uni-loading
uniapp loading加载动画

封装集合多款纯css loading加载动画

# 使用方法

```
//全局注入w-loading组件
import wLoading from "@/components/w-loading.vue";
Vue.component('w-loading',wLoading)
```

```
<w-loading text="加载中.." mask="1" click="1" ref="loading"></w-loading>
text:     加载提示文字
mask:  	  0 无遮罩层                |     1 有遮罩层 						 
click:  	0 点击空白无法关闭加载状态   |     1 点击空白可关闭加载状态 


//打开加载动画
this.$refs.loading.open()

//关闭加载动画
this.$refs.loading.close()

```

![demo](https://raw.githubusercontent.com/wkiwi/uni-loading/master/demo.gif "demo")


