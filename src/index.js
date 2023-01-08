import express from 'express';
import cors from 'cors';
import cakeRouter from './routes/cakes.routes.js';
import flavourRouter from './routes/flavours.routes.js';
import clientsRouter from './routes/clients.routes.js';
import ordersRouter from './routes/orders.routes.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(cakeRouter);
app.use(flavourRouter);
app.use(clientsRouter);
app.use(ordersRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server Runing in port ${port}`));
