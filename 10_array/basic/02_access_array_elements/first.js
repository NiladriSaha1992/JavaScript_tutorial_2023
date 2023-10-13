const projects = [
  ["John Doe", "Web application for a restaurent", "2023-11-10", 200.00],
  ["Mark Corianson", "Android application for an online food delivery service", "2023-12-05", 525.00],
  ["Anwar Ali", "Mobile application for a brokerage company", "2024-01-10", 356.20],
];

// find manually the project to be delivered to Mr. Mark Corianson, the date to be delivered on and the cost of the project.
// console.log(`The project to be delivered: ${projects[1][1]}\nDate to be delivered: ${projects[1][2]}\nCost of the project: $${projects[1][3]}`);

// find using inner-loop, the project to be delivered to Mr. Mark Corianson, the date to be delivered on and the cost of the project.

for(let i = 0; i< projects.length; i++){
  if(projects[i][0] === "Mark Corianson"){
    for(let j = 1; j < projects[i].length; j++){
      console.log(projects[i][j]);
    }
  }
}