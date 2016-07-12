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


    test('add_two_different_books_and_sum_should_be_190', function(){

      // arrange
      shoppingCart.push( new app.Book({ name: '哈利波特：神秘的魔法石', price: 100 }) );
      shoppingCart.push( new app.Book({ name: '哈利波特：消失的密室', price: 100 }) );

      // act
      var expected = 190;
      var result = app.DiscountCalculator( shoppingCart );

      // assert
      assert.equal(expected, result);
    });


    test('add_three_different_books_and_sum_should_be_270', function(){

      // arrange
      shoppingCart.push( new app.Book({ name: '哈利波特：神秘的魔法石', price: 100 }) );
      shoppingCart.push( new app.Book({ name: '哈利波特：消失的密室', price: 100 }) );
      shoppingCart.push( new app.Book({ name: '哈利波特：阿茲卡班的逃犯', price: 100 }) );

      // act
      var expected = 270;
      var result = app.DiscountCalculator( shoppingCart );

      // assert
      assert.equal(expected, result);
    });


    test('add_four_different_books_and_sum_should_be_320', function(){

      // arrange
      shoppingCart.push( new app.Book({ name: '哈利波特：神秘的魔法石', price: 100 }) );
      shoppingCart.push( new app.Book({ name: '哈利波特：消失的密室', price: 100 }) );
      shoppingCart.push( new app.Book({ name: '哈利波特：阿茲卡班的逃犯', price: 100 }) );
      shoppingCart.push( new app.Book({ name: '哈利波特：火盃的考驗', price: 100 }) );

      // act
      var expected = 320;
      var result = app.DiscountCalculator( shoppingCart );

      // assert
      assert.equal(expected, result);
    });


    test('add_five_different_books_and_sum_should_be_375', function(){

      // arrange
      shoppingCart.push( new app.Book({ name: '哈利波特：神秘的魔法石', price: 100 }) );
      shoppingCart.push( new app.Book({ name: '哈利波特：消失的密室', price: 100 }) );
      shoppingCart.push( new app.Book({ name: '哈利波特：阿茲卡班的逃犯', price: 100 }) );
      shoppingCart.push( new app.Book({ name: '哈利波特：火盃的考驗', price: 100 }) );
      shoppingCart.push( new app.Book({ name: '哈利波特：鳳凰會的密令', price: 100 }) );

      // act
      var expected = 375;
      var result = app.DiscountCalculator( shoppingCart );

      // assert
      assert.equal(expected, result);
    });

});