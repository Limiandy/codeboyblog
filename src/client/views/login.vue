<!--
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-01-19 09:32:18
 * @LastEditors  : Andy
 * @LastEditTime : 2020-01-28 10:40:34
 -->
<template>
  <div class="login container">
    <h1>欢迎登录COB</h1>
    <div class="w3layouts row">
      <!--sign in-->
      <div class="signin-agile col-xl-7">
        <h2>登录</h2>
        <label class="bar-w3-agile"></label>
        <vue-form :state="signIn">
          <validate auto-label class="form-group required-field">
            <p>用户名：</p>
            <input
              type="text"
              class="form-control"
              name="signusername"
              required
              autocomplete="off"
              signinusername-strength
              v-model.lazy="model.signInUsername"
              :class="fieldClassName(signIn.signusername)"
            />
            <field-messages
              name="signusername"
              show="$touched"
              class="invalid-feedback"
            >
              <div slot="required">用户名不能为空</div>
              <div slot="signinusername-strength">用户名中不可以有空格</div>
            </field-messages>
          </validate>
          <validate auto-label class="form-group required-field">
            <p>密码：</p>
            <input
              type="password"
              class="form-control"
              name="password"
              required
              v-model.lazy="model.signInPassword"
              :class="fieldClassName(signIn.password)"
            />
            <field-messages
              auot-label
              name="password"
              show="$touched"
              class="invalid-feedback"
            >
              <div>Success</div>
              <div slot="required">密码不能为空</div>
            </field-messages>
          </validate>
          <ul>
            <li>
              <input type="checkbox" id="remember" />
              <label for="remember"><span></span>记住帐号</label>
            </li>
          </ul>
          <a href="#">忘记密码？</a><br />
          <div class="fieldMsg">{{ fieldMsg }}</div>
          <field>
          <input
            type="button"
            value="登 录"
            class="btn-submit"
            @click="doSignIn()"
          />
          </field>
        </vue-form>
      </div>
      <!--// sign in-->
      <!--sign up info-->
      <div class="signup-agileinfo col-xl-5">
        <h3>注册</h3>
        <label class="bar-w3-agile"></label>
        <p>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...
        </p>
        <h6>By creating an account, you agree to our <a href="#">Terms.</a></h6>
        <div class="more">
          <a class="button-isi" data-toggle="modal" data-target="#small-dialog"
            >注 册</a
          >
        </div>
      </div>
      <!--// sign up info-->
    </div>
    <!--w3layouts-->
    <!--sign up-->
    <!-- 模态框 -->
    <div class="modal fade" id="small-dialog">
      <div class="modal-dialog  modal-lg">
        <div class="modal-content">
          <!-- 模态框头部 -->
          <div class="modal-header">
            <h3>用户注册</h3>
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          <!-- 模态框主体 -->
          <div class="modal-body">
            <vue-form :state="signUp">
              <validate auto-label class="form-group required-field">
                <p>用户名：</p>
                <input
                  type="text"
                  name="username"
                  required
                  class="form-control"
                  autocomplete="off"
                  username-strength
                  v-model.lazy="model.singUpUsername"
                  :class="fieldClassName(signUp.username)"
                />
                <field-messages
                  name="username"
                  show="$touched || $submitted"
                  class="invalid-feedback"
                >
                  <div slot="required">用户名不能为空</div>
                  <div slot="username-strength">用户名仅支持6到15位中文、英文字符、_以及-</div>
                </field-messages>
              </validate>
              <validate auto-label class="form-group required-field">
                <p>电子邮箱</p>
                <input
                  type="email"
                  name="Email"
                  class="form-control"
                  autocomplete="off"
                  required
                  email-strength
                  v-model.lazy="model.email"
                  :class="fieldClassName(signUp.Email)"
                />
                <field-messages
                  name="Email"
                  show="$touched || $submitted"
                  class="invalid-feedback"
                >
                  <div slot="required">请输入正确格式的邮箱</div>
                  <div slot="email-strength">请输入正确格式的邮箱</div>
                </field-messages>
              </validate>
              <validate auto-label class="form-group required-field">
                <p>密码</p>
                <input
                  type="password"
                  password-strength
                  name="Password"
                  class="form-control"
                  required
                  v-model.lazy="model.signUpPassword"
                  :class="fieldClassName(signUp.Password)"
                />
                <field-messages
                  auto-label
                  name="Password"
                  show="$touched || $submitted"
                  class="invalid-feedback"
                >
                  <div slot="required">请填写密码</div>
                  <div slot="password-strength">
                    密码必须由大写字母、小写字母、数字组成、以字母开始不能包含特殊字符且最少8个字符
                  </div>
                </field-messages>
              </validate>
              <validate auto-label class="form-group">
                <p>重复密码</p>
                <input
                  type="password"
                  :matches="model.signUpPassword"
                  name="confirmPassword"
                  class="form-control"
                  required
                  v-model.lazy="model.confirmPassword"
                  :class="fieldClassName(signUp.confirmPassword)"
                />
                <field-messages
                  name="confirmPassword"
                  show="$touched || $submitted"
                  class="invalid-feedback"
                >
                  <div slot="required">
                    请重复输入密码以保证您切实记得设置的密码
                  </div>
                  <div slot="matches">两次输入的密码不一至</div>
                </field-messages>
              </validate>
              <input type="button" value="注册" class="btn-submit"/>
            </vue-form>
          </div>
        </div>
      </div>
    </div>
    <!--// sign up-->
  </div>
