//引入模块
let express=require('express')
let app=express()
console.log(app)
app.use(express.static(__dirname+'/sup'))
app.listen(3006)