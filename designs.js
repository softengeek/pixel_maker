// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(e) {
  e.preventDefault();
  makeGrid();
});

function makeGrid() {
// Creates a grid for the pixel maker
  const table = document.getElementById('pixel_canvas');
  const inputHeight = parseInt($('#input_height').val());
  const inputWidth = parseInt($('#input_width').val());
  for (let i = 0; i < inputHeight; i++) {
    const row = table.insertRow(i);
    for (let k = 0; k < inputWidth; k++) {
      const cell = row.insertCell(k);
      //changes colour when a square is clicked and removes colour when clicked again
      cell.addEventListener('click', function() {
        const colorPicker = $('#colorPicker').val();
        if ($(this).hasClass('checked')) {
          $(this).css('background-color', 'inherit');
          $(this).removeClass('checked');
        } else {
          $(this).css('background-color', colorPicker);
          $(this).addClass('checked');
        }
      });
    }
  }
}
