function checkedStudent(){
  var student = document.getElementById('studentDiv');
  var teacher = document.getElementById('teacherDiv');
  var corp = document.getElementById('corpDiv');
  var info = document.getElementById('userInfo');
      if (student.style.display === "none") {

          teacher.style.display = "none";
          corp.style.display = "none";
          info.style.display="flex";
          student.style.display = "block";
      } else {
          student.style.display = "none";
      }
}

function checkedTeacher(){
  var student = document.getElementById('studentDiv');
  var teacher = document.getElementById('teacherDiv');
  var corp = document.getElementById('corpDiv');
  var info = document.getElementById('userInfo');
      if (teacher.style.display === "none") {
          corp.style.display = "none";
          student.style.display = "none";
          info.style.display="flex";
          teacher.style.display = "block";
      } else {
          teacher.style.display = "none";
      }
}

function checkedCorp(){
  var student = document.getElementById('studentDiv');
  var teacher = document.getElementById('teacherDiv');
  var corp = document.getElementById('corpDiv');
  var info = document.getElementById('userInfo');
      if (corp.style.display === "none") {
          student.style.display = "none";
          teacher.style.display = "none";
          info.style.display="flex";
          corp.style.display = "block";
      } else {
          corp.style.display = "none";
      }
}
