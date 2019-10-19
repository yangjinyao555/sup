//所有接口回调汇总
let caseshow = require('./caseshow')

let news = require('./news')

let recommend = require('./recommend')

let  massage=require('./massage')

let option=Object.assign({},massage,caseshow,news,recommend)

module.exports=option