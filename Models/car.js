const Sequelize = require('sequelize')
const sequelize = require('../DBService/dbs')

const Car = sequelize.define('car', {
    id:{type:Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true},

    color:{type: Sequelize.STRING, allowNull:false},
    country:{type: Sequelize.STRING, allowNull:false},
    lamp:{type: Sequelize.STRING, allowNull:false},
    model:{type: Sequelize.STRING, allowNull:false},
    number:{type: Sequelize.STRING, allowNull:false},
    // logo:{type: Sequelize.STRING, allowNull:false}
})
module.exports = Car;