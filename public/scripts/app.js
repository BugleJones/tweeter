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
}

$(function() {
  function createTweetElement(tweetObject) {
    const $tweet = $("<article>").addClass("tweet");
    $(".all-tweets").append($tweet);

    const img = $("<img>").attr("src", tweetObject.user.avatars.small);
    const user = $("<p>").text(tweetObject.user.name);
    const handle = $("<p>").text(tweetObject.user.handle);

    const $header = $("<header>")
      .append(img)
      .append(user)
      .append(handle);

    $tweet.append($header);

    const $tweetContent = $("<div>").addClass("tweet-content");
    $(".tweet-content").append($tweetContent);

    const content = $("<p>").text(tweetObject.content.text);

    const $content = $("<p>")
      .append(content);

    $tweet.append($content);

    





      // .append($content);
      // .append($footer);

      $(".all-tweets").append($tweet);
  }

  createTweetElement(tweetData);

});
