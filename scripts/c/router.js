import IndexView from './view/index';
import BlogView from './view/blogview';
import {List, ListCollection} from './models/blogTitleList';
import {Blog, BlogCollections} from './models/post';

console.log(IndexView);


var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'blog': 'blog'
  },


  initialize:function(){
    // this.blogs = new BlogCollections();
    // console.log(this);
    // this.blogs.fetch().then(function(){
    //   var blogList = new BlogView({collection: this. blogs});
    //   $('#app').html(blogList.el);
    //   }.bind (this));
    this.blogs = new BlogCollections();
    this.fetchBlogsPromis = this.blogs.fetch();

    this.indexView = IndexView({collection: this.blogs});
    $('#app').html(this.indexView.el);

  },

  index: function() {
      // var view = new IndexView({ collection:this.blogTitleList});
      // $('#app').html(view.el);
      // console.log(view.$el.children());
  },

  displayBlog: function(id){
    // $('#app').html(JST.blogview());
    this.fetchBlogsPromise.then(function() {
      var blog = this.blogs.get(id);
      this.showView(new BlogShowView({model:post}));
    }.bind(this));
  },


// var router = new Router();
// export default router;


  /*
   * Helper functions
   */

  showView: function(view) {
    if(this.currentView) this.currentView.remove();
    this.currentView = view;
    $('#app-container').html(view.el);
    return view;
  }
});
