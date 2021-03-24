const Item=require('../models/items');
const Order=require('../models/Order');
const Vehicle=require('../models/vehicles');
const Customer=require('../models/customers');
exports.createOrder=(req,res,next)=>{
    let customerCity=req.body.city;
    let customerId=req.body.customerId;
    let customerName=req.body.name;
    let itemId=req.body.itemId;

Vehicle.findOne({activeOrderCount:{$lt:2}},{city:customerCity},{ vehicleType:'truck'}).then(vehicle=>{
    if(!vehicle){
        return res.status(200).send("Vehicle unavailable for this location");
    }
    vehicle.activeOrderCount+=vehicle.activeOrderCount;
    return vehicle;
}).then(vehicle=>{
    Customer.findById(customerId).then(customer=>{
        if(!customer){
            customer=new Customer({
                name:customerName,
                city:customerCity
            })
        }
        return customer;
    }).then(customer=>{
        Item.findById(itemId).then(item=>{
            order= new Order({
                $inc:{orderNumber:1},
                itemId:item,
                price:item.price,
                customerId:customer,
                deliveryVehicleId:vehicle,
                isDelivered:false
            })
            return order.save();
        })
    }).then(result=>{
         return res.send("Order created succesfully");
    }).catch(err=>{
        const error=new Error(err);
        error.httpstatuscode=500;
        return next(error);
    })
}).catch(err=>{
    const error=new Error(err);
    error.httpstatuscode=500;
    return next(error);
})
};
exports.OrderDelivered=(req,res,next)=>{
    const orderId=req.body.orderId;
    Order.findById(orderId).then(order=>{
       order.isDelivered=true;
       order.populate('deliveryVehicleId').execPopulate(vehicle=>{
           vehicle.activeOrderCount=vehicle.activeOrderCount-1;
           return vehicle;
       }).then(vehicle=>{
           return vehicle.save();
       }).then(order=>{
           return order.save()
       }).then(res=>{
           res.status(200).send("confirmed");
       })
    }).catch(err=>{
        const error=new Error(err);
        error.httpstatuscode=500;
        return next(error);
    })
}