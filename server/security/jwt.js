import jwt from 'jsonwebtoken'

const config={
  secret:"iamthebest"
}

let checkToken = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token) {
      jwt.verify(token, config.secret, (err, decoded) => {
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