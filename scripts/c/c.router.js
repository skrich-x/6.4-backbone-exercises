// var AppRouter = Backbone.Router.extend({
//   routes: {
//     '':''
//   },
//
//   routes: {
//     '': 'index',
//     'blog': 'blog'
//
//
//   }
//   initialize:function(){
//     this.index = new BlogCollection();
//     this.blog = new
//
//
//   },
//
//
//
// })


















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
