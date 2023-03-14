import { compare } from 'bcrypt';
import { client } from '@lib/sanityClient';

export default async function comparePassword(req, res) {
    client
        .fetch(
            `*[_type == "users" && _id == "${req.body.userId}"] {
            "password": password
            }`,
        )
        .then(async (user) => {
            const result = await compare(req.body.password, user[0].password);
            res.status(200).json({ result });
        });
}
