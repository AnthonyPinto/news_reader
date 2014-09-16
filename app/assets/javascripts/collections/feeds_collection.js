/*global NewsReader*/

NewsReader.Collections.Feeds = Backbone.Collection.extend({
  model: NewsReader.Models.Feed,
  url: "api/feeds",
  
  getOrFetch: function (id) {
    var model = this.get(id);
    if (!model) {
      model = new NewsReader.Models.Feed({id: id});
      model.fetch({
        sucess: function () {
          this.add(model);
        }.bind(this)
      });
    } else {
      model.fetch();
    }
    return model;
  }
});

NewsReader.Collections.feeds = new NewsReader.Collections.Feeds();
// NewsReader.Collections.feeds.fetch();