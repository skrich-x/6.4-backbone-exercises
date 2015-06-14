export default Backbone.View.extend({
  tagName: 'ul',
  className: 'blog-list',

  template: JST.c.index,

  events: {
    'click .title-click' : 'clickPost',
  },

  initialize: function(){
    this.render();
  },

  render: function(){
    $('body').prepend(this.$el);
    this.$el.html(this.template(this.collection.toJSON()));
  },

  clickPost: function(e){
    console.log(this);
    // e.preventDefault();
    // var title = this.$('.title').val();
    // this.collection.create({
    //   title: title,
    });
  }
});
