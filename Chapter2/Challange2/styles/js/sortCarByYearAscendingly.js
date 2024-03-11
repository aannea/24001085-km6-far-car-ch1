function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];
  // Tulis code-mu disini
  let len = result.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (result[j].year > result[j + 1].year) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}

// // Sort select
// sortSelect.addEventListener("change", (event) => {
//   event.preventDefault();

//   // Get students data
//   let studentsData = [...students.searchStudents(searchInput.value)];

//   // Logic to ascending or descending the data
//   const selectedSort = event.target.value;
//   if (selectedSort == "ascending") {
//       studentsData = studentsData.sort((a, b) => {
//           const nameA = a.name.toUpperCase();
//           const nameB = b.name.toUpperCase();
//           if (nameA < nameB) {
//               return -1;
//           }
//           if (nameA > nameB) {
//               return 1;
//           }

//           return 0;
//       });
//   } else if (selectedSort == "descending") {
//       studentsData = studentsData.sort((a, b) => {
//           const nameA = a.name.toUpperCase();
//           const nameB = b.name.toUpperCase();
//           if (nameA > nameB) {
//               return -1;
//           }
//           if (nameA < nameB) {
//               return 1;
//           }

//           return 0;
//       });
//   }

//   // Make html content that will be displayed
//   let studentCardWithStudentsData = "";
//   studentsData.map((student) => {
//       studentCardWithStudentsData += `<div class="col-md-4">
//                   <div class="card">
//                       <div class="card-body">
//                           <h5 class="card-title">${student.name}</h5>
//                           <p class="card-text">${student.address.city}, ${student.address.province}</p>
//                       </div>
//                   </div>
//               </div>`;
//   });
//   studentCard.innerHTML = studentCardWithStudentsData;
// });
