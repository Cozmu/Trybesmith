import express from 'express';
import ProductRouter from './routers/products.router';
import UserRouter from './routers/users.router';
import OrderRouter from './routers/orders.router';
import LoginRouter from './routers/login.router';

const app = express();

app.use(express.json());

app.use('/products', ProductRouter);
app.use('/users', UserRouter);
app.use('/orders', OrderRouter);
app.use('/login', LoginRouter);

export default app;
