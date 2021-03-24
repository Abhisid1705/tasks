const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema=new Schema({
    orderNumber:{
        type:Number,
        
        required:true
    },
    itemId: {
       type: Schema.Types.ObjectId,
       ref: 'Item',
       required: true,
    } ,
    price:{
        type:Number,
        required:true
    },
    customerId:{
       type: Schema.Types.ObjectId,
       ref: 'Customer',
       required: true,
    },
    deliveryVehicleId:{
        type:Schema.Types.ObjectId,
        ref:'DeliveryVehicle',
        required:true
    },
    isDelivered:{
        type:Boolean,
        required:true
    }

});
module.exports = mongoose.model('Order', OrderSchema);