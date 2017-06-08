'use strict'
const db = require('../db')
const Check = require('./check');
const Pro   = require('./pro');
const express = require('express');
const router = express.Router();

router.post('/api/Check/createAccount',(req,res)=>{
    let newcheck=new Check({
        check : req.body.check,
    });
    newcheck.save((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send('createAccount successed');
        }
    });
});

router.get('/api/Check/getAccount',(req,res) => {
    // 通过模型去查找数据库
      Check.find((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});


router.post('/api/Pro/createAccount',(req,res)=>{
    let newpro=new Pro({
        pro : req.body.pro,
    });
    newpro.save((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send('createAccount successed',err);
        }
    });
});

router.get('/api/Pro/getAccount',(req,res) => {
    // 通过模型去查找数据库
      Pro.find((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

module.exports = router;