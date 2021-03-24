const Item=require('../models/items');

exports.postCreateItem=(req,res,next)=>{
   const name=req.body.name;
   const price=req.body.price;
   const item =new Item({
       name:name,
       price:price
   })
   item.save()
   .then(result=>res.status(200).send("item created"))
   .catch(err=>{
    const error=new Error(err);
    error.httpstatuscode=500;
    return next(error);
   })
}
exports.getItemDetails=(req,res,next)=>{
    const itemId=req.params.itemId;
    Item.findById(itemId)
    .then(item=>{
        return res.status(200).json({item:item})
    })
    .catch(err=>{
        const error=new Error(err);
       error.httpstatuscode=500;
       return next(error);
    })
}
exports.updateItem=(req,res,next)=>{
    const updatedName=req.body.name;
    const updatedPrice=req.body.price;
    Item.findById.then(item=>{
        if(!item){
            res.status(500).send("error occured");
        }
        else{
            item.name=updatedName;
            item.price=updatedPrice;
        }
        return item.save().then(res=>{
            console.log("updated product");
            res.status(200).send("Item Updated");
        })
    })
}