import {hash} from 'bcrypt';

export default function hashPassword(req, res) {
    const password = req.body.password;
    hash(password, 10, function(err, hash) {
        res.json({password: hash});
    });
}