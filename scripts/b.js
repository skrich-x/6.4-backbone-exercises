import User from './b/view/index';
import {UserCollection} from './b/models/posts';

(function(){
  'use strict';

    $(document).ready(function(){

      var user = new UserCollection();
      console.log(user);

      var form = new User({collection: user});
      console.log(form.$el.children());
      console.log('i work');

      $('#app').html(form.el);

    });

})();
