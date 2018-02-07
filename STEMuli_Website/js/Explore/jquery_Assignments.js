//Array that will store all assignments posted
let assignmentArray = [];
let truncateArray = [];
window.onload = function() {
  $.getJSON("/JSON/Assignments.json", function(json) {
       console.log(json); // access the response object
       console.log(json.Assignments); // access the array
   });
}
