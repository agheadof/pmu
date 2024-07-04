const Sequelize = require ('sequelize')
const sequelize = require ('../DBService/dbs')

const balance = sequelize.define('balance',{
    id:{type:Sequelize.INTEGER,
    autoIncrement: true,
    allowNull:false,
    primaryKey:true},
    driver_cut:{type: Sequelize.DOUBLE, allowNull:false},
    our_cut:{type: Sequelize.DOUBLE, allowNull:false},
    points_cut:{type: Sequelize.DOUBLE, allowNull:false}

})

module.exports = balance;