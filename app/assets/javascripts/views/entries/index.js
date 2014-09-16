/*global NewsReader JST*/

NewsReader.Views.EntryIndex = Backbone.View.extend({
  initialize: function () {
    this.collection = this.model.entries();
    this.listenTo(this.collection, "sync", this.render);
    
  },
  
  template: JST["entries/index"],
  
  render: function () {
    var $heading = $("<h1></h1>");
    $heading.val(this.model.escape('title'));
    this.$el.append($heading);
    
    var $ul = $("<ul></ul>");
    
    this.collection.each (function (entry) {
      var showView = new NewsReader.Views.ShowEntry({model: entry});
      showView = showView.render();
      $ul.append(showView.$el);
    });
    
    this.$el.append($ul);
    return this;
  }
  
});