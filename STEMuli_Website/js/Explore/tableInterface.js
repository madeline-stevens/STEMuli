//Array that will store all assignments posted
let assignmentArray = [];
let truncateArray = [];
window.onload = function() {
  fillAssignmentArray();
}

function fillAssignmentArray() {
  //Test data for filtering
  addAssignment(0, "Freshman", "Math", "Algebra");
  addAssignment(1, "Freshman", "Science", "Earth and Space Science");
  addAssignment(2, "Sophmore", "Social Studies", "Global Connections");
  addAssignment(3, "Sophmore", "Language Arts", "College and Career Readiness Anchor Standards for Language");
  addAssignment(4, "Junior", "Math", "Functions");
  addAssignment(5, "Junior", "Math", "Geometry");
  addAssignment(6, "Senior", "Math", "Statistics and Probability");
  addAssignment(7, "Senior", "Math", "Number and Quantity");
}
