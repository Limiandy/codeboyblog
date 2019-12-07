<template>
  <div v-show="isdisplay">
    <nav class="navbar navbar-expand-md bg-light navbar-light justify-content-space-around fixed-top">
      <form class="form-inline">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search" />
          <div class="input-group-append">
            <button class="btn btn-secondary" type="submit"><font-awesome-icon :icon="['fas', 'search']" /></button>
          </div>
        </div>
      </form>
      <!-- Toggler/collapsibe Button -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"><span class="navbar-toggler-icon"></span></button>

      <!-- Navbar links -->
      <div class="collapse navbar-collapse  justify-content-flex-end" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item"><router-link to="/" class="nav-link">主页</router-link></li>
          <li class="nav-item"><router-link to="/archive" class="nav-link">归档</router-link></li>
          <li class="nav-item"><router-link to="/friends" class="nav-link">友链</router-link></li>
          <li class="nav-item"><router-link to="/about" class="nav-link">关于</router-link></li>
          <li class="nav-item"><a class="nav-link" v-bind:href="this.$store.state.githublink" target="_blank">Github</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      isdisplay: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 140) {
        this.isdisplay = true
      } else {
        this.isdisplay = false
      }
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
.justify-content-space-around {
  justify-content: space-around;
}

.justify-content-flex-end {
  justify-content: flex-end;
}

.small-icon {
  font-size: 12px;
  margin-right: 3px;
  color: #cccccc;
}
</style>
