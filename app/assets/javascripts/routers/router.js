/*global NewsReader*/

NewsReader.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "feedIndex",
    "feeds/:id": "feedShow"
  },
  
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },
  
  feedIndex: function(){
    
    var feeds = NewsReader.Collections.feeds;
    feeds.fetch();
    var indexView = new NewsReader.Views.FeedIndex({
      collection: feeds
    });
    this.$rootEl.html(indexView.render().$el);
  },
  
  feedShow: function(id) {
    var feed = NewsReader.Collections.feeds.getOrFetch(id);
    // Feed show page is actually entries index view. 
    var feedView = new NewsReader.Views.EntryIndex({ 
      model: feed
    });
    this.$rootEl.html(feedView.render().$el);
  }
  
});