import jwt from 'jsonwebtoken'

const adminLogin = async (req,res) => {
   
try {
    const {email,password} = req.body
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
    const token = JsonWebTokenError.sign(email+password,process.env.JWT_SECRET)
    res.json({sucess:true,message:'Login success'})
    } else{
        res.json({sucess:false,message:'invalid credentials'})
    }
} catch (error){
console.log(error);
res.json({sucess:false,message:error.message})
}   
{}
}
export {adminLogin}