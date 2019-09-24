import {getCustomers} from './queries';
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// app.get('/api', (req, res) => {
//   const user = req.query.user || 'reedbarger';
//   axios.get(`https://api.github.com/users/${user}`).then(response => {
//     res.json({user: response.data});
//   });
// });

app.get('/', getCustomers);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
