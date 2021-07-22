// const express = require('express');
// const bodyParser = require('body-parser');
// // const pino = require('express-pino-logger')();
//
// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(pino);
//
// app.get('/api/greeting', (req, res) => {
//   const name = req.query.name || 'World';
//   res.setHeader('Content-Type', 'application/json');
//   res.send(JSON.stringify({ greeting: `Hello youd ${name}!` }));
// });
//
// app.listen(3001, () =>
//         console.log('Express server is running on localhost:3001')
// );
require('@babel/register')

Promise.resolve()
    // .then(() => Config.init())
    // .then(() => require('./notifications').testSenders())
    .then(() => require('./server').start())
    .catch(error => {
      // if (!Config.isAlreadyDisplayed) {
      //   console.log('Configs:', JSON.stringify(Config, null, 2))
      // }

      console.error('Can not run the server:', error)

      process.exit(1)
    })