const express = require ('express');
const route  = express(); 
const {body} = require('express-validator')

const insertController = require ('../Controllers/insert')

const driver = require('../Models/driver');


route.use(express.json());

//insert a new car
route.post("/insertCar", insertController.addCar);

//insert a new driver
route.post("/insertDriver",
[
    body("full_name").isLength({min : 5}),
    body("email").isEmail(),
    body("password").isStrongPassword(),
    body("phone").isMobilePhone('ar-SY')
] ,
insertController.addDriver);

//insert a new customer
route.post("/insertCustomer",
[
    body("full_name").isLength({min : 5}),
    body("email").isEmail(),
    body("phone").isMobilePhone('ar-SY')
] ,
 insertController.addCustomer);


// insert order
route.post("/insertOrder",insertController.addOrder);



module.exports = route ;