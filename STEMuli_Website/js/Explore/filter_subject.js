
//Checks to see if checkbox is checked or not
function checkboxSubject(event, subject) {

  if (event.checked) {
    reAdd_subject(subject);
    clearTables();
    filltruncTable();
    console.log(truncateArray);
  } else {
    assignmentArray = assignmentArray.filter(removeBySubject, {
      subject: subject
    });

    clearTables();
    filltruncTable();
    fillFilteredTable();
  }
}
//Array interface
function removeBySubject(value, index, arr) {
  if (this.grade == value.grade) {
    truncateArray.push(value);
  }
  return this.subject != value.subject;
}

function reAdd_subject(subject) {
for(i=0;i<truncateArray.length;i++){
  if(subject==truncateArray[i].subject){
    assignmentArray.push(truncateArray[i]);
  }
}
truncateArray=truncateArray.filter(removeTruncate,{subject:subject});
}

function removeTruncateSubject(value,index,arr){
return this.subject!=value.subject
}
