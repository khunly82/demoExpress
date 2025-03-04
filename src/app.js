import express from 'express';
import { routes } from './routes.js';

const app = express();
// config de express
app.set('view engine', 'ejs');
app.set('views', 'src/views');

// ajouts des middlewares
app.use(express.static('src/public'));
app.use(routes);

app.listen(3000, () => {
    console.log('Le serveur écoute le port 3000');
});