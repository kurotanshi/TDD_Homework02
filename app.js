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

var getTotalBySingleCart = function( cart ){
  var subTotal = 0;

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

  cart.forEach(function(book, idx){
    subTotal += book.price;

  });

  subTotal = parseInt( subTotal * getDiscountByUniqueBooks( cart.length ), 10);
  return subTotal;
};

var getSumByDifferentCarts = function( subtotal, cart ){
  var temporaryCart = [];
  var cloneCart = cart.concat();

  cloneCart.forEach(function(book, idx){
    if( book !== null && temporaryCart.map(function(e){ return e.name; }).indexOf( book.name ) === -1 ){
      temporaryCart.push( book );
      cart[idx] = null;
    }
  });

  cart.forEach(function(book, idx){
    if( book === null ) cart.splice(idx, 1);
  });

  subtotal += getTotalBySingleCart(temporaryCart);

  return ( cart.length > 0 ) ? getSumByDifferentCarts(subtotal, cart) : subtotal ;
};

var DiscountCalculator = function( shoppingCart ){
  var totalPrice = 0;

  totalPrice = getSumByDifferentCarts(totalPrice, shoppingCart);

  return totalPrice;
};


exports.Book = Book;
exports.DiscountCalculator = DiscountCalculator;