</template>
<script>
export default {
  name: 'login',
  data: function () {
    return {
      isAble: true,
      fieldMsg: null,
      signIn: {},
      signUp: {},
      model: {
        signInUsername: '',
        signInPassword: '',
        signUpUsername: '',
        signUpPassword: '',
        confirmPassword: '',
        email: ''
      }
    }
  },
  methods: {
    doSignIn: function () {
      var username = this.model.signInUsername
      var password = this.model.signInPassword
      if (!username || !password) {
        return
      }
      this.axios
        .post('/user/register', {
          username: username,
          password: password
        })
        .then(res => {
          if (res.data.error) {
            this.fieldMsg = '用户名或密码不正确'
            setTimeout(() => {
              this.fieldMsg = ''
            }, 3000)
          }
        })
        .catch(err => {
          if (err) {
            this.fieldMsg = '系统正在维护，晢停用户登录'
          }
        })
    },
    fieldClassName: function (field) {
      if (!field) {
        return ''
      }
      if ((field.$touched || field.$submitted) && field.$valid) {
        return 'is-valid'
      }
      if ((field.$touched || field.$submitted) && field.$invalid) {
        return 'is-invalid'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Lora", serif;
}
h1 {
  font-size: 40px;
  color: #fff;
  margin: 65px 0px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: capitalize;
}
.login {
  background: url("../assets/daima_chengxuyuan-013.jpg") no-repeat;
  background-size: cover;
  font-family: Verdana;
  overflow: hidden;
}
.w3layouts {
  width: 85%;
  margin: 35px auto;
  background: red;
}
.signin-agile {
  background: #fff;
  padding: 75px;
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
  p {
    font-size: 13px;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    color: #7d7d7d;
  }
  h2 {
    font-size: 25px;
    color: #000;
    text-align: center;
    letter-spacing: 2px;
  }
}
.signup-agileinfo {
  background: #fff;
  padding: 75px;
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
  background: url(../assets/small1.jpg) no-repeat;
  background-size: cover;
  h3 {
    font-size: 25px;
    color: #000;
    text-align: center;
    letter-spacing: 2px;
    color: #fff;
  }
  p {
    color: #fff;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
  }
  h6 {
    text-align: center;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0.5px;
    margin: 77px 0px 20px;
    color: #ebebeb;
    text-decoration: none;
    a {
      text-decoration: none;
      color: #ebebeb;
      &:hover {
        text-decoration: none;
        color: #fd9f3e;
      }
    }
  }
}
label.bar-w3-agile {
  width: 62px;
  height: 3px;
  background: #fd9f3e;
  display: block;
  margin: 12px auto 30px;
}
.more {
  text-align: center;
}
input[type="text"],
input[type="password"] {
  margin-bottom: 20px;
  // background: transparent;
  padding: 10px 15px;
  outline: none;
  font-size: 14px;
}
form {
  ul {
    float: left;
  }
  a {
    color: #7d7d7d;
    float: right;
    font-size: 14px;
  }
}
ul {
  li {
    list-style: none;
    display: inline-block;
    input[type="checkbox"] {
      display: none;
      &:checked + label {
        span {
          &:first-child {
            &:before {
              content: "";
              background: url(../assets/tick.png) no-repeat;
              position: absolute;
              left: 2px;
              top: 2px;
              font-size: 10px;
              width: 10px;
              height: 10px;
            }
          }
        }
      }
    }
    input[type="checkbox"] + label {
      position: relative;
      padding-left: 25px;
      border: #f0f8ff;
      color: #7d7d7d;
      display: inline-block;
      font-size: 14px;
      span {
        &:first-child {
          width: 13px;
          height: 13px;
          display: inline-block;
          border: 1px solid #7d7d7d;
          position: absolute;
          top: 1px;
          left: 4px;
          bottom: 4px;
          cursor: pointer;
        }
      }
    }
  }
}
.btn-submit {
  background: #fd9f3e;
  padding: 13px 0;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  outline: none;
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
  width: 100%;
  border: none;
  margin-top: 25px;
  &:hover {
    background: #003f87;
  }
}
a.button-isi {
  border: 1px solid #fff;
  padding: 11px 34px;
  color: #fff;
  display: inline-block;
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
  outline: none;
  width: 76%;
  text-align: center;
  font-size: 16px;
  &:hover {
    border: 1px solid #fd9f3e;
    color: #fff;
    background: #fd9f3e;
  }
}
.fieldMsg {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}
</style>
