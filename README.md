# uni-loading
uniapp loading加载动画

封装集合多款纯css loading加载动画

# 使用注意事项
uni-app插件中心只上传了w-loading组件，其他30+加载组件在完整包中,选择下载完整包，或进入github下载完整包，地址：https://github.com/wkiwi/uni-loading

# 更新历史

2019/7/23   10:47  更新防止遮罩滚动事件穿透
@touchmove.stop.prevent="preventTouchMove"

# 使用方法

```
//全局注入w-loading组件
import wLoading from "@/components/w-loading.vue";
Vue.component('w-loading',wLoading)
```

```
<w-loading text="加载中.." mask="true" click="true" ref="loading"></w-loading>
text:     加载提示文字
mask:  	  true 无遮罩层                |     false 有遮罩层 						 
click:  	true 点击空白无法关闭加载状态   |     false 点击空白可关闭加载状态 


//初次进入页面触发加载，请将打开加载动画钩子，放入页面
onReady中，放入onLoad中会报错
原因为this.$refs.loading需要找到dom节点，在onLoad时
dom不能保证渲染完毕，在onReady中可在dom渲染完毕才会触发

//打开加载动画
this.$refs.loading.open()

//关闭加载动画
this.$refs.loading.close()

```
# 使用文档  

目前有30款加载动画，如想将其中之一作为自己的加载动画，将loading(N)中的html拷贝至
w-loading组件中
<!-- 加载动画开始 -->
 这里放置拷贝的html
<!-- 加载动画结束 -->

将loading(N)中的CSS拷贝至
w-loading组件中css注视下方
/* loading加载动画的css */


![demo](https://raw.githubusercontent.com/wkiwi/uni-loading/master/demo.gif "demo")


