const Order = require("../models/orderModel");

exports.createOrder = async (req, res) => {

 try {

  const data = req.body;

  // mapping dos campos
  const order = {
   orderId: data.numeroPedido,
   value: data.valorTotal,
   creationDate: new Date(data.dataCriacao),
   items: data.items.map(item => ({
    productId: Number(item.idItem),
    quantity: item.quantidadeItem,
    price: item.valorItem
   }))
  };

  const newOrder = await Order.create(order);

  res.status(201).json(newOrder);

 } catch (error) {
  res.status(500).json({ error: error.message });
 }

};

exports.getOrder = async (req, res) => {

 try {

  const order = await Order.findOne({ orderId: req.params.id });

  if (!order) {
   return res.status(404).json({ message: "Pedido não encontrado" });
  }

  res.json(order);

 } catch (error) {
  res.status(500).json({ error: error.message });
 }

};

exports.listOrders = async (req, res) => {

 try {

  const orders = await Order.find();

  res.json(orders);

 } catch (error) {
  res.status(500).json({ error: error.message });
 }

};

exports.updateOrder = async (req, res) => {

 try {

  const order = await Order.findOneAndUpdate(
   { orderId: req.params.id },
   req.body,
   { new: true }
  );

  res.json(order);

 } catch (error) {
  res.status(500).json({ error: error.message });
 }

};

exports.deleteOrder = async (req, res) => {

 try {

  await Order.findOneAndDelete({ orderId: req.params.id });

  res.json({ message: "Pedido deletado" });

 } catch (error) {
  res.status(500).json({ error: error.message });
 }

};