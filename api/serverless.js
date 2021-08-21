const { convert } = require('convert-svg-to-png');


module.exports = async (req, res) => {
  const png = await convert(req.body);
 
  res.set('Content-Type', 'image/png');
  res.send(png);
};
