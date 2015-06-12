export default Backbone.View.extend({
  tagName: 'form',
  ClassName: "form-title",

  template: JST.form,

  events: {
    'click .form-submit': 'addPost',
  },

  initialize: function() {
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.collection.toJSON()));
  },

  addPost: function(e){
    console.log('submitting');
    e.preventDefault();
    var title = this.$('.form-title').val();
    var blog = this.$('.form-input').val();
    this.collection.create({
      title: title,
      blog:blog
    });

  }
});
