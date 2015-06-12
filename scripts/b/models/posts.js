var User = Backbone.Model.extend({
  idAttribute: '_id',

  defaults: function() {
    firstName: '';
    lastName: '';
    address: '';
    phone: '';
    created_at: new Date();
    }
});

var UserCollection = Backbone.Collection.extend({
    model: User,
    url:'http://tiny-lasagna-server.herokuapp.com/collections/kyleBlog'
});

console.log(User);

export default { User, UserCollection};
