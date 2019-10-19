//引入模块
let express=require('express')
let app=express()
let router=require("./router")
////需要安装 提交表单是formidable 用于提交文件，比较浪费
//则需要安装body-parser npm i body-parser --save
//引入模块body-parser 用于前端提交数据
let bodyParser=require('body-parser')
//解析参数的两种格式，相当于中间件，去解析前端发送的数据
//前端发送请求格式为application/json
let jsonParser=bodyParser.json();

//前端发送请求格式为application/x-www-form-urlencoded
let urlenParser=bodyParser.urlencoded({extended:false});
app.use(jsonParser)
app.use(urlenParser)

app.use(express.static(__dirname+'/static'))

app.post('/massage',router.massage)
app.listen(3006)