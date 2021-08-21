const { convert } = require('convert-svg-to-png');


module.exports = (req, res) => {
  convert(req.body).then(png => {
    res.set('Content-Type', 'image/png');
    res.send(png);
  });
};
