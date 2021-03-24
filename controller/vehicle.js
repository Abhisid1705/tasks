const Vehicle=require('../models/vehicles');

const {validationResult}=require('express-validator');

exports.createVehicle=(req,res,next)=>{
   const regNumber= req.body.regNumber;
   const error=validationResult(req);
   if(!error.isEmpty()){
       return next(error);
   }
   const vehicleType=req.body.vehicleType;
   const currentCity=req.body.city;
   const ordercount=0;
   Vehicle.findOne({registrationNumber:regNumber}).then(veh=>{
       if(veh){
           return res.send('vehicle registered with us');
       }
       const vehicle=new Vehicle({
        registrationNumber:regNumber,
        vehicleType:vehicleType,
        city:currentCity,
        activeOrderCount:ordercount
       });
       vehicle.save().then(res=>{
        res.status(200).send('vehicle registered');
    })
   })
   
   
}
exports.fetchDetails=(req,res,next)=>{
    let regNum=req.body.regNumber;
    Vehicle.findOne({registrationNumber:regNum}).then(veh=>{
        if(!veh){
            res.status(500).send('No vehicle with this reg number');
        }
        res.status(200).json({vehicle:veh});
    })
}
exports.updateDetails=(req,res,next)=>{
   const regNumber=req.body.regNum;
   re
   Vehicle.findOne({registrationNumber:regNumber}).then(vehicle=>{
       if(!vehicle){
           return res.send("Please Enter Valid registration number");
       }
        const updatedRegNumber= req.body.regNumber;
        const updatedVehicleType=req.body.vehicleType;
        const updatedcurrentCity=req.body.city;
        vehicle.registrationNumber=updatedRegNumber;
        vehicle.city=updatedcurrentCity;
        vehicle.vehicleType=updatedVehicleType;
        return vehicle.save();
   }).then(result=>{
       res.status(200).send("vehicle updated");
   }).catch(err=>{
       return res.status(500).send("Some error occured");
   })
}