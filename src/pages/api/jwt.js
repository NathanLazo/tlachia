import { sign } from 'jsonwebtoken';

export default function secret(req, res) {
    const jwt = sign(req.body.claims, process.env.SECRET, {expiresIn: "1h"});
    res.json({jwt: jwt});
}