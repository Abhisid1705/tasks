const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DeliveryVehicleSchema=new Schema({
    registrationNumber:{
        type:String,
        required:true,
        unique:true
    },
    vehicleType:{
        type:String,
        enum:['bike','truck'],
        required:true
    },
    city:{
        type:String,
        required:true
    },
    activeOrderCount:{
        $range:[0,2],
        required:false
    }
});
module.exports = mongoose.model('DeliveryVehicle', DeliveryVehicleSchema);