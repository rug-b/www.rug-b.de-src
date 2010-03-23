describe('FeedManager', function() {

  before_each(function() {
    feedManager = new Application.FeedManager;
  });

  describe('initialization', function() {
    it('should create an instance of FeedManager', function() {
      feedManager.should.not_be_null;
    });
  });

  describe('.render', function() {

    before_each(function() {
      // FeedControl mock
      google.feeds.FeedControl = function() {};
      feedControlMock = google.feeds.FeedControl.prototype = {
        setNumEntries: function() {},
        setLinkTarget: function() {},
        addFeed: function() {},
        draw: function() {}
      };
    });

    it('should call setNumEntries with the given config value', function() {
      feedControlMock.should.receive('setNumEntries').with_args(999);
      feedManager.render({numEntries: 999});
    });

    it('should call setLinkTarget with the given config value', function() {
      feedControlMock.should.receive('setLinkTarget').with_args('MY-TARGET');
      feedManager.render({linkTarget: 'MY-TARGET'});
    });

    it('should call addFeed with the given config values', function() {
      feedControlMock.should.receive('addFeed').with_args('MY-URL', 'MY-TITLE');
      feedManager.render({url: 'MY-URL', title: 'MY-TITLE'});
    });

    it('should call draw with the given config value', function() {
      feedControlMock.should.receive('draw').with_args('MY-ELEMENT');
      feedManager.render({renderTo: 'MY-ELEMENT'});
    });

  });
});
