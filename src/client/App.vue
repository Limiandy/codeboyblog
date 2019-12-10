<template>
  <div id="app">
    <oHeader></oHeader>
    <tophead></tophead>
    <router-view></router-view>
    <oFooter></oFooter>
  </div>
</template>

<script>
import oHeader from '@/components/header'
import tophead from '@/components/top-head'
import oFooter from '@/components/footer'


export default {
  name: 'App',
  components: {oHeader, oFooter, tophead},
}
</script>

<style lang="scss">
  body {
    padding-top: 58px;
    padding-bottom: 34px;
    a:link,
    a:visited,
    a:hover,
    a:active {
      color: #6C6C6C;
      text-decoration: none;
    }
    pre {
      border-radius: 2px;
    }
  }
</style>
