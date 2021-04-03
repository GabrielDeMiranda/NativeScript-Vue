webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Products1_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Products1.vue");
/* harmony import */ var _checkout1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/checkout1.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      cart: []
    };
  },

  components: {
    ProductList: _Products1_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Checkout: _checkout1__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    addToCart(product) {
      var existsProduct = this.carts.find(item => item.title === product.title);

      if (!existsProduct) {
        this.cart.push(product);
        this.carts.push(product, {
          title: product.title,
          count: 0,
          id: product.id
        });
        alert("Added to cart: " + product.title);
      }

      this.carts.forEach(item => {
        if (item.id === product.id) {
          item.count++;
          product.availableInventory--;
        }
      });
    },

    canAddToCart(product) {
      return product.availableInventory > this.cartCount(product.id);
    },

    cartCount(id) {
      var count = this.carts.filter(item => item.id === id).length;
      return count;
    },

    removeFromCart(product) {
      for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i] == product) this.cart.splice(i, 1);
      }
    }

  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BcHAudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLEdBTEE7O0FBTUE7QUFDQSx1RUFEQTtBQUNBO0FBREEsR0FOQTtBQVNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BTEE7QUFNQSxLQWhCQTs7QUFpQkE7QUFDQTtBQUNBLEtBbkJBOztBQW9CQTtBQUNBO0FBQ0E7QUFDQSxLQXZCQTs7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUE1QkE7QUFUQSxHIiwiZmlsZSI6ImJ1bmRsZS45NDkxZDZhOTU1NTM2MGRkYTgxNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2U+XHJcbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIkdhYidzIENsYXNzZXNcIi8+XHJcbiAgICAgICAgPExhYmVsIHRleHQ9XCJXZWxjb21lIHRvIEdhYnMgQ2xhc3Nlc1wiIGNsYXNzPSdoMicvPlxyXG4gICAgICAgIDxUYWJWaWV3IGFuZHJvaWRUYWJzUG9zaXRpb249J2JvdHRvbSc+XHJcbiAgICAgICAgICAgIDxUYWJWaWV3SXRlbSB0aXRsZT1cIlByb2R1Y3QgTGlzdFwiIGNsYXNzPVwiaDIgdGV4dC1jYXBpdGFsaXplXCI+XHJcbiAgICAgICAgICAgICAgICA8UHJvZHVjdExpc3QgQGFkZFByb2R1Y3Q9XCJhZGRUb0NhcnQsIGNhbkFkZFRvQ2FydFwiIC8+XHJcbiAgICAgICAgICAgIDwvVGFiVmlld0l0ZW0+XHJcbiAgICAgICAgICAgIDxUYWJWaWV3SXRlbSB0aXRsZT1cIkNoZWNrb3V0XCIgY2xhc3M9XCJoMiB0ZXh0LWNhcGl0YWxpemVcIj5cclxuICAgICAgICAgICAgICAgIDxDaGVja291dCA6Y2FydD0nY2FydCcgQHJlbW92ZVByb2R1Y3Q9J3JlbW92ZUZyb21DYXJ0Jy8+XHJcbiAgICAgICAgICAgIDwvVGFiVmlld0l0ZW0+XHJcbiAgICAgICAgPC9UYWJWaWV3PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4vUHJvZHVjdHMxLnZ1ZSdcclxuaW1wb3J0IENoZWNrb3V0IGZyb20gJy4vY2hlY2tvdXQxJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjYXJ0OiBbXSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBQcm9kdWN0TGlzdCxDaGVja291dFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBhZGRUb0NhcnQocHJvZHVjdCkge1xyXG4gICAgICAgICAgICBjb25zdCBleGlzdHNQcm9kdWN0ID0gdGhpcy5jYXJ0cy5maW5kKGl0ZW0gPT4gaXRlbS50aXRsZSA9PT0gcHJvZHVjdC50aXRsZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWV4aXN0c1Byb2R1Y3QpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FydC5wdXNoKHByb2R1Y3QpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJ0cy5wdXNoKHByb2R1Y3QseyB0aXRsZTogcHJvZHVjdC50aXRsZSwgY291bnQ6IDAsIGlkOiBwcm9kdWN0LmlkIH0pO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJBZGRlZCB0byBjYXJ0OiBcIiArIHByb2R1Y3QudGl0bGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNhcnRzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSBwcm9kdWN0LmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuYXZhaWxhYmxlSW52ZW50b3J5LS07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbkFkZFRvQ2FydChwcm9kdWN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9kdWN0LmF2YWlsYWJsZUludmVudG9yeSA+IHRoaXMuY2FydENvdW50KHByb2R1Y3QuaWQpXHJcbiAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FydENvdW50KGlkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5jYXJ0cy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBpZCkubGVuZ3RoO1xyXG4gICAgICAgICAgICByZXR1cm4gY291bnQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmVGcm9tQ2FydChwcm9kdWN0KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLmNhcnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhcnQuW2ldID09IHByb2R1Y3QpIHRoaXMuY2FydC5zcGxpY2UoaSwxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PiJdLCJzb3VyY2VSb290IjoiIn0=