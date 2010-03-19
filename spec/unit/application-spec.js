describe('Application', function() {

  describe('.init', function() {
    it('should call renderFeeds', function() {
      Application.should.receive('renderFeeds', 'once');
      Application.init();
    });
  });

  describe('.renderFeeds', function() {

    before_each(function() {
      function renderMock(options) {
        urls.push(options.url);
        renderTargets.push(options.renderTo);
      }
      ActualApplication = Application;
      Application = {};
      stub(Application, 'FeedManager').and_return({render: renderMock});
      feeds = elements(fixture('feeds'));
      urls = [];
      renderTargets = [];
    });

    after_each(function() {
      Application = ActualApplication;
    });

    it('should call render with all .feed data-urls', function() {
      ActualApplication.renderFeeds(feeds);
      urls.should.include('http://example.com');
      urls.should.include('http://example.org');
    });

    it('should call render with all .feed elements', function() {
      ActualApplication.renderFeeds(feeds);
      renderTargets.should.have_length(2);
    });
  });

});
