const Sequelize=require ('sequelize')
const sequelize = require('../DBService/dbs')

const driver = sequelize.define('drivers',{
    id :{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true},
    full_name:{type: Sequelize.STRING, allowNull:false},
    email:{type: Sequelize.STRING, allowNull:false},
    phone:{type: Sequelize.STRING, allowNull:false},
    password:{type: Sequelize.STRING, allowNull:false},
    rate:{type: Sequelize.FLOAT, allowNull:false ,defaultValue:5}
})
module.exports = driver;