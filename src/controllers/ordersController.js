import orderModel from '../dataModel/ordersModel';


const totalOrders = async (req, res) => {
    try {
        res.status(200).json(await orderModel.find());
    } catch (err) {
        res.status(404).send(err);
    }
};

const addOrders = async (req, res) => {
    try {
        const newOrder = new orderModel(req.body);
        res.status(201).json(await newOrder.save());
    } catch (err) {
        res.status(404).send(err);
    }
};

const updateOrder = async (req, res) => {
    try {
        res.status(200).json(await orderModel.findOneAndUpdate({ orderId: req.params.id }, req.body));
    } catch (err) {
        res.status(404).send(err);
    }
};

const deleteOrder = async (req, res) => {
    try {
        res.status(200).json(await orderModel.findOneAndRemove({ orderId: req.params.id }, req.body));
    } catch (err) {
        res.status(404).send(err);
    }
};


const orderMethods = {
    totalOrders,
    addOrders,
    updateOrder,
    deleteOrder,
};

export default orderMethods;
