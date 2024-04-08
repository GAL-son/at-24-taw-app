import IndexController from './controllers/index.controller';
import App from './app';


const app: App = new App([
    new IndexController()
]);

app.listen();