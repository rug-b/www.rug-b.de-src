var Application = Application || {};

Application.FeedManager = function(givenConfig) {
  var defaultConfig = {
    // available options
    url: null,
    renderTo: null,
    title: null,
    linkTarget: google.feeds.LINK_TARGET_BLANK,
    numEntries: 4
  };
  
  if (givenConfig) {
    $.extend(defaultConfig, givenConfig);
  }
  
  return {
    // draw feedControl into element specified by renderTo
    // an optional config will override both the defaultConfig and givenConfig
    render: function(config) {
      config = config || {};
      var feedControl = new google.feeds.FeedControl();

      feedControl.setNumEntries(config.numEntries || defaultConfig.numEntries);
      feedControl.setLinkTarget(config.linkTarget || defaultConfig.linkTarget);
      feedControl.addFeed(config.url || defaultConfig.url, config.title || defaultConfig.title);
      feedControl.draw(config.renderTo || defaultConfig.renderTo);
    }
  };
};
