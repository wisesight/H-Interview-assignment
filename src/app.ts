import express, { Application, Request, Response } from 'express';
import { Database } from './database';

export const app: Application = express();

app.get('/', async (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.get('/vaccine', async (req: Request, res: Response) => {
    // fix this please
    const result = Database.find({ vaccineStatus: 'READY' }); // Database Example
    res.send(result);
});
