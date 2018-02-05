var FormStuff = {

  init: function() {
    this.applyConditionalRequired();
    this.bindUIActions();
  },

  bindUIActions: function() {
    $("input[type='radio'], input[type='checkbox']").on("change", this.applyConditionalRequired);
  },

  applyConditionalRequired: function() {

    (".require-if-active").each(function() {
      var el = $(this);
      if ($(el.data("require-pair")).is(":checked")) {
        el.prop("required", true);
      } else {
        el.prop("required", false);
      }
    });

  }

};

FormStuff.init();

function checkedStudent(){

  var x = document.getElementById('checked');
      if (x.style.display === "none") {
          x.style.display = "block";
      } else {
          x.style.display = "none";
      }
}

function checkedTeacher(){

  var x = document.getElementById('checked');
      if (x.style.display === "none") {
          x.style.display = "block";
      } else {
          x.style.display = "none";
      }
}

function checkedCorp(){

  var x = document.getElementById('checked');
      if (x.style.display === "none") {
          x.style.display = "block";
      } else {
          x.style.display = "none";
      }
}
