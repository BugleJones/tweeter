var $;

$(function() {

  const addingTweets = {
    successfulTweet: function (event) {
      event.preventDefault();
      const input = $("textarea");
      if (input.val().length > 140) {
        $(".submit-tweet").prepend($("<div></div>").addClass("tweet-error").text(`Slow down there, partner,
          tweet away but keep it below 140`).fadeIn(200).fadeOut(4000));
        return;
      }
      if (!input.val()) {
        $(".submit-tweet").prepend($("<div></div>").addClass("tweet-error").text("I couldn't catch that, try again?").fadeIn(200).fadeOut(4000));
        return;
      }
      if (input.val() === null) {
        $(".submit-tweet").prepend($("<div></div>").addClass("tweet-error").text("I couldn't catch that, try again?").fadeIn(200).fadeOut(4000));
        return;
      }

      const tweetContent = $(".submit-tweet").serialize();
      $.post("/tweets", tweetContent, function () {
        $("textarea").val("");
        loadTweets();
      });
    },
  };
  $(".submit-tweet").submit(addingTweets.successfulTweet);

  function loadTweets() {
    $.ajax({
      url: "/tweets",
      method: "GET",
      data: $(".submit-tweet").serialize(),
      dataType: "json",
      success: function (data) {
        renderTweets(data);
      }
    });
  }
  loadTweets();

  function renderTweets(tweetsArray) {
    $(".all-tweets").empty();
    tweetsArray.forEach(tweetData => {
      $(".all-tweets").prepend(createTweetElement(tweetData));
    });
  }

  // function timeSince(date) {
  //   var seconds = Math.floor((new Date() - date) / 1000);
  //   var interval = Math.floor(seconds / 31536000);
  //   if (interval > 1) {
  //     return interval + " years";
  //   }
  //   interval = Math.floor(seconds / 2592000);
  //   if (interval > 1) {
  //     return interval + " months";
  //   }
  //   interval = Math.floor(seconds / 86400);
  //   if (interval > 1) {
  //     return interval + " days";
  //   }
  //   interval = Math.floor(seconds / 3600);
  //   if (interval > 1) {
  //     return interval + " hours";
  //   }
  //   interval = Math.floor(seconds / 60);
  //   if (interval > 1) {
  //     return interval + " minutes";
  //   }
  //   return Math.floor(seconds) + " seconds";
  // }
  //   var aDay = 24*60*60*1000;

  function createTweetElement(tweetObject) {
    const $tweet = $("<article>").addClass("tweet");

    //Tweet Header//
    const $img = $("<img>").addClass("avatar").attr("src", tweetObject.user.avatars.small);
    const $handle = $("<p>").addClass("handle").text(tweetObject.user.handle);
    const $user = $("<p>").addClass("user").text(tweetObject.user.name);

    const $header = $("<header>")
      .append($img)
      .append($user)
      .append($handle);

    $tweet.append($header);

    //Tweet Content//
    const $contentDetail = $("<p>").addClass("tweet-detail").text(tweetObject.content.text);
    const $contentContainer = $("<div>").addClass("tweet-content").append($contentDetail);

    $tweet.append($contentContainer);

    //Tweet Footer//
    const createdAt = $("<p>").text(Date(tweetObject.user.created_at));
    const flagIcon = $("<i>").addClass("fa fa-exclamation-triangle");
    const retweetIcon = $("<i>").addClass("fa fa-retweet");
    const favouriteIcon = $("<i>").addClass("fa fa-star");

    const $footerTime = $("<div>").addClass("time-ago").append(createdAt);
    const $footerIcons = $("<div>").addClass("icons").append(flagIcon, retweetIcon, favouriteIcon);

    const $footer = $("<footer>")
      .append($footerTime)
      .append($footerIcons);

    $tweet.append($footer);
    return $tweet;
  }
});
