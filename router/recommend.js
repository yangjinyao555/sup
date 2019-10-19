let query=require('../controller/mysql')

module.exports = {
    getRecommend(req,res) {

        connect.query('select * from recommend',function(err,data){
            if(!err) {
                res.json({
                    status: 200,
                    data: data
                })
            }else {
                res.json({
                    status: 500,
                    data: [] 
                })
            }
        })

    },
}