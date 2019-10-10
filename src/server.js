import userRouter from './routes/users_router';
import postRouter from './routes/posts_router'
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
app.use('/api/v1/posts', postRouter);
app.use('/api/v1/users', userRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
