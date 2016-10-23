// Copyright 2016 Brandon Mowat
// Written, developed, and designed by Brandon Mowat for the purpose of helping
// other developers make chat interfaces.

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _index = require('../ChatBubble/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {

  chatbubbleWrapper: {
    marginTop: 10,
    marginBottom: 10,
    overflow: 'auto',
    position: 'relative'
  },

  img: {
    borderRadius: 100,
    bottom: 0,
    left: 0,
    position: 'absolute',
    width: 36,
    zIndex: 100
  }
};

var ChatFeed = function (_Component) {
  _inherits(ChatFeed, _Component);

  function ChatFeed(props) {
    _classCallCheck(this, ChatFeed);

    var _this = _possibleConstructorReturn(this, (ChatFeed.__proto__ || Object.getPrototypeOf(ChatFeed)).call(this, props));

    _this.state = {
      messages: props.messages
    };
    if (_this.props.setAddLabelledReply) {
      _this.props.setAddLabelledReply(_this.addNewMessage.bind(_this));
    }
    return _this;
  }

  _createClass(ChatFeed, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.state.messages != this.props.messages) {
        this.setState({
          messages: this.props.messages
        });
      }
    }
  }, {
    key: '_scrollToBottom',
    value: function _scrollToBottom() {
      var chat = this.refs.chat;

      var scrollHeight = chat.scrollHeight;
      var height = chat.clientHeight;
      var maxScrollTop = scrollHeight - height;
      _reactDom2.default.findDOMNode(chat).scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(recipient, message, username, time, message_key) {
      if (this.props.no_click) {
        return;
      }

      if (this.props.addLabelledReply) {
        if (recipient == 1) {
          recipient = 2;
        }
        this.props.addLabelledReply(recipient, message, username, time, message_key);
      } else {
        this.removeMessage(message_key);
      }
    }
  }, {
    key: 'removeMessage',
    value: function removeMessage(message_key) {
      for (var i = 0; i < this.state.messages.length; i++) {
        if (this.state.messages[i].message_key == message_key) {
          var new_messages = this.state.messages;
          new_messages.splice(i, 1);
          this.setState({ messages: new_messages });
          break;
        }
      }
    }
  }, {
    key: 'addNewMessage',
    value: function addNewMessage(recipient, message, username, time, message_key) {
      this.removeMessage(message_key);
      var new_messages = this.state.messages;
      new_messages.push({ type: recipient, message: message, username: username, time: time, message_key: message_key });
      this.setState({ messages: new_messages });
    }

    /**
      * Parses and collects messages of one type to be grouped together.
      *
      * @param {messages} - a list of message objects
      * @param {index} - the index of the end of the message grou
      * @param {type} - the type of group (user or recipient)
      * @return {message_nodes} - a JSX wrapped group of messages
      */

  }, {
    key: '_renderGroup',
    value: function _renderGroup(messages, index, type) {
      var _this2 = this;

      var group = [];

      for (var i = index; messages[i] ? messages[i].type == type : false; i--) {
        group.push(messages[i]);
      }

      var cur_username = messages[messages.length - 1].username;
      var last_selected = messages[messages.length - 1].selected;

      var message_nodes = group.reverse().map(function (curr, index) {
        return _react2.default.createElement(
          _index2.default,
          {
            addMessage: _this2.handleClick.bind(_this2),
            key: Math.random().toString(36),
            message_key: curr.message_key,
            recipient: last_selected ? curr.username == cur_username ? 0 : 1 : curr.type,
            username: curr.username,
            time: curr.time,
            selected: curr.selected,
            bubbleStyles: _this2.props.bubbleStyles },
          curr.message
        );
      });
      return _react2.default.createElement(
        'div',
        { key: Math.random().toString(36), style: styles.chatbubbleWrapper },
        message_nodes
      );
    }

    /**
      * Determines what type of message/messages to render.
      *
      * @param {messages} - a list of message objects
      * @return {message_nodes} - a list of message JSX objects to be rendered in
      *   our UI.
      */

  }, {
    key: '_renderMessages',
    value: function _renderMessages(messages) {
      var _this3 = this;

      var message_nodes = messages.map(function (curr, index) {

        // Find diff in message type or no more messages
        if ((messages[index + 1] ? false : true) || messages[index + 1].type != curr.type) {
          return _this3._renderGroup(messages, index, curr.type);
        }
      });

      return message_nodes;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      window.setTimeout(function () {
        _this4._scrollToBottom();
      }, 10);

      return _react2.default.createElement(
        'div',
        { className: 'chat-history' },
        _react2.default.createElement(
          'div',
          { ref: 'chat', className: 'outer' },
          _react2.default.createElement(
            'div',
            { className: 'inner' },
            this._renderMessages(this.state.messages)
          )
        )
      );
    }
  }]);

  return ChatFeed;
}(_react.Component);

exports.default = ChatFeed;