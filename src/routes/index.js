import { Router } from 'express';
import orderRoute from './ordersRoute';

const route = new Router();

route.use('/orders', orderRoute);

export default route;
