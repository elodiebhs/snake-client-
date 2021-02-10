const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  conn.on('connect', function(){
  console.log('HI, I am connected');
   // this won't appear on the game screen, just to the terminal

  conn.write("Name: EBB")
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  return conn;
}
module.exports = connect;