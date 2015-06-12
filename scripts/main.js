import {Post} from './a/models/post';
import PostView from './a/view/index';
(function(){
  'use strict';

  $(document).ready(function(){
    $('body').prepend(JST.a.index());

    var post = new Post();

    var form = new FormView({post});

    $('#app').html(form.el);
  });
})();
