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
  components: {oHeader, oFooter, tophead}
}
</script>

<style>
  body {
    padding-top: 58px;
    padding-bottom: 34px;
  }
</style>
