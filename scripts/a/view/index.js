export default Backbone.View.extend({
  tagName: 'form',
  className: "post-form",

  template: JST.a.index,

  events: {
    'click .form-submit': 'addPost',
  },

  initialize: function() {
    this.render();
  },

  render: function(){
    $('body').prepend(this.$el);
    this.$el.html(this.template(this.collection.toJSON()));
  },

  addPost: function(e){
    e.preventDefault();
    var title = this.$('.form-title').val();
    var blog = this.$('.form-input').val();
    this.collection.create({
      title: title,
      blog: blog
    });

  }
});
