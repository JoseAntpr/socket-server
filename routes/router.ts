import { Router, Request, Response } from 'express';

const router = Router();

router.get('/messages', (req: Request, res: Response) => {
    res.json({
        ok: true,
        message: 'All is ok!!'
    });
});

router.post('/messages', (req: Request, res: Response) => {
    res.json({
        ok: true,
        message: 'POST - Listo'
    })
});
 
export default router;