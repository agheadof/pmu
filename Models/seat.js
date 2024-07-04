const Sequelize = require ('sequelize')
const sequelize = require ('../DBService/dbs')

const seats = sequelize.define('seats',{
    id:{type:Sequelize.INTEGER,
    autoIncrement: true,
    allowNull:false,
    primaryKey:true},    
    available:{type:Sequelize.INTEGER,allowNull:false}

})

module.exports = seats;