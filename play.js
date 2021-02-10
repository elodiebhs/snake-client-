const connect = require('./client');
console.log('Connecting ...');



const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = stdin.on('data', (SIGINT) => {
    process.exit();
  });
  return stdin;
};
connect();
setupInput();