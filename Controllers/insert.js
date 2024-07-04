const driver = require ('../Models/driver')
const car = require('../Models/car')
const {validationResult} = require ('express-validator');
const order = require('../Models/order');
const customer = require ('../Models/customer')

exports.addDriver =  (req, res) => {
	const errors = validationResult(req);
	if(errors.errors != 0) {
		console.log(errors.errors)
		const error =new Error('Validation Failed')
		error.statuscode = 422;
		error.data = errors.array();
		throw error;
	}
	const { full_name, email, phone, password, rate } = req.body;
	driver.create({
		full_name:full_name,
		email:email,
		phone:phone,
		password:password,
		rate:rate
	})
	.then(res.status(201).json({message:'Driver added successfully !!'}))
	.catch(err => console.log(err));
	
	}

exports.addCar =  (req, res) => {
	const color = req.body.color
	const country = req.body.country
	const lamp = req.body.lamp
	const model = req.body.model
	const number = req.body.number
	const driverId = req.body.driverId   

		car.create({
			color:color,
			country:country,
			lamp:lamp,
			model:model,
			number:number,
			driverId:driverId
	
		})
	.then(res.status(201).send({message:'Car added successfully !!'}))
	.catch(err => console.log(err))

	
}

	

exports.addCustomer = (req,res,next	)=>{
	// const errors = validationResult(req);
	// if(errors.errors != 0) {
	// 	console.log(errors.errors)
	// 	const error =new Error('Validation Failed')
	// 	error.statuscode = 422;
	// 	error.data = errors.array();
	// 	throw error;
	// }
	const {full_name ,email, phone, password, sex} = req.body;
	console.log(req.body);
	customer.create({
		full_name:full_name, email:email, phone:phone, password:password, sex:sex
	})
	.then(res.status(201).json({message:'Customer added successfully !!'}))
	.catch(err => console.log (err))
}



exports.addOrder =  (req, res) => {

	const { lat ,lon , dest_lat, dest_lon, distance , carId, customerId, destinationx} = req.body;
	const cost= distance;
	const start_point = { type: 'Point', coordinates: [lon,lat]};
	const destination = { type: 'Point', coordinates: [dest_lon,dest_lat]};

	order.update({order_state:4}, {where:{customerId:customerId}})

	order.create({start_point:start_point, destination:destination, distance:distance, cost:cost, carId:carId, customerId:customerId, destinationx:destinationx})
	.then( data => res.send(data))
	.catch (err => console.log(err))
}