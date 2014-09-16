/*global NewsReader JST*/

NewsReader.Views.ShowFeed = Backbone.View.extend({
  template: JST["feeds/show"],
  
  tagName: 'li',
  render: function () {
    var content = this.template({feed: this.model});
    this.$el.html(content);
    return this;
  }
});