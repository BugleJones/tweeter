var $;

var tweetData = {
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

$(function() {
  function createTweetElement(tweetObject) {
    const $tweet = $("<article>").addClass("tweet");

    const img = $("<img>").attr("src", tweetObject.user.avatars.small);
    const user = $("<p>").text(tweetObject.user.name);
    const handle = $("<p>").text(tweetObject.user.handle);

    const $header = $("<header>").append(img, user, handle);

    $tweet.append($header);

    const content = $("<p>").addClass("tweet-detail").text(tweetObject.content.text);
    const $content = $("<div>").addClass("tweet-content")
      .append(content);

    $tweet.append($content);

    const createdAt = $("<p>").text(Date(tweetObject.user.created_at))
    const flagIcon = $("<i>").addClass("fa fa-exclamation-triangle");
    const retweetIcon = $("<i>").addClass("fa fa-retweet");
    const favouriteIcon = $("<i>").addClass("fa fa-star");

    const $footerTime = $("<div>").addClass("time-ago").append(createdAt);
    const $footerIcons = $("<div>").addClass("icons").append(flagIcon, retweetIcon, favouriteIcon);

    const $footer = $("<footer>")
      .append($footerTime)
      .append($footerIcons)

    $tweet.append($footer);

    $(".all-tweets").append($tweet);
  }

  createTweetElement(tweetData);

});
