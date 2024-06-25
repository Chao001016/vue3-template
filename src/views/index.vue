<script setup lang="ts"></script>

<template>
  <div class="container">
    <h3 class="title">Vue3初始化模板</h3>
    <p>初始化功能</p>
    <ol>
      <li>vue-router</li>
      <li>pinia</li>
      <li>axios</li>
      <li>sass</li>
    </ol>
    <p>目录解构</p>
    <ol>
      <li><span>assets:</span>存放CSS和图片等资源</li>
      <li><span>axios:</span>存放axios实例</li>
      <li><span>components:</span>各种组件</li>
      <li><span>plugins:</span>插件，如全局组件等</li>
      <li><span>router:</span>路由</li>
      <li><span>stores:</span>全局变量</li>
      <li><span>utils:</span>工具类</li>
      <li><span>views:</span>页面</li>
    </ol>
  </div>
</template>
<style scoped lang="scss">
.container {
  width: 800px;
  height: 900px;
  margin: 0 auto;
  .title {
    text-align: center;
  }
  ol {
    margin-left: 30px;
  }
}
</style>
