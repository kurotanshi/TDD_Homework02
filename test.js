var assert = require('assert');
var mocha  = require('mocha');

var suite  = mocha.suite;
var setup  = mocha.setup;
var test   = mocha.test;

var app = require('./app.js');

suite('PotterShoppingCart', function(){

    var shoppingCart = [];

    setup(function(){
      // 每執行不同測試案例前都要清空 shoppingCart
      shoppingCart = [];
    });


    test('add_one_book_and_sum_should_be_100', function(){

      // arrange
      shoppingCart.push( new app.Book({ name: '哈利波特：神秘的魔法石', price: 100 }) );

      // act
      var expected = 100;
      var result = app.DiscountCalculator( shoppingCart );

      // assert
      assert.equal(expected, result);
    });

});