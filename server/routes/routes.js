const dataRoutes = require('./data');

const appRouter = (app, fs) => {

  app.get('/', (req, res) => {
    res.send('welcome to the development api-server');
  });

  dataRoutes(app, fs);
};

module.exports = appRouter;