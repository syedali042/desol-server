
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
// Cross Platform Compatibility
app.use(cors());
//set headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE"
  );
  next();
});
// body-parser
app.use(express.json());
// setting routes
app.use('/uploads', express.static('uploads'));
app.use('/', require('./routers/index'));
// Configure Dotenv File
dotenv.config({ path: '.env' });
const PORT = process.env.PORT;

// Server listing
app.listen(PORT, () => console.log(`Server is running on https://desol-server.herokuapp.com`));