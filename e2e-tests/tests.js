'use strict';

describe('my app', function() {


  it('should redirect to /home when location hash is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch('/home');
  });


  describe('home', function() {

    beforeEach(function() {
      browser.get('index.html#/home');
    });


    it('should render view1 when user navigates to /home', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
      toMatch(/This is the homepage/);
    });

  });


  describe('page1', function() {

    beforeEach(function() {
      browser.get('index.html#/page1');
    });


    it('should render page1 when user navigates to /page1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
      toMatch(/This is another page/);
    });

  });

});
