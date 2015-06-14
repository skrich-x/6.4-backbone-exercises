var List = Backbone.Model.extend({
  idAttribute: '_id',

  defaults:{
    'title': '',
  },

});

var ListCollection = Backbone.Collection.extend({
  model: Post,
  url:'http://tiny-lasagna-server.herokuapp.com/collections/kyleBlog'
});

console.log("working");

export default {List, ListCollection};
