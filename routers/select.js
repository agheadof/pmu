const express = require ('express');
const route= express();

const selectController = require ('../Controllers/select')

route.use(express.json());
//get near cars
route.get("/getNearCars/:lon/:lat",selectController.getNearCars);

route.get("/loginD/:email/:pwd",selectController.loginD);

route.get("/loginU/:email/:pwd",selectController.loginU);
// get customer log
route.get("/getCustomerLog/:customerId",selectController.getCustomerLogs)

// get driver log
route.get("/getDriverLog/:carId",selectController.getDriverLogs)

//asd
route.get("/getCarLogsx/:carId",selectController.getCarLogsx)


route.get("/getCustomerLogx/:customerId",selectController.getCustomerLogsx)

module.exports = route;