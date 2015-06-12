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

var UserFormCollection = Backbone.Collection.extend({
    model: User,
    url:'http://tiny-lasagna-server.herokuapp.com/collections/b_user_form'
});

console.log(User);

export default { Post, Post}
