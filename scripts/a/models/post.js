var Post = Backbone.Model.extend({
  idAttribute: '_id',

  defaults: function() {
    title: '';
    body: '';
    created_at: new Date();
  }
});

var PostCollection = Backbone.Collection.extend({
    model: Post,
    url:'http://tiny-lasagna-server.herokuapp.com/collections/kyleBlog'
});

console.log(Post);

export default {Post, PostCollection};
