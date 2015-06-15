import Router from './blogC/router';

(function(){
  'use strict';

  new Router();

  $(document).ready(function(){
    // $('body').prepend(JST.blogC.index());
    Backbone.history.start();

  });
})();
