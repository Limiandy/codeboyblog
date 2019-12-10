<template>
  <div class="archive">
    <div class="container bg-white overflow-hidden">
      <div class="archive-category">
        <div class="archive-category-title"><h3>共计14个分类</h3></div>
        <ul class="archive-category-items">
          <li class="archive-category-item"><a href="www.baidu.com">webpack4系列教程「10」</a></li>
          <li class="archive-category-item"><a href="www.baidu.com">JavaScript「6」</a></li>
          <li class="archive-category-item"><a href="www.baidu.com">ES6「4」</a></li>
          <li class="archive-category-item"><a href="www.baidu.com">mysql「5」</a></li>
          <li class="archive-category-item"><a href="www.baidu.com">CSS「2」</a></li>
          <li class="archive-category-item"><a href="www.baidu.com">Git实战手册「2」</a></li>
          <li class="archive-category-item"><a href="www.baidu.com">node「2」</a></li>
          <li class="archive-category-item"><a href="www.baidu.com">Linux「1」</a></li>
          <li class="archive-category-item"><a href="www.baidu.com">测试「1」</a></li>
          <li class="archive-category-item"><a href="www.baidu.com">js库「1」</a></li>
          <li class="archive-category-item"><a href="www.baidu.com">网站搭建与运营「1」</a></li>
          <li class="archive-category-item"><a href="www.baidu.com">商务合作「1」</a></li>
          <li class="archive-category-item"><a href="www.baidu.com">资源「1」</a></li>
          <li class="archive-category-item w1"><a href="www.baidu.com">Scss「1」</a></li>
        </ul>
      </div>
      <div class="archive-lable">
        <div class="archive-lable-title"><h3>共计16个标签</h3></div>
        <ul class="archive-lable-items">
          <li class="archive-lable-item"><a href="">webpack「10」</a></li>
          <li class="archive-lable-item"><a href="">服务器「4」</a></li>
          <li class="archive-lable-item"><a href="">算法「4」</a></li>
          <li class="archive-lable-item"><a href="">canvas「3」</a></li>
          <li class="archive-lable-item"><a href="">HTML5「3」</a></li>
          <li class="archive-lable-item"><a href="">数据库「3」</a></li>
          <li class="archive-lable-item"><a href="">图像处理「3」</a></li>
          <li class="archive-lable-item"><a href="">SSL「2」</a></li>
          <li class="archive-lable-item"><a href="">Git「2」</a></li>
          <li class="archive-lable-item"><a href="">字符编码「1」</a></li>
          <li class="archive-lable-item"><a href="">设计模式「1」</a></li>
          <li class="archive-lable-item"><a href="">第三方库「1」</a></li>
          <li class="archive-lable-item"><a href="">GitHub「1」</a></li>
          <li class="archive-lable-item"><a href="">websocket「1」</a></li>
          <li class="archive-lable-item"><a href="">测试「1」</a></li>
          <li class="archive-lable-item"><a href="">面试「1」</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'archive'
}
</script>

<style lang="scss" scoped>
.archive {
  li {
    list-style: none;
  }
  .archive-category,
  .archive-lable {
    width: 80%;
    margin: 50px auto 0 auto;
    text-align: center;
    .archive-category-title,
    .archive-lable-title {
      font-family: KaiTi;
      color: #6c6c6c;
    }
    .archive-category-items,
    .archive-lable-items {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-content: center;
      .archive-category-item,
      .archive-lable-item {
        padding: 15px;
        a:link {
          color: #6c6c6c;
          text-decoration: none;
        }
        a:visited {
          color: red;
          border-bottom: 2px solid red;
          padding-bottom: 4px;
        }
        a:hover {
          color: red;
          border-bottom: 2px solid red;
          padding-bottom: 4px;
        }
        a:active {
          color: red;
          border-bottom: 2px solid red;
          padding-bottom: 4px;
        }
      }
    }
  }
}
</style>
