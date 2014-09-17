/*global NewsReader JST*/

NewsReader.Views.FeedIndex = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, "sync destroy", this.render);
  },
  
  events: {
    "click button.delete-feed": "deleteFeed"
  },
  
  template: JST['feeds/index'],
  
  deleteFeed: function (event) {
    var id = $(event.currentTarget).data("feed-id");
    var feed = this.collection.get(id);
    feed.destroy({wait: true});
  },
  
  tagName: 'ul',
  
  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.collection.each(function (feed) {
      var view = new NewsReader.Views.ShowFeed({model: feed});
      this.$el.append(view.render().$el);
    }.bind(this));
    return this;
  }
});