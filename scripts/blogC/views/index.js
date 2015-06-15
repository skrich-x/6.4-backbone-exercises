export default Backbone.View.extend({
  template: JST.blogC.index,

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.collection.toJSON()));
  }
});
