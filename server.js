import express from 'express';
import dotenv from 'dotenv';
import compression from 'compression';
import path from "path";
import routes from './routes/index.js'

const __dirname = path.resolve();
dotenv.config();
const app = express();

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use('/public', express.static(path.join(__dirname, 'public')))

app.use(routes);
app.use(compression());

app.listen(process.env.APP_PORT, () => {
    console.log(`App is started on: http://localhost:${process.env.APP_PORT}`)
});