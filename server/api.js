"use strict";
const models = require('./db');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/Check/createAccount',(req,res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    let newAccount = new models.Check({
        /* 使用数组的方式来实现多个项目或者单个项目的至 */
        // hospitalName : req.body.hospitalName,
        // checkData1 : req.body.checkData1,
        // checkData2 : req.body.checkData2,
        // checkPro1 :  req.body.checkPro1,
        // checkRes1 :  req.body.checkRes1,
        check : req.body.check,
        
    });
    // 保存数据newAccount数据进mongoDB
    newAccount.save((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send('createAccount successed');
        }
    });
});
// 获取已有账号接口
router.get('/api/Check/getAccount',(req,res) => {
    // 通过模型去查找数据库
    models.Check.find((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});


/*
========================================================================
*/

// 创建账号接口
router.post('/api/Pro/createAccount',(req,res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    let newAccount = new models.Pro({
        pro : req.body.pro,
    });
    // 保存数据newAccount数据进mongoDB
    newAccount.save((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send('createAccount successed');
        }
    });
});
// 获取已有账号接口
router.get('/api/Pro/getAccount',(req,res) => {
    // 通过模型去查找数据库
    models.Pro.find((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});


/*
========================================================================
*/
module.exports = router;