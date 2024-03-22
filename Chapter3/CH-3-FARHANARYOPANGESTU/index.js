const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT || 8000;

const { listcars, getcar, createcar, updateCarByPatch, updateCarByPut, deletecar } = require("./server/car");

const PUBLIC_DIRECTORY = path.join(__dirname, "public");

// Set format request
app.use(express.urlencoded({ extended: true }));

// Set PUBLIC_DIRECTORY sebagai
// static files di express
app.use(express.static(PUBLIC_DIRECTORY));

// static engine
app.set("view engine", "ejs");

// Middleware untuk meng-handle JSON di body request
app.use(bodyParser.json());

app.get("/", (req, res) => {
  data = { message: "Ping successfully" };

  // res.render("index", data);
  res.send(data);
  console.log("Ping successfully");
});

// GET /cars
// !LIST Cars
app.get("/cars", (req, res) => {
  const cars = listcars();

  // res.render("cars/index", {
  //   cars,
  // });
  res.send({
    data: cars,
  });
});

// !Create /cars
app.post("/cars", (req, res) => {
  try {
    const dataCar = req.body;

    if (!(dataCar.brand && dataCar.model && dataCar.year)) return res.status(400).send("Data tidak lengkap");
    const car = createcar(req.body);
    // res.redirect(200, `/cars/${car.id}`);
    res.send({
      message: "Success create car",
      data: car,
    });
  } catch (err) {
    res.send({
      error: err.message,
    });
  }
});

// !Detail /cars/id
app.get("/cars/:id", (req, res) => {
  try {
    const idCar = req.params.id;
    const car = getcar(idCar);

    if (!car) return res.status(400).send("Car not found!");

    // res.render("cars/id/index", car);
    res.send({
      message: "Detail Car",
      data: car,
    });
  } catch (err) {
    res.send({
      error: err.message,
    });
  }
});

// !CREATE /cars/create (view)
app.get("/cars/create", (req, res) => {
  // res.render("cars/create");
  res.send({
    message: "Create cars page",
  });
});

// !UPDATE
// GET /cars/:id/update (view)
app.get("/cars/:id/update", (req, res) => {
  const idCar = req.params.id;
  const car = getcar(idCar);

  if (!car) return res.status(400).send("Car not found!");

  // res.render("cars/id/update", car);
  res.send({
    message: "Update page car",
  });
});

// !UPDATE /cars/:id
app.put("/cars/:id", (req, res) => {
  try {
    const idCar = req.params.id;
    const dataCar = req.body;

    if (!(dataCar.brand && dataCar.model && dataCar.year)) return res.status(400).send("Data tidak lengkap");

    const newCar = updateCarByPut(idCar, dataCar);

    if (!newCar) return res.status(400).send("car not found!");

    // res.redirect(200, `/cars/${car.id}`);
    res.send({
      message: "Update Successfully",
      data: newCar,
    });
  } catch (err) {
    res.send({
      error: err.message,
    });
  }
});

app.patch("/cars/:id", (req, res) => {
  try {
    const idCar = req.params.id;
    const dataCar = req.body;

    const newCar = updateCarByPatch(idCar, dataCar);
    const detailCar = getcar(idCar);

    if (!newCar) return res.status(400).send("car not found!");

    console.log(detailCar);

    // res.redirect(200, `/cars/${car.id}`);
    res.send({
      message: "Update Successfully",
      dataLama: detailCar,
      dataBaru: newCar,
    });
  } catch (err) {
    res.send({
      error: err.message,
    });
  }
});

// !DELETE /cars/:id
app.delete("/cars/:id", (req, res) => {
  const idCar = req.params.id;

  const car = getcar(idCar);
  if (!car) return res.status(400).send("Car not found!");

  deletecar(idCar);

  // res.redirect(200, "/cars");
  res.send({
    message: "Data deleted successfully",
  });
});

// // !API
// // index
// app.get("/api/v1/index", (req, res) => {
//   res.json({
//     message: "ping successfully",
//     data: req.params.body,
//   });
// });

// // list car
// app.get("/api/v1/cars", (req, res) => {
//   const cars = listcars();

//   if (!cars) return res.status(400).json({ message: "Get Data List Car Failed!" });

//   res.status(200).json(cars);
// });

// // detail car
// app.get("/api/v1/cars/:id", (req, res) => {
//   const car = getcar(req.params.id);

//   if (!car) return res.status(400).json({ message: "Car not found!" });

//   res.status(200).json({
//     message: "Success",
//     data: car,
//   });
// });

// // STORE car
// app.post("/api/v1/cars", (req, res) => {
//   const car = createcar(req.body);

//   if (!car) return res.status(400).json({ message: "Store Failed!" });

//   res.status(200).json({
//     message: "Success",
//     data: car,
//   });
// });

// // UPDATE car
// app.put("/api/v1/cars/:id", (req, res) => {
//   const car = getcar(req.params.id);

//   if (!car) return res.status(400).json({ message: "Update Failed!" });

//   const update = updateCar(car.id, req.body);

//   if (update) {
//     res.status(200).json({
//       message: "Success",
//       data: car,
//     });
//   } else {
//     return res.status(500).json({ message: "Update failed!" });
//   }
// });

// // DELETE car
// app.delete("/api/v1/cars/:id", (req, res) => {
//   const car = getcar(req.params.id);

//   if (!car) return res.status(400).send("Delete Failed!");

//   deletecar(car.id);

//   res.status(200).json({
//     message: "Success",
//     data: car,
//   });
// });

app.listen(PORT, () => {
  console.log(`Server nyala di http://localhost:${PORT}`);
});
