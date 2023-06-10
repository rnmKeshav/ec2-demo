const autocannon = require('autocannon');

const url = 'http://localhost:3000/';
const connections = 10; // Number of concurrent connections
const pipelining = 10;  // Number of requests to send in parallel per connection
const duration = 30; // Duration of the test in seconds


const instance = autocannon({
  url,
  connections,
  pipelining,
  duration,
});

autocannon.track(instance, { renderProgressBar: true });
