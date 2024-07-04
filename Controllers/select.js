const logs = require('../Models/order')
const sequelize = require('../DBService/dbs')
const {QueryTypes, Sequelize} = require('sequelize');

exports.getDriverLogs =  (req, res) => {
	const id = req.params.carId;
//	logs.findAll({where: Sequelize.and( {carId:id} , Sequelize.or({order_state:null}, {order_state:false})) } )
//		.then(data => res.send(data));

		const query = "select *, ST_AsText(start_point) as coor1, ST_AsText(destination) as coor2 from orders where carId = ? && ( order_state = false  or order_state is NULL) ";
		sequelize.query(query,{replacements:[id ] , type:QueryTypes.SELECT})
			.then(data => res.send(data))
			.catch(err=> console.log(err))

}

exports.getCustomerLogsx =  (req, res) => {
	const id = req.params.customerId;
//	logs.findAll({where: Sequelize.and( {carId:id} , Sequelize.or({order_state:null}, {order_state:false})) } )
//		.then(data => res.send(data));

		const query = "select  *,ST_AsText(start_point) as coor1,ST_AsText(destination) as coor2 from orders where customerId = ? and ( order_state = 1 ) ";
		sequelize.query(query,{replacements:[id ] , type:QueryTypes.SELECT})
			.then(data => res.send(data))
			.catch(err=> console.log(err))

}

exports.getNearCars = (req, res) => {
	//const query = "select   cars.lamp, locations.carId as car_id, ST_AsText(lon_lat) as coor ,color,model,number,drivers.full_name , ST_Distance_Sphere( point (?,?),  locations.lon_lat ) as distance from locations, cars, drivers WHERE cars.id=locations.carId and drivers.id=locations.carId having distance <= 300 and ( TIMESTAMPDIFF(SECOND,(SELECT updatedAt FROM locations WHERE cars.id =locations.carId),now()))<3000  order by distance asc";
	const query ="select   cars.lamp, locations.carId as car_id, ST_AsText(lon_lat) as coor ,color,model,number,drivers.full_name , ST_Distance_Sphere( point (?,?),  locations.lon_lat ) as distance from locations, drivers ,cars where cars.id=locations.carId and drivers.id=locations.carId and ST_Distance_Sphere( point (?,?),  locations.lon_lat ) <= 3000 and ( TIMESTAMPDIFF(SECOND,(SELECT updatedAt FROM locations WHERE cars.id =locations.carId),now()))<30  order by distance asc";
	sequelize.query(query,{replacements:[req.params.lon , req.params.lat,req.params.lon , req.params.lat] , type:QueryTypes.SELECT})
		.then(data => res.send(data)).catch(err => console.log(err))
}


exports.loginD = (req, res) => {
	const query = "select drivers.id,drivers.email,drivers.full_name,cars.id as carID  from drivers,cars where email = ? and password = ? and cars.driverId = drivers.id";
	sequelize.query(query,{replacements:[req.params.email , req.params.pwd] , type:QueryTypes.SELECT})
		.then(data => res.send(data));
}

exports.loginU = (req, res) => {
	const query = "select * from customers where email = ? and password =  ? ";
	sequelize.query(query,{replacements:[req.params.email , req.params.pwd] , type:QueryTypes.SELECT})
		.then(data => res.send(data));
}

exports.getCustomerLogs =  (req, res) => {
	const id = req.params.customerId;
	logs.findAll({where:{customerId:id}})
	.then(data => res.send(data));
}

exports.getCarLogsx =  (req, res) => {
	const id = req.params.carId;
	logs.findAll({where:{carId:id}})
	.then(data => res.send(data));
}