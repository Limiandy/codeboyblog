/* eslint-disable no-unused-vars */
<!--
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-01-13 11:16:44
 * @LastEditors  : Andy
 * @LastEditTime : 2020-01-19 09:24:27
 -->
<template>
  <div class="login">
    <div class="container bg-primary">
      <h1>欢迎登录本博客</h1>
      <div class="w3layouts row">
        <!-- Sign in -->
        <div class="signin-agile col-xl-7">
          <h2>登录</h2>
          <label class="bar-w3-agile"></label>
          <vue-form :state="login">
            <validate auto-label class="form-group required-field">
            <p>用户名：</p>
            <input
              class="input-text form-control"
              type="text"
              name="username"
              placeholder=""
              required
              v-model.lazy="model.username"
              :class="fieldClassName(login.username)"
              autocomplete="off"
              ref="username"
            />
            <field-messages name="username" :show="$touched || $submitted" :class="filedmsgClassName">
              <div>Success</div>
              <div slot="required">Name is a required field</div>
            </field-messages>
            </validate>
            <p>密码</p>
            <input
              type="password"
              name="Password"
              class="password"
              placeholder=""
              required=""
              ref="password"
            />
            <ul>
              <li>
                <input type="checkbox" id="brand1" value="" />
                <label for="brand1"><span></span>记住账号</label>
              </li>
            </ul>
            <a href="#">忘记密码?</a><br />
            <div class="clear"></div>
            <input
              type="button"
              value="登 录"
              class="btn-submit"
              @click="doLogin()"
            />
          </vue-form>
        </div>
        <!-- //Sign in -->
        <!-- Sign up -->
        <div class="signup-agileinfo col-xl-5">
          <h3>注册</h3>
          <label class="bar-w3-agile"></label>
          <p>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...
          </p>
          <h6>
            By creating an account, you agree to our <a href="#">Terms.</a>
          </h6>
          <!-- Pop up -->
          <div class="more">
            <a
              class="book popup-with-zoom-anim button-isi zoomIn animated"
              data-wow-delay=".5s"
              data-toggle="modal"
              data-target="#small-dialog"
              href="#small-dialog"
              >注 册</a
            >
          </div>
          <!-- //Pop up -->
        </div>
        <!-- //Sign up -->
      </div>
      <!-- 注册弹出框 -->
      <div class="modal fade" id="small-dialog">
        <div class="modal-dialog">
          <button type="button" class="close" data-dismiss="modal">
            &times;
          </button>
          <div class="modal-content">
            <!-- Pop up -->
            <div class="book-form">
              <h3>Sign Up Form</h3>
              <form action="#" method="post">
                <p>Username</p>
                <input type="text" name="Name" placeholder="" required="" />
                <p>Email</p>
                <input
                  type="email"
                  name="Email"
                  class="email"
                  placeholder=""
                  required=""
                />
                <p>Password</p>
                <input
                  type="password"
                  name="Password"
                  class="password"
                  placeholder=""
                  required=""
                />
                <p>Confirm Password</p>
                <input
                  type="password"
                  name="Password"
                  class="password"
                  placeholder=""
                  required=""
                />
                <!-- <input type="submit" value="Sign Up" /> -->
                <button class="btn-submit">Sing Up</button>
              </form>
            </div>
            <!-- // Pop up -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data: function () {
    return {
      username: null,
      password: null,
      filedmsgClassName: '',
      login: {},
      model: {
        username: '',
        email: '',
        phone: '',
        department: null,
        comments: '',
        notValidated: '',
        agree: false
      }
    }
  },
  created: function () {},
  methods: {
    doLogin: function () {
      this.username = this.$refs.username.value
      this.password = this.$refs.password.value
      this.axios
        .post('/user/register', {
          username: this.username,
          password: this.password
        })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fieldClassName: function (field) {
      if (!field) {
        return ''
      }
      if ((field.$touched || field.$submitted) && field.$valid) {
        this.filedmsgClassName = 'valid-feedback'
        return 'is-valid'
      }
      if ((field.$touched || field.$submitted) && field.$invalid) {
        this.filedmsgClassName = 'invalid-feedback'
        return 'is-invalid'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../static/sign.scss";
.login {
  height: 100vh;
  .container {
    overflow: hidden;
    height: 100%;
    background: url("../assets/daima_chengxuyuan-013.jpg") no-repeat;
    background-size: cover;
  }
}
</style>
