describe('Test on Index Page of personal website', function(){
  var inputBar = element(by.model('name'));
  var outputLine = element(by.model('output'));

  beforeEach(function() {
    browser.get('');
  });

  it('should change the ouputLine when typing into name field', function(){
    inputBar.sendKeys('Michael');
    expect(outputLine.getText()).toContain("Hello Michael");
  });
});
