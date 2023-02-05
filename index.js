const { Spy, spy } = require("chai");

function receivesAFunction(callback){
    return callback();
  }

  function returnsANamedFunction(){
    return returnsANamedFunction
  }
  
  function returnsAnAnonymousFunction(name){
    return function (name){}
  }
 