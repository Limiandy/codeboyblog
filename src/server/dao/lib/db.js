/*
 * @Descripttion: 配置 Mongodb 连接 使用回调函数调用，返回Model类和mongoClient连接
 * @version: 1.0
 * @Author: Andy
 * @Date: 2020-01-05 11:07:21
 * @LastEditors  : Andy
 * @LastEditTime : 2020-01-12 13:28:11
 */
var mongoose = require('mongoose')
var conf = require('./conf')
var options = conf.options

/**
 * @name:
 * @msg: 创建数据库连接池，并返回一个model和mongoClient，使用这个model实例化数据对象
 * @param {String} String
 * @param {Schema} Schema
 * @callback(Model, mongoClient)
 */
module.exports = function (name, schema, callback) {
  /**
   * 创建 Mongo 连接池
   */
  let mongoClient = mongoose.createConnection(getMongoUrl(), options)

  // 连接失败回调
  mongoClient.on('error', console.error.bind(console, 'connection error:'))

  // 连接成功回调
  mongoClient.on('connected', function () {
    console.log('Mongoose connected to ' + getMongoUrl())
  })

  // 关闭连接回调
  mongoClient.on('disconnected', function () {
    console.log('Mongoose disconnected')
  })

  var Model = mongoClient.model(name, schema)

  callback(Model, mongoClient)
}

/**
 * @name: getMongoUrl
 * @msg: 用于拼接数据库连接的URL地址
 * @return: mongoUrl
 */
function getMongoUrl () {
  var mongoUrl = 'mongodb://'
  var username = conf.username
  var password = conf.password
  var replicaSet = conf.replicaSet
  var dbName = conf.db

  mongoUrl += `${username}:${password}@`
  // 如果配置了 replica Set 的名字则使用 seplica Set
  if (replicaSet.name) {
    var members = replicaSet.members
    for (var member of members) {
      mongoUrl += `${member.host}:${member.port},`
    }
    mongoUrl = mongoUrl.slice(0, -1) // 去掉末尾逗号
  } else {
    mongoUrl += `${conf.host}:${conf.port}`
  }
  mongoUrl += `/${dbName}`

  return mongoUrl
}
