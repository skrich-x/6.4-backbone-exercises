import IndexView from './view/index';
import BlogView from './view/blogview';
import {ListCollection} from './models/blogTitleList';

console.log(IndexView);


var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'blog': 'blog'
  },


  initialize:function(){
    this.index = new BlogCollection();
  },

  index: function() {
      var view = new IndexView({ collection:this.blogTitleList});
      $('#app').html(view.el);
      console.log(view.$el.children());
  },

  displayBlog: function(){
    $('#app').html(JST.blogview());
  }


});

var router = new Router();
export default router;





// var AppRouter = Backbone.Router.extend({
//   routes: {
//     'active': 'showActive'
//   },
//
//   initialize: function(){
//     this.tasks = new TasksCollection();
//     this.filteredTasks = new TasksCollection();
//   },
//
//   showActive: function(){
//     this.showView(new TasksView({collection: filteredTasks}));
//     this.filteredTasks.reset( this.tasks.where({active: true}) );
//   },
//
//
//   /*
//    * Helper functions
//    */
//
//   showView: function(view) {
//     if(this.currentView) this.currentView.remove();
//     this.currentView = view;
//     $('#app-container').html(view.el);
//     return view;
//   },
// });
