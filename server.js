const server = require('server');

const { get, post } = server.router;
// server(ctx => 'Hello World');
server({
  port: 3011,
  public: 'public'
},ctx => 200);
// server();