<template>
  <div class="top-head">
    <div class="blog-home-logo">
      <a href="#"><span>CodeBOY</span></a>
      <span class="text-color-dark">CODE IS POETRY</span>
    </div>
    <!-- home-logo -->
    <div class="blog-home-links">
      <router-link to="/">主页</router-link>
      <router-link to="/archive">归档</router-link>
      <router-link to="/friends">友链</router-link>
      <router-link to="/about">关于</router-link>
      <a target="_blank" v-bind:href="this.$store.state.githublink"><span>GitHub</span></a>
    </div>
    <!-- home-links -->
  </div>
</template>

<script>
export default {
  name: 'top-head'
}
</script>

<style lang="scss" scoped>
.top-head {
  height: 150px;
  .blog-home-logo {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    a {
      display: block;
      width: 100px;
      height: 35px;
      background: #ff5151;
      color: #fff;
      text-decoration: none;
      text-align: center;
      line-height: 35px;
      font-family: simsun;
      font-weight: bold;
      font-size: 18px;
      border-radius: 2px;
    }
    .text-color-dark {
      color: #e0e0e0;
      margin-top: 5px;
    }
  }
  .blog-home-links {
    padding-top: 10px;
    display: flex;
    justify-content: center;
    a {
      padding-right: 24px;
      color: #ff5151;
      text-decoration: none;
    }
  }
}
</style>
