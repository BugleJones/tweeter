var $;

var tweetData =
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  };
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
  function createTweetElement(tweetObject) {
    const $tweet = $("<article>").addClass("tweet");
    $(".all-tweets").append($tweet);

    //Tweet Header//
    const img = $("<img>").attr("src", tweetObject.user.avatars.small);
    const handle = $("<p>").addClass("handle").text(tweetObject.user.handle);
    const user = $("<p>").addClass("user").text(tweetObject.user.name);

    const $header = $("<header>").append(img, handle, user);

    $tweet.append($header);

    //Tweet Content//
    const content = $("<p>").addClass("tweet-detail").text(tweetObject.content.text);
    const $content = $("<div>").addClass("tweet-content")
      .append(content);

    $tweet.append($content);

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

  }

  createTweetElement(tweetData);
  //
  // function renderTweets(tweetObject) {
  //   $(tweetObject).each(tweetData, function () {
  //     createTweetElement();
  //   });
  //   renderTweets(tweetData);
  //
  // };

});
