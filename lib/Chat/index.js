'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactSplitPane = require('react-split-pane');

var _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);

var _customReactButton = require('custom-react-button');

var _customReactButton2 = _interopRequireDefault(_customReactButton);

var _index = require('../ChatFeed/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chat = function (_Component) {
  _inherits(Chat, _Component);

  function Chat() {
    _classCallCheck(this, Chat);

    var _this = _possibleConstructorReturn(this, (Chat.__proto__ || Object.getPrototypeOf(Chat)).call(this));

    _this.state = {
      messages: [],
      all_messages: [{ message_key: 0, username: 'John', time: '10:59 pm', message: "Hey there you0," }, // Gray bubble
      { message_key: 1, username: 'John', time: '10:59 pm', message: "What have you1,been up to?" }, { message_key: 2, username: 'John', time: '10:59 pm', message: "What have you2,been up to?" }, { message_key: 3, username: 'John', time: '10:59 pm', message: "What have you3,been up to?" }, { message_key: 4, username: 'John', time: '10:59 pm', message: "What have you4,been up to?" }, { message_key: 5, username: 'John', time: '10:59 pm', message: "What have you5,been up to?" }, { message_key: 6, username: 'John', time: '10:59 pm', message: "Hey there you6," }, // Gray bubble
      { message_key: 7, username: 'John', time: '10:59 pm', message: "What have you7,been up to?" }, { message_key: 8, username: 'John', time: '10:59 pm', message: "What have you8,been up to?" }, { message_key: 9, username: 'John', time: '10:59 pm', message: "What have you9,been up to?" }, { message_key: 10, username: 'Jack', time: '10:59 pm', message: "What have yo10 been up to?" }, { message_key: 11, username: 'John', time: '10:59 pm', message: "What have yo11 been up to?" }, { message_key: 12, username: 'Jack', time: '10:59 pm', message: "What have yo12 been up to?" }, { message_key: 13, username: 'John', time: '10:59 pm', message: "What have yo13 been up to?" }, { message_key: 14, username: 'Jack', time: '10:59 pm', message: "What have yo14 been up to?" }, { message_key: 15, username: 'John', time: '10:59 pm', message: "What have yo15 been up to?" }, { message_key: 16, username: 'Jack', time: '10:59 pm', message: "What have yo16 been up to?" }, { message_key: 17, username: 'Jack', time: '10:59 pm', message: "What have yo17 been up to?" }, { message_key: 18, username: 'John', time: '10:59 pm', message: "What have yo18 been up to?" }, { message: "This is the newest message", time: '11:00 pm', username: 'John', message_key: 19 }, { message_key: 20, username: 'John', time: '10:59 pm', message: "NEW MESSAGE" }],
      cur_message: { message_key: 0, username: 'John', time: '10:59 pm', message: "Hey there you0,", selected: true },
      reply_messages: [],
      all_reply_messages: [],
      is_typing: false
    };
    return _this;
  }

  _createClass(Chat, [{
    key: 'nextMessage',
    value: function nextMessage() {
      if (this.state.cur_message.message_key == this.state.all_messages.length - 1) {
        return;
      }

      var all_messages = this.state.all_messages;

      var cur_message = this.state.cur_message;
      var cur_messages = this.state.messages;
      var cur_reply_messages = this.state.reply_messages;
      var cur_all_reply_messages = this.state.all_reply_messages;

      var new_cur_message = all_messages[cur_message.message_key + 1];
      new_cur_message.selected = true;

      // Add in the reply messages for the new message, if they exist.
      var new_reply_messages = [];
      if (cur_all_reply_messages.length > new_cur_message.message_key) {
        for (var i = 0; i < cur_all_reply_messages[new_cur_message.message_key].length; i++) {
          var reply_message_key = cur_all_reply_messages[new_cur_message.message_key][i];
          new_reply_messages.push(all_messages[reply_message_key]);
        }
      } else {
        cur_all_reply_messages.push([]);
      }

      // Add the the old cur_message to the message history
      var newest_message = {
        message_key: cur_message.message_key,
        username: cur_message.username,
        time: cur_message.time,
        message: cur_message.message
      };
      cur_messages.push(newest_message);

      // Set the replies for the current message
      var all_message_keys = [];
      for (var i = 0; i < cur_reply_messages.length; i++) {
        all_message_keys.push(cur_reply_messages[i].message_key);
      }
      cur_all_reply_messages[this.state.cur_message.message_key] = all_message_keys;

      console.log(cur_all_reply_messages);

      this.setState({
        cur_message: new_cur_message,
        messages: cur_messages,
        reply_messages: new_reply_messages,
        all_reply_messages: cur_all_reply_messages
      });
    }
  }, {
    key: 'previousMessage',
    value: function previousMessage() {
      if (this.state.cur_message.message_key == 0) {
        return;
      }

      var all_messages = this.state.all_messages;

      var cur_message = this.state.cur_message;
      var cur_messages = this.state.messages;
      var cur_reply_messages = this.state.reply_messages;
      var cur_all_reply_messages = this.state.all_reply_messages;

      var new_cur_message = cur_messages[cur_messages.length - 1];
      new_cur_message.selected = true;

      cur_messages.splice(-1, 1);

      // Set the new (if exists) reply list
      var new_reply_messages = [];
      if (cur_all_reply_messages.length > new_cur_message.message_key) {
        for (var i = 0; i < cur_all_reply_messages[new_cur_message.message_key].length; i++) {
          var reply_message_key = cur_all_reply_messages[new_cur_message.message_key][i];
          new_reply_messages.push(all_messages[reply_message_key]);
        }
      } else {
        cur_all_reply_messages.push([]);
      }

      // Set the replies for the current message
      var all_message_keys = [];
      for (var i = 0; i < cur_reply_messages.length; i++) {
        all_message_keys.push(cur_reply_messages[i].message_key);
      }
      cur_all_reply_messages[this.state.cur_message.message_key] = all_message_keys;

      console.log(cur_all_reply_messages);

      this.setState({
        cur_message: new_cur_message,
        messages: cur_messages,
        reply_messages: new_reply_messages,
        all_reply_messages: cur_all_reply_messages
      });
    }
  }, {
    key: 'setAddLabelledReply',
    value: function setAddLabelledReply(addLabelledReply) {
      this.setState({ addLabelledReply: addLabelledReply });
    }
  }, {
    key: 'render',
    value: function render() {
      var divStyles = {
        overflow: 'hidden'
      };

      var headerStyle = {
        position: 'fixed',
        backgroundColor: '#003366',
        top: 0,
        left: 0,
        right: 0,
        margin: '0px',
        height: '50px'
      };

      var outerDivStyle = {
        height: '100%',
        width: '100%'
      };

      var mainStyle = {
        paddingTop: '50px'
      };

      var buttonStyle = {
        height: '50px',
        width: '200px',
        float: 'left'
      };

      var buttonTwoStyle = {
        height: '50px',
        width: '200px',
        float: 'right'
      };

      var prev = this.previousMessage.bind(this);
      var next = this.nextMessage.bind(this);

      return _react2.default.createElement(
        'div',
        { style: outerDivStyle },
        _react2.default.createElement(
          'div',
          { style: headerStyle },
          _react2.default.createElement(
            'div',
            { style: buttonStyle, onClick: function onClick() {
                return prev();
              } },
            'LEFT'
          ),
          _react2.default.createElement(
            'div',
            { style: buttonTwoStyle, onClick: function onClick() {
                return next();
              } },
            'RIGHT'
          )
        ),
        _react2.default.createElement(
          _reactSplitPane2.default,
          { style: mainStyle, split: 'vertical', minSize: 340, defaultSize: 980 },
          _react2.default.createElement(
            'div',
            { style: divStyles },
            _react2.default.createElement(
              'h1',
              null,
              'Message Feed'
            ),
            _react2.default.createElement(_index2.default, {
              addLabelledReply: this.state.addLabelledReply,
              messages: this.state.messages.concat([this.state.cur_message]),
              is_typing: this.state.is_typing,
              bubbleStyles: {
                text: {
                  fontSize: 18
                },
                chatbubble: {
                  maxWidth: 600
                },
                userBubble: {
                  backgroundColor: '#0084FF'
                }
              }
            })
          ),
          _react2.default.createElement(
            'div',
            { style: divStyles },
            _react2.default.createElement(
              'h1',
              null,
              'Reply Messages'
            ),
            _react2.default.createElement(_index2.default, {
              setAddLabelledReply: this.setAddLabelledReply.bind(this),
              messages: this.state.reply_messages,
              is_typing: this.state.is_typing,
              bubbleStyles: {
                text: {
                  fontSize: 18
                },
                chatbubble: {
                  maxWidth: 600
                },
                userBubble: {
                  backgroundColor: '#0084FF'
                }
              }
            })
          )
        )
      );
    }
  }]);

  return Chat;
}(_react.Component);

exports.default = Chat;