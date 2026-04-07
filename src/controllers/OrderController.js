const OrderModel = require("../models/OrderModel");
const ClientModel = require("../models/ClientModel");
const VehicleModel = require("../models/VehicleModel");

class OrderController {
  list(req, res) {
    const rawOrders = OrderModel.getAll();
    const clients = ClientModel.getAll();
    const vehicles = VehicleModel.getAll();

    const orders = rawOrders.map((order) => {
      const client = clients.find((c) => c.id == order.clientId);
      const vehicle = vehicles.find((v) => v.id == order.vehicleId);

      return {
        id: order.id,
        clientName: client ? client.name : "Cliente não encontrado",
        vehicleName: vehicle ? vehicle.model : "Veículo não encontrado",
      };
    });

    res.render("orders", { orders, clients, vehicles });
  }

  create(req, res) {
    const { clientId, vehicleId } = req.body;
    const vehicle = VehicleModel.findById(vehicleId);
    if (!vehicle || vehicle.available === false) {
      return res.send("<a href='/orders'>Voltar</a>");
    }
    OrderModel.create(clientId, vehicleId);
    VehicleModel.marcarindis(vehicleId);
    res.redirect("/orders");
  }
}

module.exports = new OrderController();
