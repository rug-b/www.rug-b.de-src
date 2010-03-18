var Application = Application || {};

Application.init = function () {
  Application.renderFeeds();
};

Application.renderFeeds = function (domRoot) {
  domRoot = domRoot || window.document;
  var feedManager = new Application.FeedManager;
  $(domRoot).find('.feed').each(function () {
    var url = $(this).attr('data-url');
    if (url) {
      feedManager.render({
        url: url,
        renderTo: this
      });
    }
  });
};

$(Application.init);
