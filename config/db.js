const { db } = require('./vars');
const Sequelize = require('sequelize');
const database = new Sequelize('postgresql://' + db.user + ':' + db.pass + '@' + db.host + ':' + db.port + '/' + db.name, {
  define: {
    timestamps: false
  }
});

module.exports = database;
