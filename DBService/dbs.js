// const mysql = require('mysql2')
const Sequelize = require ('sequelize')
const sequelize = new Sequelize('sql8512459', 'sql8512459', 'xtsybNNC8G', {port: '3306',host: 'sql8.freemysqlhosting.net', dialect:'mysql', define: {
  charset: 'utf8',
  collate: 'utf8_general_ci', 
  timestamps: true,
},

timezone: '+03:00',
logging:false});

// let instance = null
// const dotenv = require('dotenv');
// dotenv.config();

//create connection


// const connection = mysql.createPool({
// 	host: 'localhost',
// 	port: '3306',
// 	user: 'root',
// 	password: '',
// 	database: 'pick me up'
// });


//Create a dbs class
// class dbs {
// 	static getDbsInstance() {
// 		return instance ? instance : new dbs();
// 	}

// 	// get all cars
// 	async getAllCars() {
// 		try {
// 			const response = await new Promise((resolve, reject) => {
// 				const query = "SELECT * FROM car;";
// 				connection.execute(query, (err, results) => {
// 					if (err) reject(new Error(err.message));
// 					resolve(results);

// 				})
// 			});
			
// 			return response;
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}
// 	//get near cars
// 	async getNearCars(lon,lat) {
// 		try {
// 			const response = await new Promise((resolve, reject) => {
// 				const query = "select location.car_id,latitude,longitude,color,model,number,f_name,l_name , ST_Distance_Sphere( point (?,?), point(longitude, latitude))as distance from location, car, driver WHERE car.car_id = location.car_id && car.car_id=driver.car_id having distance <= 300 order by distance asc";
// 				connection.execute(query, [lon,lat], (err, results) => {
// 					if (err) reject(new Error(err.message));
// 					resolve(results);
// 				})
// 			});
// 			return response;
// 		} catch (error) {
// 			console.log(error);
// 		}
//     }
// 	// get customer log
// 	async getCustomerLog(customer_id) {
// 		try {
// 			const response = await new Promise((resolve, reject) => {
// 				const query = "SELECT * FROM orders WHERE customer_id = ?";
// 				connection.execute(query,[customer_id], (err, results) => {
// 					if (err) reject(new Error(err.message));
// 					resolve(results);

// 				})
// 			});
// 			return response;
// 		}
// 		catch (error) {
// 			console.log(error);
// 		}
// 	}
// 	// get driver log
// 	async getDriverLog(car_id) {
// 		try {
// 			const response = await new Promise((resolve, reject) => {
// 				const query = "SELECT * FROM request WHERE car_id = ?";
// 				connection.execute(query, [car_id], (err, results) => {
// 					if (err) reject(new Error(err.message));
// 					resolve(results);

// 				})
// 			});
// 			return response;
// 		}
// 		catch (error) {
// 			console.log(error);
// 		}
// 	}
// 	//insert cars
// 	async insertCar(color, model, number, country, lamp) {
// 		try {
// 			const dateAdded = new Date();
// 			const insertId = await new Promise((resolve, reject) => {
// 				const query = "INSERT INTO car (color, model, number, country, lamp) VALUES (?,?,?,?,?);";
// 				connection.execute(query, [color, model, number, country, lamp], (err, result) => {
// 					if (err) reject(new Error(err.message));
// 					resolve(result.insertId);

// 				})
// 			});
// 			return insertId;
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}
// 	// insert order
// 	async insertOrder(car_id, customer_id, distance, dist_x, dist_y, latitude, longitude, cost) {
// 		try {
// 			const response = await new Promise((resolve, reject) => {
// 				const query = "INSERT INTO orders (car_id, customer_id, distance, dist_x, dist_y, latitude, longitude, cost) VALUES (?,?,?,?,?,?,?,?)";
// 				connection.execute(query, [car_id, customer_id, distance, dist_x, dist_y, latitude, longitude, cost], (err, result) => {
// 					if (err) reject(new Error(err.message));
// 					resolve(result.response);
// 				})
// 			});
			
// 		}
// 		catch (error) {
// 			console.log(error);

//         }
// 	}
	
// 	//insert balance 
// 	async insertBalance(car_id,driver_cut, our_cut, points_cut) {
// 		try {
// 			const response = await new Promise((resolve, reject) => {
// 				const query = "INSERT INTO balance (car_id, driver_cut, our_cut, points_cut) VALUES (?,?,?,?) ON DUPLICATE KEY UPDATE driver_cut = ?, our_cut=?, points_cut=?; ";
// 				connection.execute(query, [car_id,driver_cut, our_cut, points_cut,driver_cut, our_cut, points_cut], (err, result) => {
// 					if (err) reject(new Error(err.message));
// 					resolve(result);

//                 })
// 			});
// 			return (" successfully added !!");
// 		}
// 		catch(error){
// 			console.log(error);
//         }
//     }

// 	// insert points per customer
// 	async insertPoints(customer_id , points_cut) {
// 		try {
			
// 			const response = await new Promise((resolve, reject) => {
// 				const query = "INSERT INTO points (customer_id, points_balance) VALUES (?,?) ON DUPLICATE KEY UPDATE points_balance = points_balance+?;";
// 				connection.execute(query, [customer_id,points_cut,points_cut], (err, result) => {
// 					if (err) reject(new Error(err.message));
// 					resolve(result);
// 				})
// 			});
// 			return "Successfully Added !!";
// 		}
// 		catch (error) {
// 			console.log(error);
// 		}
//     }

// 	// delete car
// 	async deleteCarById(id) {
// 		try {
// 			id = parseInt(id);
// 			const response = await new Promise((resolve, reject) => {
// 				const query = "DELETE FROM car WHERE car_id = ?";

// 				connection.execute(query, [id], (err, result) => {
// 					if (err) reject(new Error(err.message));
// 					resolve(result.affectedRows);
// 				})
// 			});
// 			console.log(response);
// 			return response == 1 ? true : false;
// 		} catch (error) {
// 			console.log(error);
// 			return false;
// 		}
// 	}
// 	// update car
// 	async updateCarById(id, color, model, number, country, lamp) {
// 		try {
// 			id = parseInt(id);
// 			const response = await new Promise((resolve, reject) => {
// 				const query = "UPDATE car SET color=?, model=?, number=?, country=?, lamp=? WHERE car_id = ?";

// 				connection.execute(query, [color, model, number, country, lamp, id], (err, result) => {
// 					if (err) reject(new Error(err.message));
// 					resolve(result);
// 				})
// 			});
// 			console.log(response);
// 			return response.affectedRows >= 1 ? true : false;
// 		} catch (error) {
// 			console.log(error);
// 			return false;
// 		}
// 	}
// 	// get car by id
// 	async getCarById(car_id) {
// 		try {
// 			const response = await new Promise((resolve, reject) => {
// 				const query = "SELECT * FROM car WHERE car_id = ?;";
// 				connection.execute(query, [car_id], (err, results) => {
// 					if (err) reject(new Error(err.message));
// 				resolve(results);
//                 })
// 		});
// 		return response;
// 		}
// 	catch(error) {
// 		console.log(error);
// 	}
//     }
// }

module.exports = sequelize;