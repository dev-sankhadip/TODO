import jwt from 'jsonwebtoken'
require('dotenv').config();

let checkToken = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token) {
      jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
          console.log(err);
            console.log('not valid')
          res.status(401).send({ code:401, message:"Unauthorized" });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
        console.log('not supplied');
        res.status(401).send({ code:401, message:"Unauthorized" });
    }
  };

  export{
      checkToken
  }