const dataRoutes = (app, fs) => {

  const dataPath = './data.json';

  app.get('/data', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });
};

module.exports = dataRoutes;