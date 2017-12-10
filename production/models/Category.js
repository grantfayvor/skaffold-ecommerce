'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Harrison on 07/12/2017.
 */

var _name = Symbol('name');

var Category = exports.Category = function () {
    function Category(name) {
        _classCallCheck(this, Category);

        this[_name] = name;
    }

    _createClass(Category, [{
        key: 'getName',
        value: function getName() {
            return this[_name];
        }
    }, {
        key: 'getFields',
        value: function getFields() {
            return ['name'];
        }
    }, {
        key: 'toJson',
        value: function toJson() {
            return {
                'name': this[_name]
            };
        }
    }]);

    return Category;
}();