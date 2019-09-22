const Sequelize = require("sequelize");

const sequelize = new Sequelize("vibrich08", "vibrich08", "vibrich@2019", {
    host: "mysql.vibrich.kinghost.net",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}