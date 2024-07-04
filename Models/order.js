const Sequelize = require ('sequelize')
const sequelize = require ('../DBService/dbs')

const order = sequelize.define('orders',{
    id:{type:Sequelize.INTEGER,
    autoIncrement: true,
    allowNull:false,
    primaryKey:true},    
    start_point:{type:Sequelize.GEOMETRY,allowNull:false},
    destination:{type:Sequelize.GEOMETRY,allowNull:false},
    distance:{type:Sequelize.INTEGER,allowNull:false},
    cost:{type:Sequelize.INTEGER,allowNull:false},
    order_state:{type:Sequelize.BOOLEAN},
    destinationx:{type:Sequelize.STRING}

})

module.exports = order;