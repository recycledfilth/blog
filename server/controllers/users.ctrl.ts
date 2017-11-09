import { Router } from 'express';
import * as procedures from '../procedures/users.proc';

const router = Router();

// to "get here", we must be at /api/users

router.get('/', (req, res) => {
    procedures.all()
    .then((users) => {
        res.send(users);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    });
});

export default router;