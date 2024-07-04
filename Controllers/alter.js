const req = require('express/lib/request');
const balance = require('../Models/balance');
const car = require('../Models/car');
const location = require('../Models/location');
const order = require('../Models/order');
const points = require('../Models/points');
const sequelize = require('../DBService/dbs')
const {QueryTypes, Sequelize} = require('sequelize');


exports.updateLocations = (req,res,next)=>{
	const {lat ,lon, carId } = req.params;
	const lon_lat = {type:'Point',coordinates:[lon,lat]}
	location.findAll({where:{carId:carId}})
	.then(result => { 
		if (result.length == 0) 
		{
			location.create({lon_lat:lon_lat,carId:carId })
			.then(data => res.status(201).send({data:data,message:"New location Added !!"}))
			.catch(err=> res.send(err))
		}
		else 
		{
			location.update ({ lon_lat:lon_lat },{where:{carId:carId}})
			.then(data => res.status(201).send({data:data,message:"location Updated !!"}))
			.catch(err=> res.send(err))
		}
 } )
}

exports.updateBalance =function (req, res) { 
	const { carId, cost} = req.body;
	const driver_cut =cost*0.9 ;
	const our_cut =cost*0.05;
	const points_cut = cost*0.05;
	balance.findAll({where:{carId:carId}})
	.then(result => {
		if (result.length == 0) 
		{
			balance.create({driver_cut:driver_cut, our_cut:our_cut, points_cut:points_cut, carId:carId})
			.then( res.redirect(307,'/updatePoints'))
			.catch(err=> res.send(err))
		}
		else
		{
			balance.update({driver_cut:driver_cut, our_cut:our_cut, points_cut:points_cut},{where:{carId:carId}})
			.then( res.redirect(307,'/updatePoints'))
			.catch(err => res.send(err))
		}
	})
	
	
		
}

exports.updateOrderState= (req,res	) => {

	const id = req.params.id ;
console.log(id);
	const query = "update orders set  order_state = true where id  = ?";
		sequelize.query(query,{replacements:[id ] , type:QueryTypes.update})
			.then(data => res.send(data))
			.catch(err=> console.log(err))
}

exports.updateOrderStatex= (req,res	) => {

	const id = req.params.id ;
console.log(id);
	const query = "update orders set  order_state = 2 where customerId  = ?";
		sequelize.query(query,{replacements:[id ] , type:QueryTypes.update})
			.then(data => res.send(data))
			.catch(err=> console.log(err))
}

exports.updatePoints =  (req, res) => {
	const {customerId, cost } = req.body;
	const newBal = cost*0.0005;
	points.findAll({where:{customerId:customerId}})
	.then(result => {
		if (result.length == 0)
		{
			points.create({balance:newBal, customerId:customerId})
			.then(data => res.status(201).send({data:data , message:"Order Added, Balance and Points updated."}))
			.catch(err => res.send(err))
		}
		else 
		{
			const oldBal = result[0].dataValues.balance
			const balance = newBal + oldBal;
			points.update({balance:balance}, {where:{customerId:customerId}})
			.then(data => res.status(201).send({data:data, message:"Order Added, Balance and Points updated."}))
			.catch(err => res.send(err))
		}
	})

}

exports.deleteCar = (req,res) => {
        const { id } = req.params;
		car.destroy({where:{id:id}})
            .then(data => res.send({ success: data }))
            .catch(err => console.log(err));
}

exports.updateCar = (req,res) => {

        const id  = req.body.id;
		const color = req.body.color;
		const country = req.body.country;
		const lamp = req.body.lamp;
		const model = req.body.model;
		const number = req.body.number;
		const driverId = req.body.driverId;

		car.findAll({where : {id:id}})
		.then(result => {
			if(result.length==0) 
			{
				res.redirect(307,"/insertCar")
			}
			else
			{
				car.update({color:color, model:model, number:number, country:country, lamp:lamp, driverId:driverId},{where : {id:id}})
				.then(data => res.status(201).send({data:data , message : "Car has been updated"}))
				.catch(err => res.send(err))
			}
		})
}