export default Backbone.View.extend({
  template: JST.c.index,

  tagName: 'ul',
  className: 'blog-list',



  events: {
    'click .title-click' : 'clickPost',
  },

  initialize: function(){
    this.render();
  },

  render: function(){
    $('body').prepend(this.$el);
    this.$el.html(this.template);
  },

  clickPost: function(e){
    console.log(this);
    e.preventDefault();
    var title = this.$('.title').val();
    this.collection.create({
      title: title,
    });
  }
});
