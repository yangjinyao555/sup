let query=require('../controller/mysql')

module.exports = {
    async getCase(req,res) {

        connect.query('select * from case_img',function(err,data){
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


