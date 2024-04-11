const Sequelize = require('sequelize');

const sequelize = new Sequelize('delete-and-update-product', 'root', 'NRS842@&$#sha*', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;