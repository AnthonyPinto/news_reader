/*global NewsReader JST*/

NewsReader.Views.EntryIndex = Backbone.View.extend({
  initialize: function () {
    this.collection = this.model.entries();
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "sync", this.render);
  },
  
  events: {
    "click button.refresh": "refresh"
  },
  
  template: JST["entries/index"],
  
  render: function () {
    var content = this.template({feed: this.model});
    this.$el.html(content);
    
    this.collection.each (function (entry) {
      var showView = new NewsReader.Views.ShowEntry({model: entry});
      showView = showView.render();
      this.$el.find("ul").prepend(showView.$el);
    }.bind(this));

    return this;
  },
  
  refresh: function () {
    this.model.fetch();
  }
  
});