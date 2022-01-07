const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "wptexam",
};

async function connectioncheck() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("connection success....");
  await connection.endAsync();
}

async function addMessage(user) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let sql = `INSERT INTO chat values (?)`;
  await connection.queryAsync(sql, [user.message]);
  await connection.endAsync();
}

async function getMessage(user) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `select * from chat`;
  const list = await connection.queryAsync(sql, []);
  await connection.endAsync();
  return list;
}

module.exports = { addMessage, getMessage };

const user = { message: "Hello" };
addMessage(user);
//connectioncheck();
