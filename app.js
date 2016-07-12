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
};


var DiscountCalculator = function( shoppingCart ){
  var totalPrice = 0;

  var getDiscountByUniqueBooks = function( amount ){
    var discount = 1;

    switch ( amount ) {
      case 2:
          discount = 0.95;
          break;
      case 3:
          discount = 0.9;
          break;
      case 4:
          discount = 0.8;
          break;
      case 5:
          discount = 0.75;
          break;
    }
    return discount;
  };

  shoppingCart.forEach(function(book, idx){
    totalPrice += book.price;

  });

  totalPrice = parseInt( totalPrice * getDiscountByUniqueBooks( shoppingCart.length ), 10);

  return totalPrice;
};


exports.Book = Book;
exports.DiscountCalculator = DiscountCalculator;

