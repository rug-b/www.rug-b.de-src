$(function () {
  var feedManager = new Application.FeedManager;

  $('.feed').each(function () {
    var url = $(this).attr('data-url');
    if (url) {
      feedManager.render({
        url: url,
        renderTo: this
      });
    }
  });
});
