//Array that will store all assignments posted
let assignmentArray = [];
let truncateArray = [];
filterTable = document.getElementById("filterTable");
truncTable = document.getElementById("truncTable");
function clearTables(){
  for(x=0;x<filterTable.rows.length;x++){
    filterTable.rows[x].cells[0].innerHTML = "";
    filterTable.rows[x].cells[1].innerHTML = "";
    filterTable.rows[x].cells[2].innerHTML = "";
    filterTable.rows[x].cells[3].innerHTML = "";
  }
  for(x=0;x<truncTable.rows.length;x++){
    truncTable.rows[x].cells[0].innerHTML = "";
    truncTable.rows[x].cells[1].innerHTML = "";
    truncTable.rows[x].cells[2].innerHTML = "";
    truncTable.rows[x].cells[3].innerHTML = "";
  }

}
function fillFilteredTable() {
  for(i=0; i<assignmentArray.length;i++){
    filterTable.rows[i+1].cells[0].innerHTML = assignmentArray[i].idNum;
    filterTable.rows[i+1].cells[1].innerHTML = assignmentArray[i].grade;
    filterTable.rows[i+1].cells[2].innerHTML = assignmentArray[i].subject;
    filterTable.rows[i+1].cells[3].innerHTML = assignmentArray[i].topic;
}
}
function filltruncTable(){
  for(i=0; i<truncateArray.length;i++){
    truncTable.rows[i+1].cells[0].innerHTML = truncateArray[i].idNum;
    truncTable.rows[i+1].cells[1].innerHTML = truncateArray[i].grade;
    truncTable.rows[i+1].cells[2].innerHTML = truncateArray[i].subject;
    truncTable.rows[i+1].cells[3].innerHTML = truncateArray[i].topic;
  }
}
function addAssignment(id, grade, subject, topic) {
  var assignment = {
    idNum: id,
    grade: grade,
    subject: subject,
    topic: topic
  };
  assignmentArray.push(assignment);
}
window.onload = function() {
  fillAssignmentArray();
  fillFilteredTable();
  filltruncTable();
}

function fillAssignmentArray() {
  //Test data for filtering
  addAssignment(0, "freshman", "Math", "Algebra");
  addAssignment(1, "freshman", "Science", "Earth and Space Science");
  addAssignment(2, "sophmore", "Social Studies", "Global Connections");
  addAssignment(3, "sophmore", "Language Arts", "College and Career Readiness Anchor Standards for Language");
  addAssignment(4, "junior", "Math", "Functions");
  addAssignment(5, "junior", "Math", "Geometry");
  addAssignment(6, "senior", "Math", "Statistics and Probability");
  addAssignment(7, "senior", "Math", "Number and Quantity");
}
