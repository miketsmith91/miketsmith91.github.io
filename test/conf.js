exports.config = {


  baseUrl: 'file:///Users/michaelsmith/Programs/AtomProjects/miketsmith91.github.io/index.html',

  onPrepare: function() {
    // By default, Protractor use data:text/html,<html></html> as resetUrl, but
    // location.replace from the data: to the file: protocol is not allowed
    // (we'll get 'not allowed local resource' error), so we replace resetUrl with
    // one with the fiel: protocol (this particular one will open system's root folder)
    browser.resetUrl = 'file://';
    browser.ignoreSynchronization = true;


  },
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['indexTest.js'],
  multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }]
};
