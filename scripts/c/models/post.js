var Blog = Backbone.Model.extend({
  idAttribute: '_id',

  defaults: function() {
    title: '';
    body: '';
    created_at: new Date();
  }
});

var BlogCollections = Backbone.Collection.extend({
  model: Blog,
  url:'http://tiny-lasagna-server.herokuapp.com/collections/posts'
});

console.log("i work");

export default {Blog, BlogCollections};
