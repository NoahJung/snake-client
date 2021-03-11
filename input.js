const setupInput = function() {
  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = stdin.on('data', (key) => {
    if (key === '\u0003') {
      console.log("exiting");
      process.exit();
    }
  });
 

  return stdin;
}

module.exports = { setupInput };