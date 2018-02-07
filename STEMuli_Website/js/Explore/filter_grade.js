
//Checks to see if checkbox is checked or not
function checkboxGrade(event, grade) {
  if (event.checked) {
    reAdd_grade(grade);
  } else {
    assignmentArray = assignmentArray.filter(removeByGrade, {
      grade: grade
    });
  }
  clearTables();
  filltruncTable();
  fillFilteredTable();
}
//Array interface
function removeByGrade(value, index, arr) {
  if (this.grade == value.grade) {
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
truncateArray=truncateArray.filter(removeTruncateGrade,{grade:grade});
}

function removeTruncateGrade(value,index,arr){
return this.grade!=value.grade
}
