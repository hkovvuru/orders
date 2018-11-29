import { Router } from 'express';
import orderMethods from '../controllers/ordersController';

const orderRoute = new Router();

// get the total orders details
orderRoute.get('/', orderMethods.totalOrders);

// Add the order details
orderRoute.post('/add', orderMethods.addOrders);

// update the orders details
orderRoute.put('/update/:id', orderMethods.updateOrder);

// delete the orders details
orderRoute.delete('/delete/:id', orderMethods.deleteOrder);

export default orderRoute;
