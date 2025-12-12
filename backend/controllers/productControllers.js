import productModel from "../models/productModels.js"
import {v2 as cloudinary} from 'cloudinary'

const addProduct = async (req,res,) =>{
    try {
        const {name, price, description, category} = req.body
        const image = req.file;
        let imageUrl = ""
        if (image) {
            let result = await cloudinary.uploader.upload(image.path,{resource_type:'image'})
            imageUrl = result.secure_url
        }else{
         imageUrl = "https://via.placeholder.com/150"
        }
    const productData = {
        name,description,category,price:Number(price),
        image:imageUrl,
        date:Date.now()
    }
    console.log(productData)

    const product = new productModel(productData)
    await product.save()

    res.json({success:true,message:"product added successfully"})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"cannot add product"})
        
    }

}
const listProducts = async (req,res,) =>{
    try {
        const products = await productModel.find({})
        res.json({success:true,products})
    } catch (error) {
        console.log(error);
         res.json({success:false,message:error.message})
        
    }

}
const  removeProducts = async (req,res,) =>{
    try {
        await productModel.findByIdAndDelete(RegExp.body._id)
        res.json({success:true,message:"product removed"})
    } catch (error) {
      console.log(error);
       res.json({success:false,message:error.message})   
    }

}
const singleProducts = async (req,res,) =>{
try {
    
} catch (error) {
    
}
}

export {addProduct,listProducts,removeProducts,singleProducts}