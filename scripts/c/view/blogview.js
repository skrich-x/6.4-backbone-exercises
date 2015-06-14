export default Backbone.View.extend({

  template: JST.blogView,

  tagName: 'div',
  className: 'container',

  initialize: function (){
    this.render();

  },

  render: function() {
    this.$el.html(this.template(this.model));
  }
});
