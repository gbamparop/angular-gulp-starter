'use strict';

describe('myApp.page1 module', function() {

  beforeEach(module('myApp.page1'));

  describe('page1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var page1Ctrl = $controller('page1Ctrl');
      expect(page1Ctrl).toBeDefined();
    }));

  });
});