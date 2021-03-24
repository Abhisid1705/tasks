const express=require('express');

const itemcontroller=require('../controller/item');

const isAuth=require('../middleware/isauth');

const router=express.Router();

router.post('/createItem',isAuth,itemcontroller.postCreateItem);

router.post('/edit-product/:productId',isAuth,itemcontroller.updateItem);

router.get('/fetch-item/:itemId',isAuth,itemcontroller.getItemDetails);

module.exports=router;