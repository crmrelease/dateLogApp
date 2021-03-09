import {Sequelize} from 'sequelize'
import config from '../config/config'
const db:any={}

const sequelize = new Sequelize(
  'taejin', config.username, config.password, {dialect:'mysql',host:config.host, port:3306}
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Test = require('./test')(sequelize,Sequelize);


module.exports = db;
