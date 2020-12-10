<!--
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-01-29 08:29:25
 * @LastEditors  : Andy
 * @LastEditTime : 2020-01-29 11:02:56
 -->
<template>
  <div class="wrapper">
    <!--
      Tip 1: You can change the background color of the main header using: data-background-color="blue | purple | light-blue | green | orange | red"
    -->
    <div class="main-header" data-background-color="purple">
      <!-- Logo Header -->
      <div class="logo-header">
        <a href="#" class="logo">
          <img
            src="../../assets/logoazzara.svg"
            alt="navbar brand"
            class="navbar-brand"
          />
        </a>
        <button
          class="navbar-toggler sidenav-toggler m1-auto"
          type="button"
          data-toggle="collapse"
          data-target="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">
            <font-awesome-icon :icon="['fas', 'bars']" />
          </span>
        </button>
        <button class="topbar-toggler more"><font-awesome-icon :icon="['fas', 'ellipsis-v']"/></button>
        <div class="navbar-minimize">
          <button class="btn btn-minimize btn-rounded">
            <font-awesome-icon :icon="['fas', 'bars']" />
          </button>
        </div>
      </div>
      <!-- End Logo Header -->
    </div>
    <!-- End Main Header-->
  </div>
</template>
<script>
export default {
  name: 'admin',
  beforeCreate: function () {
    document
      .getElementsByTagName('body')[0]
      .setAttribute('style', 'padding: 0')
  },
  beforeDestroy: function () {
    document.body.removeAttribute('style', 'padding: 0')
  }
}
</script>
<style lang="scss" scoped></style>
