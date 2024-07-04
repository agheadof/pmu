const Sequelize = require ('sequelize')
const sequelize = require ('../DBService/dbs')

const location = sequelize.define('locations',{
    id:{type:Sequelize.INTEGER,
    autoIncrement: true,
    allowNull:false,
    primaryKey:true},
    lon_lat:{type:Sequelize.GEOMETRY,allowNull:false}

})

module.exports = location;