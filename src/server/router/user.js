/*
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-01-13 09:32:58
 * @LastEditors  : Andy
 * @LastEditTime : 2020-01-23 11:35:54
 */
import express from 'express'
// import usrSchema from '../dao/schema/usr'
var router = express.Router()

router.post('/register', function (req, res) {
  var data = req.body
  console.log(data)
  if (data.username === 'libaoquan' && data.password === '123456') {
    res.send({success: true})
  } else {
    res.send({error: true})
  }
})

module.exports = router
