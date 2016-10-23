'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _lib = require('../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_lib.Chat);
(0, _reactDom.render)(_react2.default.createElement(_lib.Chat), document.getElementById('chat-ui'));
