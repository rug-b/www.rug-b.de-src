describe 'Application'

  describe '.init'
    it 'should call renderFeeds'
      Application.should.receive('renderFeeds', 'once')
      Application.init()
    end
  end
  
  describe '.renderFeeds'
    before_each
      function renderMock(options) {
        urls.push(options.url);
        renderTargets.push(options.renderTo);
      }
      ActualApplication = Application
      Application = {}
      Application.stub('FeedManager').and_return({render: renderMock})
      feeds = elements(fixture('feeds'))
      urls = []
      renderTargets = []
    end

    after_each
      Application = ActualApplication
    end

    it 'should call render with all .feed data-urls'
      ActualApplication.renderFeeds(feeds)
      urls.should.include 'http://example.com'
      urls.should.include 'http://example.org'
    end
    
    it 'should call render with all .feed elements'
      ActualApplication.renderFeeds(feeds)
      renderTargets.should.have_length 2
    end
  end
  
end