module.exports = {
    configureWebpack:{
        devServer:{
            //mock接口编写的地方
            //修改本文件需重新启动项目
            before(app){
                // app.get('url',(req,res)=>{
                //     res.json({
                //         //返回的业务逻辑
                //     })
                // })

                //注册接口
                //用户信息池
                let userPoor=[
                    {userName:'mj',password:'123'},
                    {userName:'mj',password:'456'}
                ]
                app.get('api/register'(req,res)=>{
                    const {userName,password}=req.query
                    const userLength=userPoor.filter(v=>v.userName==userName).length
                    if(userLength>0){
                        res.json({
                            success:false,
                            message:'用户名已存在'
                        })
                    }else{
                        success:true,
                        message:'注册成功'
                    }
                })
            }
        }
    }
}