const Sequelize = require ('sequelize')
const sequelize = require ('../DBService/dbs')

const available = sequelize.define('available',{
    id:{type:Sequelize.INTEGER,
    autoIncrement: true,
    allowNull:false,
    primaryKey:true},
    state:{type: Sequelize.BOOLEAN, allowNull:false,defaultValue:false}

})

module.exports = available;