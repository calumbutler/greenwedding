define(['exports', 'dispatcher'], function (exports, _dispatcher) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var DcActions = (function () {
    function DcActions() {
      _classCallCheck(this, DcActions);
    }

    _createClass(DcActions, [{
      key: 'initialize',
      value: function initialize() {
        this.dispatch();
      }
    }, {
      key: 'currentPage',
      value: function currentPage(pageName) {
        this.dispatch(pageName);
      }
    }, {
      key: 'updateNewRecipes',
      value: function updateNewRecipes(newRecipes) {
        this.dispatch(newRecipes);
      }
    }]);

    return DcActions;
  })();

  var dcActions = _dispatcher.dispatcher.createActions(DcActions);
  exports.dcActions = dcActions;
});
//# sourceMappingURL=actions.js.map