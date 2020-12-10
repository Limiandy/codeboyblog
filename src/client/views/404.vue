<!--
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-01-13 12:28:44
 * @LastEditors  : Andy
 * @LastEditTime : 2020-01-26 11:03:04
 -->
<!--
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-01-13 12:28:44
 * @LastEditors  : Andy
 * @LastEditTime : 2020-01-19 08:38:54
 -->
<template>
  <div class="container py-5">
    <vue-form :state="formstate" @submit.prevent="onSubmit">

    <validate tag="label">
      <span>Name *</span>
      <input v-model="model.name" required name="name" />

      <field-messages name="name">
        <div>Success!</div>
        <div slot="required">Name is a required field</div>
      </field-messages>
    </validate>

    <validate tag="label">
      <span>Email</span>
      <input v-model="model.email" name="email" type="email" required />

      <field-messages name="email">
        <div slot="required">Email is a required field</div>
        <div slot="email">Email is not valid</div>
      </field-messages>
    </validate>

    <button type="submit">Submit</button>
  </vue-form>
  <pre>{{ formstate }}</pre>
  </div>
</template>
<script>
export default {
  name: 'NotFound',
  data: function () {
    return {
      filedmsgClassName: '',
      formstate: {},
      model: {
        name: '',
        email: 'invalid-email'
      }
    }
  },
  methods: {
    onSubmit: function () {
      console.log(this.formstate.$invalid)
    },
    // 本地验证器，传入一个值，如果这个值返回真，则验证成功，如果返回假，则验证失败
    customValidator: function (value) {
      return value === 'custom'
    }
  }
}
</script>
<style lang="css" scoped>
.required-field > label::after {
  content: "*";
  color: red;
  margin-left: 0.25rem;
}
</style>
