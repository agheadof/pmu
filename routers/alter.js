const express = require ('express');
const route = express();

const alterController = require ('../Controllers/alter');
const sequelize = require ('../DBService/dbs');

route.use(express.json());
//insert points per customer
route.post("/updatePoints",alterController.updatePoints);




route.get("/updateOrderState/:id",alterController.updateOrderState);

route.get("/updateOrderStatex/:id",alterController.updateOrderStatex);


// insert/update balance
route.post('/updateBalance',alterController.updateBalance );

// update locations
route.post('/updateLocations/:lat/:lon/:carId' , alterController.updateLocations)

//delete a car
route.delete('/deleteCar/:id',alterController.deleteCar);

// update car
route.post('/updateCar',alterController.updateCar);

module.exports = route;