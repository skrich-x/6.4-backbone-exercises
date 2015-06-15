import IndexView from './views/index';

export default Backbone.Router.extend({
  routes: {
    '': 'index',
    ':id' : 'show'
  },

  initialize: function(){

    this.blogPosts = new Backbone.Collection([
      {id: 1, title: 'One', body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
      {id: 2, title: 'Two', body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
      {id: 3, title: 'Three', body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
    ]);

    this.indexView = new IndexView({collection: this.blogPosts});
    $('#sidebar').html(this.indexView.el);
    console.log(this.indexView);
  },

  index: function(){
    console.log('index');
  },

  show: function(id){
    console.log(id);
    var post = this.posts.get(id);
    this.showView(new PostShowView({model: post}));
  },

  showView:function(view){
    if(this.currentView) this.currentView.remove();
    this.currentView= view;
    $('#app-container').html(view.el);
    return view;
  }
});
