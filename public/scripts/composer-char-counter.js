$(document).ready(function () {
  const textBox = ".new-tweet textarea";
  function updateCount() {
    let remaining = 140 - $(this).val().length;
    $(".counter").text(remaining);
  }
  $(textBox).change(updateCount);
  $(textBox).keyup(updateCount);

});
