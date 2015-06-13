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

console.log(List);

export default {List, ListCollection};
