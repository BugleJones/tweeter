var $;

$(function() {
  const handlers = {
    successfulTweet: function () {
      event.preventDefault();
      const tweetContent = $(".submit-tweet").serialize();
      $.post("/tweets", tweetContent, function (result) {
        console.log(result);
      });
    },
  };
  $(".submit-tweet").on("click", "input", handlers.successfulTweet);
});
