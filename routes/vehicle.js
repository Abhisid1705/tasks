const express=require('express');

const {body}=require('express-validator');

const vehicleController=require('../controller/vehicle');

const isAuth=require('../middleware/isauth');

const router=express.Router();

router.post('/createVehicle',isAuth,[body('regNumber').isAlphanumeric().withMessage('Not a valid registration number')],vehicleController.createVehicle);

router.post('/fetch-Vdetails',isAuth,vehicleController.fetchDetails);

router.post('/update-vehicle',isAuth,vehicleController.updateDetails);

module.exports=router;
