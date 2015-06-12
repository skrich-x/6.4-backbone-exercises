export default Backbone.View.extend({
  tagName: 'form',
  className: 'user-form',

  template: JST.b.index,

  events: {
    'click .form-submit': 'addUser',
  },

  initialize: function(){
    this.render();
  },

  render: function(){
    $('body').prepend(this.$el);
    this.$el.html(this.template(this.collection.toJSON()));
  },

  addUser: function(e){
    e.preventDefault();
    var first = this.$('.firstName').val();
    var last = this.$('.lastName').val();
    var address = this.$('.address').val();
    var phoneNumber = this.$('phoneNumber').val();
    this.collection.create({
      first: first,
      last: last,
      address: address,
      phoneNumber: phoneNumber
    });
  }
});
