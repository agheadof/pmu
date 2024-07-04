const Sequelize = require ('sequelize')
const sequelize = require ('../DBService/dbs')

const points = sequelize.define('points',{
    id:{type:Sequelize.INTEGER,
    autoIncrement: true,
    allowNull:false,
    primaryKey:true},    
    balance:{type:Sequelize.INTEGER,allowNull:false}

})

module.exports = points;