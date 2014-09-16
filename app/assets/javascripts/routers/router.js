/*global NewsReader*/

NewsReader.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "feedIndex",
    "api/feeds/:id": "feedShow"
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
  
  feedShow: function() {
    
  }
  
});