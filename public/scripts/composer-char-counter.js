$(document).ready(function () {
  const textBox = $(".new-tweet textarea");
  $(textBox).on("change", function () {
    console.log("Changing tweet");
  })
});
