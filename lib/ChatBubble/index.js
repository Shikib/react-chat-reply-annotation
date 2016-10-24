'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  chatbubble: {
    backgroundColor: "#03b4f4",
    borderRadius: 20,
    clear: 'both',
    display: 'block',
    float: 'right',
    marginTop: 1,
    marginBottom: 1,
    maxWidth: 425,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 14,
    paddingRight: 14,
    marginRight: 30
  },
  recipientChatbubble: {
    float: 'left',
    marginLeft: 45,
    backgroundColor: '#ccc'
  },
  rightRecipientChatbubble: {
    backgroundColor: '#ccc'
  },
  p: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
    margin: 0
  },
  rp: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '400',
    margin: 0
  },
  rtime: {
    color: '#1a1a1a',
    fontSize: 13,
    textAlign: 'right',
    padding: 0,
    marginBottom: 0,
    marginTop: 5
  },
  utime: {
    color: '#f2f2f2',
    fontSize: 13,
    textAlign: 'right',
    padding: 0,
    marginBottom: 0,
    marginTop: 5
  },
  rname: {
    color: '#737272',
    fontSize: 16,
    padding: 0,
    marginBottom: 3,
    marginTop: 5,
    fontWeight: 'bold'
  },
  uname: {
    color: '#014C69',
    fontSize: 16,
    padding: 0,
    marginBottom: 3,
    marginTop: 5,
    fontWeight: 'bold'
  }
};

var ChatBubble = function (_Component) {
  _inherits(ChatBubble, _Component);

  function ChatBubble(props) {
    _classCallCheck(this, ChatBubble);

    var _this = _possibleConstructorReturn(this, (ChatBubble.__proto__ || Object.getPrototypeOf(ChatBubble)).call(this));

    _this.state = {
      message: '',
      bubbleStyles: {
        text: {},
        chatbubble: {},
        userBubble: {}
      }
    };
    return _this;
  }

  _createClass(ChatBubble, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //this._parse_for_links(this.props.children)
      this.setState({
        message: this.props.children,
        bubbleStyles: this.props.bubbleStyles ? {
          text: this.props.bubbleStyles.text ? this.props.bubbleStyles.text : {},
          chatbubble: this.props.bubbleStyles.chatbubble ? this.props.bubbleStyles.chatbubble : {},
          userBubble: this.props.bubbleStyles.userBubble ? this.props.bubbleStyles.userBubble : {}
        } : { text: {}, chatbubble: {} }
      });
    }
  }, {
    key: '_parse_for_styles',
    value: function _parse_for_styles(message) {
      if (typeof message === "string") {
        var bolded_start = message.search(/__(\w+\s?)+__/);
        var bolded_end = message.slice(bolded_start + 2).search(/__/);
        var bolded = message.slice(bolded_start + 2, bolded_start + bolded_end + 2);
        // Render text
        if (bolded_start != -1 && bolded_end != -1) {
          return _react2.default.createElement(
            'span',
            null,
            this._parse_for_styles(message.slice(0, bolded_start)),
            _react2.default.createElement(
              'strong',
              null,
              bolded
            ),
            this._parse_for_styles(message.slice(bolded_start + bolded_end + 4))
          );
        } else {
          return _react2.default.createElement(
            'span',
            null,
            message
          );
        }
      }
      return message;
    }
  }, {
    key: '_parse_for_links',
    value: function _parse_for_links(message) {
      var i, j, str, last;
      if (message.search(/<a href=/) !== -1 && (i = message.search(/<a href=/)) && (j = message.search(/a>/))) {
        last = message.slice(j + 5, -1);
        return _react2.default.createElement(
          'p',
          null,
          message.slice(0, i),
          _react2.default.createElement(
            'a',
            { target: '_blank',
              href: message.slice(i + 9, message.search(/'>|">/)) },
            message.slice(message.search(/'>|">/) + 2, j - 2)
          ),
          message.slice(j + 2)
        );
      } else {
        return _react2.default.createElement(
          'p',
          null,
          message
        );
      }
    }
  }, {
    key: 'test',
    value: function test() {
      this.props.addMessage(this.props.recipient, this.state.message, this.props.username, this.props.time, this.props.message_key);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.selected) {
        return _react2.default.createElement(
          'div',
          { style: Object.assign({}, styles.chatbubble, this.state.bubbleStyles.chatbubble, this.state.bubbleStyles.userBubble) },
          _react2.default.createElement(
            'p',
            { style: Object.assign({}, styles.uname) },
            this.props.username
          ),
          _react2.default.createElement(
            'p',
            { style: Object.assign({}, styles.p, this.state.bubbleStyles.text) },
            this.state.message
          ),
          _react2.default.createElement(
            'p',
            { style: Object.assign({}, styles.utime) },
            this.props.time
          )
        );
      } else if (this.props.recipient == 1) {
        return _react2.default.createElement(
          'div',
          { style: Object.assign({}, styles.chatbubble, styles.recipientChatbubble, this.state.bubbleStyles.chatbubble), onClick: this.test.bind(this) },
          _react2.default.createElement(
            'p',
            { style: Object.assign({}, styles.rname) },
            this.props.username
          ),
          _react2.default.createElement(
            'p',
            { style: Object.assign({}, styles.rp, this.state.bubbleStyles.text) },
            this.state.message
          ),
          _react2.default.createElement(
            'p',
            { style: Object.assign({}, styles.rtime) },
            this.props.time
          )
        );
      } else if (this.props.recipient == 2) {
        return _react2.default.createElement(
          'div',
          { style: Object.assign({}, styles.chatbubble, styles.rightRecipientChatbubble, this.state.bubbleStyles.chatbubble), onClick: this.test.bind(this) },
          _react2.default.createElement(
            'p',
            { style: Object.assign({}, styles.rname) },
            this.props.username
          ),
          _react2.default.createElement(
            'p',
            { style: Object.assign({}, styles.rp, this.state.bubbleStyles.text) },
            this.state.message
          ),
          _react2.default.createElement(
            'p',
            { style: Object.assign({}, styles.rtime) },
            this.props.time
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          { style: Object.assign({}, styles.chatbubble, this.state.bubbleStyles.chatbubble, this.state.bubbleStyles.userBubble), onClick: this.test.bind(this) },
          _react2.default.createElement(
            'p',
            { style: Object.assign({}, styles.uname) },
            this.props.username
          ),
          _react2.default.createElement(
            'p',
            { style: Object.assign({}, styles.p, this.state.bubbleStyles.text) },
            this.state.message
          ),
          _react2.default.createElement(
            'p',
            { style: Object.assign({}, styles.utime) },
            this.props.time
          )
        );
      }
    }
  }]);

  return ChatBubble;
}(_react.Component);

exports.default = ChatBubble;