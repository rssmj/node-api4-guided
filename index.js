const server = require("./api/server.js");

const port = process.env.DB_ENV || 5000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
