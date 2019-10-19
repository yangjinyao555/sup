//操作数据库数据库的一切操作
//引入数据库连接池
let query =require('../mysql.js')
module.exports={
    massage:async function(data){
        let sql='insert into connect(name,email,tel,address,massage) values(?)'
        let result = await query(sql,[data]).catch(function(res){
            console.log(res)
        })
        if(result){
            return true;
        }else{
            return false;
        }
       
    },
    caseshow: async function() {
        let sql = 'select * from case_img'
        let result = await query(sql,null)
        if(result){
            return true;
        }else{
            return false;
        }
    },
}