const Sequelize = require ('sequelize')
const sequelize = require('../DBService/dbs')

const customer = sequelize.define('customers',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true},
    full_name:{type: Sequelize.STRING, allowNull:false},
    email:{type: Sequelize.STRING, allowNull:false},
    phone:{type: Sequelize.STRING, allowNull:false},
    password:{type: Sequelize.STRING, allowNull:false},
    sex:{type: Sequelize.CHAR, allowNull:false ,defaultValue:'M'}

})
module.exports=customer;