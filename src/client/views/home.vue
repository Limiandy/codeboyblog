<template>
  <div class="home">
    <div class="container bg-white overflow-hidden">
      <div class="post-summary-box">
        <div class="post-summary-title">
          <h4>Git实战手册（二）：标签应用和版本管理</h4>
          <p>2019-10-11</p>
        </div>
        <!-- post-summary-title -->
        <div class="post-summary-text">
          <blockquote>
            当一个代码仓库经过长时间的迭代，针对不同的时期和需求，必定会有不同的版本。而借助Git提供的标签和功能，可以快捷方便地记录代码版本。无论说明时候
            ，想取回某个版本，不在需要查找冗长的commit_id,只需要取出打标签的历史版本即可。
          </blockquote>
          <p>可以这么理解：标签是版本库的一个快照。在主流的Git平台上，版本可以直接下载的，节省了开发者的不少精力。</p>
          <p>本文记录了如何借助“标签”进行版本管理。</p>
        </div>
        <!-- post-summary-text -->
        <div class="summary-links">
          <a href="#">
            <i class="fa fa-bookmark"></i>
            <span>分类：Git实战手册</span>
          </a>
          <a href="#">
            <i class="fa fa-tags"></i>
            <span>标签：#Git</span>
          </a>
          <a href="#">
            <i class="fa fa-eye"></i>
            <span>浏览：6</span>
          </a>
        </div>
      </div>
      <!-- post-summary-box -->

      <div class="post-summary-box">
        <div class="post-summary-title">
          <h4>Git实战手册（二）：标签应用和版本管理</h4>
          <p>2019-10-11</p>
        </div>
        <!-- post-summary-title -->
        <div class="post-summary-text">
          <blockquote>
            当一个代码仓库经过长时间的迭代，针对不同的时期和需求，必定会有不同的版本。而借助Git提供的标签和功能，可以快捷方便地记录代码版本。无论说明时候
            ，想取回某个版本，不在需要查找冗长的commit_id,只需要取出打标签的历史版本即可。
          </blockquote>
          <p>可以这么理解：标签是版本库的一个快照。在主流的Git平台上，版本可以直接下载的，节省了开发者的不少精力。</p>
          <p>本文记录了如何借助“标签”进行版本管理。</p>
        </div>
        <!-- post-summary-text -->
        <div class="summary-links">
          <a href="#">
            <i class="fa fa-bookmark"></i>
            <span>分类：Git实战手册</span>
          </a>
          <a href="#">
            <i class="fa fa-tags"></i>
            <span>标签：#Git</span>
          </a>
          <a href="#">
            <i class="fa fa-eye"></i>
            <span>浏览：6</span>
          </a>
        </div>
      </div>
      <!-- post-summary-box -->

      <div class="post-summary-box">
        <div class="post-summary-title">
          <h4>Git实战手册（二）：标签应用和版本管理</h4>
          <p>2019-10-11</p>
        </div>
        <!-- post-summary-title -->
        <div class="post-summary-text">
          <blockquote>
            当一个代码仓库经过长时间的迭代，针对不同的时期和需求，必定会有不同的版本。而借助Git提供的标签和功能，可以快捷方便地记录代码版本。无论说明时候
            ，想取回某个版本，不在需要查找冗长的commit_id,只需要取出打标签的历史版本即可。
          </blockquote>
          <p>可以这么理解：标签是版本库的一个快照。在主流的Git平台上，版本可以直接下载的，节省了开发者的不少精力。</p>
          <p>本文记录了如何借助“标签”进行版本管理。</p>
        </div>
        <!-- post-summary-text -->
        <div class="summary-links">
          <a href="#">
            <i class="fa fa-bookmark"></i>
            <span>分类：Git实战手册</span>
          </a>
          <a href="#">
            <i class="fa fa-tags"></i>
            <span>标签：#Git</span>
          </a>
          <a href="#">
            <i class="fa fa-eye"></i>
            <span>浏览：6</span>
          </a>
        </div>
      </div>
      <!-- post-summary-box -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
.post-summary-box {
  width: 70%;
  margin: 60px auto 10px auto;
  display: flex;
  flex-wrap: wrap;
}

.post-summary-title {
  width: 100%;
  text-align: center;
}

.post-summary-title > p {
  font-family: STFangsong;
  font-size: 14px;
}

.post-summary-text blockquote {
  border-left: 3px solid red;
  padding-left: 7px;
  margin: 20px 0 30px 20px;
  text-align: justify;
  line-height: 2;
  font-size: 14px;
  color: #6c6c6c;
}

.post-summary-text > p {
  font-size: 15px;
  color: #5b5b5b;
}

.summary-links {
  overflow: hidden;
  margin-top: 25px;
  width: 100%;
}

.summary-links > a {
  display: block;
  float: left;
  color: #8e8e8e;
  font-size: 13px;
}

.summary-links > a:nth-child(2) {
  margin-left: 25px;
}

.summary-links > a:last-child {
  float: right;
}

.summary-links a i {
  padding-right: 2px;
}
</style>
