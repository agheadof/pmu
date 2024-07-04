const express = require ('express');
const app = express();
const path  = require ('path');
const sequelize = require ('./DBService/dbs')

const select = require ('./routers/select')
const insert = require ('./routers/insert')
const alter = require ('./routers/alter')
const car = require ('./Models/car')
const location = require('./Models/location')
const driver = require('./Models/driver');
const available = require('./Models/available');
const balance = require('./Models/balance');
const customer = require('./Models/customer');
const order = require('./Models/order');
const points = require('./Models/points');
const seat = require('./Models/seat');

app.use(express.json());
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "*");
	next();
});


app.use((error,req,res,next)=> {
    console.log(error);
    const status =error.statuscode || 500 ;
    const message =error.message;
    const data = error.data;
    res.status(status).json({message:message, data:data });
});



app.use(alter);

app.use(select);

app.use(insert);


app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views','pageNotFound.html'))
})

order.belongsTo(car);
car.hasOne(order);

order.belongsTo(customer);
customer.hasMany(order);

points.belongsTo(customer);
customer.hasOne(points);

seat.belongsTo(car);
car.hasOne(seat);

balance.belongsTo(car);
car.hasOne(balance);

available.belongsTo(car);
car.hasOne(available);

location.belongsTo(car);
car.hasOne(location,{foreignKey:{unique:true}});

car.belongsTo(driver);
driver.hasOne(car);


app.listen(process.env.PORT ||3000)
