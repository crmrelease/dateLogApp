var mysql = require("mysql");

export const connectDatabase = async () => {
  var connection = mysql.createConnection({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
  });

  connection.connect(function (err) {
    if (err) {
      console.log(process.env.RDS_HOSTNAME);
      console.error("DB 연결실패: " + err.stack);
      return;
    }

    console.log("DB 연결완료");
  });

  connection.end();
};
