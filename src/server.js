import userRouter from './routes/users_router';
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

//routes
// app.get('/api/v1/posts', getLastestPosts);
app.use('/api/v1/users', userRouter);
// app.get('/api/v1/comments', getLastestPosts);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
