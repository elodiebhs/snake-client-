//pair up with judith

const { IP, PORT } = require('./constants');


const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  conn.on('connect', function(){
  console.log('HI, I am connected');
   // this won't appear on the game screen, just to the terminal
  conn.write("Name: EBB")
  });
/*
  conn.on('connect', function(){
    setInterval(() => {
      conn.write("Move: up");;
    }, 1000);
    setInterval(() => {
      conn.write("Move: left");;
    }, 1000);
   });
*/
 
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  return conn;
}
module.exports = { connect };