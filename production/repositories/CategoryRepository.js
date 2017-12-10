'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CategoryRepository = undefined;

var _CRUDRepository2 = require('./CRUDRepository');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Harrison on 10/12/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var CategoryRepository = exports.CategoryRepository = function (_CRUDRepository) {
    _inherits(CategoryRepository, _CRUDRepository);

    function CategoryRepository() {
        _classCallCheck(this, CategoryRepository);

        return _possibleConstructorReturn(this, (CategoryRepository.__proto__ || Object.getPrototypeOf(CategoryRepository)).call(this, 'categories'));
    }

    return CategoryRepository;
}(_CRUDRepository2.CRUDRepository);