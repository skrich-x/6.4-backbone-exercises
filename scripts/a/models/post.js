var Post = Backbone.Model.extend({
  urlRoot:'http://tiny-lasagna-server.herokuapp.com/collections/blog',
  idAttribute: '_id',

  defaults: {

    title: 'title',
    body: 'body'
  },


});
console.log(Post);

export default Post;
