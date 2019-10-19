let query=require('../controller/mysql')

module.exports = {

    getNews(req,res) {

        connect.query('select * from news',function(err,data){
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