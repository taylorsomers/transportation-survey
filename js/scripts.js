// Business Logic:



// End Business Logic

// UI Logic

$(document).ready(function() {
  $("form#transportation_survey").submit(function() {
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function() {
      const workTransportationMode = $(this).val();
      $("#work-responses").append(workTransportationMode + "<br>")
    });
    $("#fun-responses").show();
    $("input:checkbox[name=fun-transportation]:checked).each(function() {
      const funTransportationMode = $(this).val();
      $("#fun-responses").append(funTransportationMode + "<br>");
    });
    $("#transportation_survey").hide();
  });
});

// End UI Logic