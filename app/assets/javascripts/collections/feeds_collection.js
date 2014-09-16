/*global NewsReader*/

NewsReader.Collections.Feeds = Backbone.Collection.extend({
  model: NewsReader.Models.Feed,
  url: "api/feeds"
});

NewsReader.Collections.feeds = new NewsReader.Collections.Feeds();
// NewsReader.Collections.feeds.fetch();