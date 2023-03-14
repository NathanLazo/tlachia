import { verify } from 'jsonwebtoken';

export default async function verifyJwt(req, res) {
    verify(req.body.jwt, process.env.SECRET, function(err, decoded) {
        if(!err){ 
            res.json({jwtDecoded: decoded, auth: true});
        }else{
            res.json({auth: false});
        }
      });
}