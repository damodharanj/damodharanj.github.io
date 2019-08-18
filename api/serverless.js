module.exports = (req, res) => {
  console.log(req);
  res.send({val: Math.PI})
}
