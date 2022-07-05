const path = require('path');
const express = require('express');
const morgan = require('morgan');
// const handlebars = require('express-handlebars');
const expHbs = require('express-handlebars'); // cú pháp  gọi express-handlebars
const hbs = expHbs.create({ extname: '.hbs' }); // cú pháp  gọi express-handlebars và create thư viện gọi đến tên file .hbs đêt thực hiện

const app = express();
const port = 3001;

//Http log
app.use(morgan("combined"));

//template engin
app.set("view engine", "hbs"); // sử dụng hbs dể view app
app.engine('hbs', hbs.engine); // gọi đến thu vien hbs HBS.engine và gán vào hbs
app.set('views', path.join(__dirname, 'resources\\views')); // địa chỉ lấy ra theo cấu trúc truy cập (mọi thứ từ views)(layout/partials/ home)

// console.log('PATH:',path.join(__dirname,"resources\\views"));


app.get('/', (req, res) => {
  res.render('home');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

