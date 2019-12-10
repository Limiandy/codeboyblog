<template>
  <div class="friends">
    <div class="container bg-white overflow-hidden">
      <h1>小伙伴们</h1>
      <div class="table-responsive-md">
      <table class="table table-hover">
          <thead>
            <tr>
              <th>昵称</th>
              <th>介绍</th>
              <th>链接</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td><a href="#" target="_blank">july@example.com</a></td>
            </tr>
            <tr>
              <td>Mary</td>
              <td>Moe</td>
              <td><a href="#" target="_blank">july@example.com</a></td>
            </tr>
            <tr>
              <td>July</td>
              <td>Dooley</td>
              <td><a href="#" target="_blank">july@example.com</a></td>
            </tr>
          </tbody>
      </table>
      </div>
      <div class="friends-info">
        <h1>关于友情链接</h1>
        <hr>
        <h2>申请方式：</h2>
        <p>在本页下方评论区留言您的友链信息：</p>
        <pre class="language-text line-numbers">
          <code>
            # 在申请友链前，请确保本站已被添加到贵站友链
            链接：https://codeboy.com
            昵称：代码男孩
            介绍：一个在自学之路上挣扎的大男孩
          </code>
        </pre>
        <h2>注意事项：</h2>
        <ul>
          <li><b>先友后链，先友后链, 先友后链</b>：先友后链，先友后链, 先友后链：“友链”不是“导航”</li>
          <li><b>贵站至少几十篇原创文章</b>：分享精神值得认可</li>
          <li><b>申请前请先添加本站链接</b>：我寻求友链的时候也是这样做的</li>
          <li><b>时间很长，慢慢了解</b>：如果多次没有回复您的友链申请，还请在前面三点涉及的方面稍作改进</li>
        </ul>
      </div>
      <hr>
      <h1>评论系统待开发</h1>
    </div><!-- container -->
  </div>
</template>

<script>
import Prism from 'prismjs'
export default {
  name: 'friends',
  mounted () {
    Prism.highlightAll()
  }
}
</script>

<style lang="scss" scoped>
.container {
  h1 {
    text-align: center;
    height: 80px;
    line-height: 80px;
  }
  ul {
    padding-left: 20px;
  }
}

</style>
