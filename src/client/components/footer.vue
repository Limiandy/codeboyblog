<template>
  <div>
    <footer class="navbar navbar-expand-sm bg-light navbar-light fixed-bottom">
      <div class="container ">
        <span class="mkblog-footer-text mx-auto">
          <a href="#" title="萌楷">萌楷</a>
          版权所有丨采用
          <a href="#">Bootstrap</a>
          丨构建 © 2019丨托管于
          <a rel="nofollow" target="_blank" href="https://cloud.tencent.com/">腾讯云主机</a>
          &amp;
          <a rel="nofollow" target="_blank" href="https://www.qiniu.com/">七牛云存储</a>
          丨京ICP备18015597号-1
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.mkblog-footer-text {
  color: #bebebe;
  font-size: 12px;
  a {
    color: #bebebe;
    text-decoration: none;
  }
}
</style>
