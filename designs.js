// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function() {
  makeGrid();
  return false;
});

function makeGrid() {
// Creates a grid for the pixel maker
  const inputHeight = parseInt($('#input_height').val());
  const inputWidth = parseInt($('#input_width').val());
  let canvas = "";

  for (let i = 0; i < inputHeight; i++) {
    canvas += "<tr>";
    for (let k = 0; k < inputWidth; k++) {
      canvas += "<td></td>";
    }
    canvas += "</tr>";
  }

  $('#pixel_canvas').html(canvas);
  canvas="";
}

//changes colour when a square is clicked and removes colour when clicked again
$(document).on("click", "#pixel_canvas td", function() {
  const colorPicker = $('#colorPicker').val();
  if ($(this).hasClass('checked')) {
    $(this).css('background-color', 'inherit');
  } else {
    $(this).css('background-color', colorPicker);
    $(this).addClass('checked');
  }
});
