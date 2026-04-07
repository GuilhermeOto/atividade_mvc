class VehicleModel {
  constructor() {
    this.vehicles = [];
  }
  getAll() {
    return this.vehicles;
  }
  create(brand, model, year) {
    const vehicle = {
      id: Date.now().toString(),
      brand,
      model,
      year,
      available: true,
    };
    this.vehicles.push(vehicle);
    return vehicle;
  }
  update(id, brand, model, year) {
    const vehicle = this.findById(id);
    if (vehicle) {
      vehicle.brand = brand;
      vehicle.model = model;
      vehicle.year = year;
    }
    return vehicle;
  }
  findById(id) {
    return this.vehicles.find((v) => v.id === id);
  }
  deleteById(id) {
    this.vehicles = this.vehicles.filter((v) => v.id !== id);
  }
  marcarindis(id) {
    const vehicle = this.findById(id);
    if (vehicle) {
      vehicle.available = false;
    }
  }
}

module.exports = new VehicleModel();
