import { Router } from 'express';
import * as procedures from '../procedures/categories.proc';

const router = Router();

// to "get here", we must be at /api/categories

router.get('/', (req, res) => {
    procedures.all()
    .then((categories) => {
        res.send(categories);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    });
});

export default router;