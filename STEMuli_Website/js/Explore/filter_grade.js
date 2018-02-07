
//Checks to see if checkbox is checked or not
function checkboxGrade(event, grade) {

  if (event.checked) {
    reAdd_grade(grade);
    clearTables();
    filltruncTable();
    fillFilteredTable();
  } else {
    assignmentArray = assignmentArray.filter(removeByGrade, {
      grade: grade
    });

    clearTables();
    filltruncTable();
    fillFilteredTable();
  }
}
//Array interface
function removeByGrade(value, index, arr) {
  if (this.grade == value.grade) {
    console.log("Pushing "+value.idNum);
    truncateArray.push(value);
  }
  return this.grade != value.grade;
}

function reAdd_grade(grade) {
for(i=0;i<truncateArray.length;i++){
  if(grade==truncateArray[i].grade){
    assignmentArray.push(truncateArray[i]);
  }
}
truncateArray=truncateArray.filter(removeTruncate,{grade:grade});
}

function removeTruncate(value,index,arr){
return this.grade!=value.grade
}
