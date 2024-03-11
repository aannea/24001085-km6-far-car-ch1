function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  //console.log(cars);

  // Tempat penampungan hasil
  const result = [];
  // console.log(cars[0]);clear
  for (const i in cars) {
    if (cars[i].available === true && typeof cars[i].available === "boolean") {
      result.push(cars[i]);
    }
  }

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}