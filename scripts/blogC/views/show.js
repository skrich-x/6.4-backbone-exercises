export default Backbone.View.extend({
  template: JST.blogC.show,

  initilize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }
});
