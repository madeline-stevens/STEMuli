//Array that will store all assignments posted
let assignmentArray = [];
let truncateArray = [];

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
};

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

//Checks to see if checkbox is checked or not
function checkboxGrade(event, grade) {
  if (event.checked) {
    reAdd_grade(grade);
  } else {
    assignmentArray = assignmentArray.filter(removeByGrade, {
      grade: grade
    });
  }

  document.getElementById("demo").innerHTML = "Truncate Array: \n" + JSON.stringify(truncateArray);
  document.getElementById("demo1").innerHTML = "Current Filtered items: " + JSON.stringify(assignmentArray);
}
//Array interface
function removeByGrade(value, index, arr) {
  if (this.grade == value.grade) {
    truncateArray.push(value);
  }
  return this.grade != value.grade;
}

function reAdd_grade(grade) {
  for (i = 0; i < truncateArray.length; i++) {
    if (grade == truncateArray[i].grade) {
      assignmentArray.push(truncateArray[i]);
    }
  }
}

function checkboxSubject(event, subject) {
  if (event.checked) {
    reAdd_subject(subject);
  } else {
    assignmentArray = assignmentArray.filter(removeBySubject, {
      subject: subject
    });
  }

  console.log("Truncate Array: \n" + JSON.stringify(truncateArray, null, 4));
  console.log("Current Filtered items: " + JSON.stringify(assignmentArray, null, 4));
}
//Array interface
function removeBySubject(value, index, arr) {
  if (this.subject == value.subject) {
    truncateArray.push(value);
  }
  console.log(this.subject + " does not equal " + value.subject);
  return this.subject != value.subject;
}

function reAdd_subject(subject) {
  for (i = 0; i < truncateArray.length; i++) {
    if (subject == truncateArray[i].subject) {
      assignmentArray.push(truncateArray[i]);
    }
  }
}

function clicked() {
  table = document.getElementById("arraytable");
  //row
  for (i = 1; i < assignmentArray.length; i++) {
    console.log(i);
    for (x = 0; x<table.rows[i].cells.length; x++) {
      table.rows[i].cells[0].innerHTML = assignmentArray[i-1].idNum;
      table.rows[i].cells[1].innerHTML = assignmentArray[i-1].grade;
      table.rows[i].cells[2].innerHTML = assignmentArray[i-1].subject;
      table.rows[i].cells[3].innerHTML = assignmentArray[i-1].topic;
    }
  }
}
