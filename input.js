// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = stdin.on('data', (key) => {
    if (key === '\u0003') {
      console.log("exiting");
      process.exit();
    }
    if (key === 'd') {
      console.log("right");
      connection.write('Move: right');
    }
    if (key === 's') {
      console.log("down");
      connection.write('Move: down');
    }
    if (key === 'w') {
      console.log("up");
      connection.write('Move: up');
    }
    if (key === 'a') {
      console.log("left");
      connection.write('Move: left');
    }
    if (key === 'h') {
      console.log("hello");
      connection.write('Say: Hello World');
    }
    if (key === 'b') {
      console.log("I am back");
      connection.write('Say: I am back');
    }
  });
 

  return stdin;
}

module.exports = { setupInput };