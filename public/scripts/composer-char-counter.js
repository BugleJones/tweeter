$(document).ready(function () {
  const characterCount = ".new-tweet textarea";
  function updateCount() {
    let remaining = 140 - $(this).val().length;
    $("form").find("span").text(remaining);
  }
  $(characterCount).change(updateCount);
  $(characterCount).keyup(updateCount);

  if (characterCount < 0) {
    $("form").find("span").addClass("tooManyCharacters");
  } else {
    $("form").find("span").removeClass("tooManyCharacters");
  }
});
