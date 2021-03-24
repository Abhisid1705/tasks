const express =require('express');

const router=express.Router();

const orderController=require('../controller/order'); 

const isAuth=require('../middleware/isauth');

router.post('/createOrder',isAuth,orderController.createOrder);

router.get('/order-delivered',isAuth,orderController.OrderDelivered);

module.exports=router;