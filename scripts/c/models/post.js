var Blog = Backbone.Model.extend({
  idAttribute: '_id',

  defaults: function() {
    title: '';
    body: '';
    created_at: new Date();
  }
});

var BlogCollection = Backbone.Collection.extend({
  model: Blog,
  url:'http://tiny-lasagna-server.herokuapp.com/collections/kyleBlog'
});

console.log("i work");

export default {Blog, BlogCollections};
