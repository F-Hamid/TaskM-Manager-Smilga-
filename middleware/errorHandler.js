const errorHandler = (err, req, res, next) => {
  return res.status(500).json({ msg: "Something go wrong!" });
};

module.exports = errorHandler;
