/*
 * @Descripttion: 定义用户集合数据格式
 * @version:1.0
 * @Author: Andy
 * @Date: 2020-01-12 13:29:03
 * @LastEditors  : Andy
 * @LastEditTime : 2020-01-13 09:31:46
 */
var Schema = require('mongoose').Schema

var usrSchema = new Schema({
  username: String, // 用户名
  password: String, // 密码
  nickname: String, // 用户昵称
  email: String, // 用户邮箱地址
  photo: String, // 用户头像路径
  registerDate: {type: Date, default: Date.now}, // 用户注册时间
  mobile: Number // 用户手机号码
})

module.exports = usrSchema
