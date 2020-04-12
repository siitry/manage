const express = require("express");
const session = require("express-session");
const mysql = require("mysql");
const cors = require("cors");
const captcha = require('svg-captcha');

var pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    port:3306,
    connectionLimit:15,
    database:"khyadmin",
    connectionLimit: 5
 })
 var server = express();
 server.use(cors({
    origin:["http://www.kehyang.cn:8898"],
    credentials:true
}));

server.use(session({
    secret:"128位安全字符串",//加密条件
    resave:true,            //请求更新数据
    saveUninitialized:true  //保存初始化数据
 }))

server.use(express.static("public")); 

server.listen(8898);

//验证码
server.get('/loginExp',(req,res,next)=>{
    let options={
      size:4,
      ignoreChars: '0oO1lI',
      noise:1,
      color:true,
      background:'#fff',
      width: 100,
      height: 40,
      fontSize: 50,
    }
    let c= captcha.create(options)
    req.session.captcha = c.text.toLowerCase()
    req.session.save()
    res.type('svg')
    res.send(c.data)
  })

server.get("/login",(req,res)=>{
    let output ={};
    var captcha = req.query.captcha
    if(!captcha){  //客户端未提交验证码
        output.code = 409
        output.msg = 'captcha required'
        res.send(output)
        return
    }
    if(captcha.toLowerCase() !== req.session.captcha){	//客户端提交的验证码有误
        output.code = 410
        res.send(output);
        return
    }

    var n = req.query.uname;
    var p = req.query.upwd;
    var sql =" SELECT uid FROM admin_user WHERE uname = ? AND upwd = ?";
    pool.query(sql,[n,p],(err,result)=>{
       if(err)throw err;
       if(result.length==0){
         res.send({code:-1,msg:"用户名或密码有误"})
       }else{
         req.session.uid=result[0].uid;
         res.send({code:1,msg:"登录成功"});
       }
    })
})

//退出
server.get("/loginout",(req,res)=>{
    if(req.session.uid!==""){
      req.session.uid="";
      res.send({code:1,msg:"退出成功"});
    }
})

//用户信息
server.get("/userinfo",(req,res)=>{
  var sql = "SELECT * FROM user_info";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"查询成功",data:result})
  })
})