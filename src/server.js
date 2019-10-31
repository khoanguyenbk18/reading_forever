import userRouter from './routes/users_router';
import postRouter from './routes/posts_router';
const express = require('express');
const cors = require('cors');
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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {

    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(process.env.PORT || PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
