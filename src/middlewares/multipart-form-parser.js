import formidable from "formidable";

const form = formidable({ multiples: true }); // multiples means req.files will be an array

const multipartFormParser = async (req, res, next) => {
  //console.log(req);
  const contentType = req.headers["content-type"];
  //console.log(contentType);
  if (contentType && contentType.indexOf("multipart/form-data") !== -1) {
    form.parse(req, (err, fields, files) => {
      if (!err) {
        req.body = fields; // sets the body field in the request object
        req.files = files; // sets the files field in the request object
      }
      next(); // continues to the next middleware or to the route
    });
  } else if (
    contentType &&
    contentType.indexOf("application/x-www-form-urlencoded") !== -1
  ) {
    form.parse(req, (err, fields, files) => {
      if (!err) {
        req.body = fields; // sets the body field in the request object
      }
      next(); // continues to the next middleware or to the route
    });
  } else {
    form.parse(req, (err, fields, files) => {
      if (!err) {
        req.body = fields; // sets the body field in the request object
      }
      next(); // continues to the next middleware or to the route
    });
  }
};

export default multipartFormParser;
