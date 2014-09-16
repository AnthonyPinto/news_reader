/*global NewsReader JST*/

NewsReader.Views.FeedIndex = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },
  
  template: JST['feeds/index'],
  
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