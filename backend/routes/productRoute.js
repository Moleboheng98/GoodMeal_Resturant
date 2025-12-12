import express from 'express'
import {addProduct,listProducts,removeProducts,singleProducts} from '../controllers/productControllers.js'
import upload from '../middleware/multer.js'
import adminAuth from '../middleware/adminAuth.js'

const productRouter = express.Router()

productRouter.post('/add',upload.single("image"),adminAuth,addProduct)
productRouter.get('/list',listProducts)
productRouter.post('/remove',adminAuth,removeProducts)
productRouter.get('/single',singleProducts)

export default productRouter