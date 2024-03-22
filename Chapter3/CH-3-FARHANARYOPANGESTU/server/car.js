let cars = [
  { id: 1, brand: "Toyota", model: "Camry", year: 2020 },
  { id: 2, brand: "Honda", model: "Civic", year: 2019 },
];

function createcar(car) {
  // BRAND
  // MODEL
  // YEAR

  // Mendapatkan ID terbesar dari array cars
  const maxId = cars.reduce((max, car) => (car.id > max ? car.id : max), 0);

  // Mengatur ID mobil baru
  car.id = maxId + 1;

  cars.push(car);
  return car;
}

// update car put
function updateCarByPatch(id, updateCar) {
  // Mencari indeks mobil yang sesuai dengan ID
  const index = cars.find((car) => car.id === id);

  if (index !== -1) {
    // Jika mobil dengan ID yang diberikan ditemukan
    // Memperbarui mobil dengan data yang baru
    cars[index] = { ...cars[index], ...updateCar };

    return cars[index]; // Mengembalikan mobil yang telah diperbarui
  }
}

function updateCarByPut(id, updateCar) {
  if (!(updateCar.brand && updateCar.model && updateCar.year)) {
    throw new Error("Data car missing");
    return;
  }

  updateCarByPatch(id, updateCar);
}

function listcars() {
  return cars;
}

function deletecar(id) {
  cars = cars.filter((car) => car.id !== Number(id));
}

function getcar(id) {
  return cars.find((car) => car.id === Number(id));
}

module.exports = {
  getcar,
  listcars,
  createcar,
  updateCarByPatch,
  updateCarByPut,
  deletecar,
};
