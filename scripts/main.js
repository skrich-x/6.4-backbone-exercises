import PostView from './a/view/index';
import {PostCollection} from './a/models/post';

(function(){
  'use strict';

  $(document).ready(function(){

    var post = new PostCollection();
    console.log(post);

    var form = new PostView({collection: post});
    console.log(form.$el.children());

    $('#app').html(form.el);
  });
})();
