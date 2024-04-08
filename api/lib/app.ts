import express from 'express';
import { config } from './config'; 

export default class App {
    public app: express.Application;

    constructor() {
        this.app = express();
    }

    public listen(): void {
        this.app.listen(config.port, () => {
            console.log(`App listening on the port ${config.port}`);
        })
    }
}

