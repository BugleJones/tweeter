var $;

// var tweetData = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": {
//         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//       },
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": {
//         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
//         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
//         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
//       },
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   },
//   {
//     "user": {
//       "name": "Johann von Goethe",
//       "avatars": {
//         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
//         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
//         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
//       },
//       "handle": "@johann49"
//     },
//     "content": {
//       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
//     },
//     "created_at": 1461113796368
//   }
// ];

$(function() {

  const handlers = {
    successfulTweet: function (event) {
      event.preventDefault();
      const tweetContent = $(".submit-tweet").serialize();
      $.post("/tweets", tweetContent, function () {
        $("textarea").val("");
        loadTweets();
      });
    },
  };
  $(".submit-tweet").submit(handlers.successfulTweet);

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

  // renderTweets(tweetData);

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
