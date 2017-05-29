$(function() {
var helloWorldController = {
  __name: 'HelloWorldController', 
  '#button click': function() {
    alert("こんにちは世界！");
  }
 }; 
 h5.core.controller('body', helloWorldController);
});

