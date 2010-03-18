describe 'FeedManager'
  before_each
    google = { feeds: {} }
    stub(google.feeds, 'LINK_TARGET_BLANK').and_return('LINK_TARGET_BLANK')
    feedManager = new Application.FeedManager
  end
  
  describe 'initialization'
    it 'should create an instance of FeedManager'
      feedManager.should.not_be_null
    end
  end
    
  describe '.render'
    before_each
      // FeedControl mock w/ exspectations
      google.feeds.FeedControl = function() {
        return {
          setNumEntries: function (count) {
            setNumEntriesAssert = (count == 999);
          },
          setLinkTarget: function (target) {
            setLinkTargetAssert = (target == 'MY-TARGET');
          },
          addFeed: function (url, title) {
            addFeedAssert = (url == 'MY-URL' && title == 'MY-TITLE');
          },
          draw: function (renderTo) {
            drawAssert = (renderTo == 'MY-ELEMENT');
          }
        };
      };
    end

    it 'should call setNumEntries with the given config value'
      feedManager.render({numEntries: 999})
      setNumEntriesAssert.should.be_true
    end

    it 'should call setLinkTarget with the given config value'
      feedManager.render({linkTarget: 'MY-TARGET'})
      setLinkTargetAssert.should.be_true
    end

    it 'should call addFeed with the given config values'
      feedManager.render({url: 'MY-URL', title: 'MY-TITLE'})
      addFeedAssert.should.be_true
    end

    it 'should call draw with the given config value'
      feedManager.render({renderTo: 'MY-ELEMENT'})
      drawAssert.should.be_true
    end
  end
end