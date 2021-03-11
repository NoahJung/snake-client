/**
 * Establishes connection with the game server
 */
 const net = require('net');

 const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  conn.on('connect', () => {
    console.log("Successfully connected to game server" );
    conn.write('Hello from client Noah!');
    conn.write('Name: MJJ');

  });

  // conn.on('connect', () => {
    
  //   const myAction = setInterval(() => {
  //     conn.write("Move: up");
  //   }, 50)

  //   setTimeout(() => {
  //     clearInterval(myAction);
  //   }, 1000)
    
  // });

  return conn;
 }



module.exports = { connect };