var List = Backbone.Model.extend({
  idAttribute: '_id',

  defaults:{
    'title': '',
  },

});

var ListCollection = Backbone.Collection.extend({
  model: List,
  url:'http://tiny-lasagna-server.herokuapp.com/collections/posts'
});

console.log("working");

export default {List, ListCollection};
