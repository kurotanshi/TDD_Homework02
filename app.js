var Book = function ( props ){
  var _name;
  var _price;

  var book = Object.create( Book.prototype, {
    name: {
      enumerable: true,
      configurable: false,
      set: function( v ){ _name = v.toString(); },
      get: function(){ return _name; }
    },
    price: {
      enumerable: true,
      configurable: false,
      set: function( v ){ _price = parseInt(v, 10); },
      get: function(){ return _price; }
    }
  });

  book.name = props.name;
  book.price = props.price;

  return book;
}


var DiscountCalculator = function( shoppingCart ){
  var totalPrice = 0;


  return totalPrice;
};


exports.Book = Book;
exports.DiscountCalculator = DiscountCalculator;

