<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>当你看到这个页面的时候，代表了你已经成功的搭建好了一个Express + Vue 的单页面（SPA）应用模板</h2>
    <p>这个模板是站在巨人的肩膀上完成的，请感谢所有为这件事付出的人们。</p>
    <p>这个模板可能还有很多不足之处，请在Github给我留言。</p>
    <p>本模板采用ES6语法检测，请严格遵守ES6标准</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Express + Vue SPA Application'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
