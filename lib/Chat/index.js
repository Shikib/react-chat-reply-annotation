'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactSplitPane = require('react-split-pane');

var _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);

var _customReactButton = require('custom-react-button');

var _customReactButton2 = _interopRequireDefault(_customReactButton);

var _index = require('../ChatFeed/index.js');

var _index2 = _interopRequireDefault(_index);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InstructionsModal = _react2.default.createClass({
  displayName: 'InstructionsModal',
  render: function render() {
    return _react2.default.createElement(
      _reactBootstrap.Modal,
      _extends({}, this.props, { bsSize: 'large', 'aria-labelledby': 'contained-modal-title-lg' }),
      _react2.default.createElement(
        _reactBootstrap.Modal.Header,
        { closeButton: true },
        _react2.default.createElement(
          _reactBootstrap.Modal.Title,
          { id: 'contained-modal-title-lg' },
          'Modal heading'
        )
      ),
      _react2.default.createElement(
        _reactBootstrap.Modal.Body,
        null,
        _react2.default.createElement(
          'h4',
          null,
          'Wrapped Text'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.'
        )
      ),
      _react2.default.createElement(
        _reactBootstrap.Modal.Footer,
        null,
        _react2.default.createElement(
          _customReactButton2.default,
          { onClick: this.props.onHide },
          'Close'
        )
      )
    );
  }
});

var NavbarInstance = _react2.default.createClass({
  displayName: 'NavbarInstance',
  render: function render() {
    var _this = this;

    return _react2.default.createElement(
      _reactBootstrap.Navbar,
      { inverse: true },
      _react2.default.createElement(
        _reactBootstrap.Navbar.Header,
        null,
        _react2.default.createElement(
          _reactBootstrap.Navbar.Brand,
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            'React-Bootstrap'
          )
        ),
        _react2.default.createElement(_reactBootstrap.Navbar.Toggle, null)
      ),
      _react2.default.createElement(
        _reactBootstrap.Navbar.Collapse,
        null,
        _react2.default.createElement(
          _reactBootstrap.Nav,
          null,
          _react2.default.createElement(
            _reactBootstrap.NavItem,
            { eventKey: 1, href: '#' },
            'Link'
          ),
          _react2.default.createElement(
            _reactBootstrap.NavItem,
            { eventKey: 2, href: '#' },
            'Link'
          ),
          _react2.default.createElement(
            _reactBootstrap.NavDropdown,
            { eventKey: 3, title: 'Dropdown', id: 'basic-nav-dropdown' },
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: 3.1 },
              'Action'
            ),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: 3.2 },
              'Another action'
            ),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: 3.3 },
              'Something else here'
            ),
            _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: 3.3 },
              'Separated link'
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Nav,
          { pullRight: true },
          _react2.default.createElement(
            _reactBootstrap.NavItem,
            { eventKey: 1, href: '#', onClick: function onClick() {
                return _this.props.prev();
              } },
            'Link Right'
          ),
          _react2.default.createElement(
            _reactBootstrap.NavItem,
            { eventKey: 2, href: '#', onClick: function onClick() {
                return _this.props.next();
              } },
            'Link Right'
          )
        )
      )
    );
  }
});

var Chat = function (_Component) {
  _inherits(Chat, _Component);

  function Chat() {
    _classCallCheck(this, Chat);

    var _this2 = _possibleConstructorReturn(this, (Chat.__proto__ || Object.getPrototypeOf(Chat)).call(this));

    _this2.state = {
      messages: [],
      all_messages: [{ message_key: 0, username: 'John', time: '10:59 pm', message: "Hey there you0," }, // Gray bubble
      { message_key: 1, username: 'John', time: '10:59 pm', message: "What have you1,been up to?" }, { message_key: 2, username: 'John', time: '10:59 pm', message: "What have you2,been up to?" }, { message_key: 3, username: 'John', time: '10:59 pm', message: "What have you3,been up to?" }, { message_key: 4, username: 'John', time: '10:59 pm', message: "What have you4,been up to?" }, { message_key: 5, username: 'John', time: '10:59 pm', message: "What have you5,been up to?" }, { message_key: 6, username: 'John', time: '10:59 pm', message: "Hey there you6," }, // Gray bubble
      { message_key: 7, username: 'John', time: '10:59 pm', message: "What have you7,been up to?" }, { message_key: 8, username: 'John', time: '10:59 pm', message: "What have you8,been up to?" }, { message_key: 9, username: 'John', time: '10:59 pm', message: "What have you9,been up to?" }, { message_key: 10, username: 'Jack', time: '10:59 pm', message: "What have yo10 been up to?" }, { message_key: 11, username: 'John', time: '10:59 pm', message: "What have yo11 been up to?" }, { message_key: 12, username: 'Jack', time: '10:59 pm', message: "What have yo12 been up to?" }, { message_key: 13, username: 'John', time: '10:59 pm', message: "What have yo13 been up to?" }, { message_key: 14, username: 'Jack', time: '10:59 pm', message: "What have yo14 been up to?" }, { message_key: 15, username: 'John', time: '10:59 pm', message: "What have yo15 been up to?" }, { message_key: 16, username: 'Jack', time: '10:59 pm', message: "What have yo16 been up to?" }, { message_key: 17, username: 'Jack', time: '10:59 pm', message: "What have yo17 been up to?" }, { message_key: 18, username: 'John', time: '10:59 pm', message: "What have yo18 been up to?" }, { message: "This is the newest message", time: '11:00 pm', username: 'John', message_key: 19 }, { message_key: 20, username: 'John', time: '10:59 pm', message: "NEW MESSAGE" }],
      cur_message: { message_key: 0, username: 'John', time: '10:59 pm', message: "Hey there you0,", selected: true },
      reply_messages: [],
      all_reply_messages: [],
      is_typing: false,
      showInstructions: false
    };
    return _this2;
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
      var _this3 = this;

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
        marginTop: '-20px',
        height: '94%'
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

      var instructionsClose = function instructionsClose() {
        return _this3.setState({ showInstructions: false });
      };

      return _react2.default.createElement(
        'div',
        { style: outerDivStyle },
        _react2.default.createElement(InstructionsModal, { show: this.state.showInstructions, onHide: instructionsClose }),
        _react2.default.createElement(NavbarInstance, {
          prev: prev,
          next: next
        }),
        _react2.default.createElement(
          'div',
          { style: mainStyle },
          _react2.default.createElement(
            _reactSplitPane2.default,
            { split: 'vertical', minSize: 340, defaultSize: 980 },
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
        )
      );
    }
  }]);

  return Chat;
}(_react.Component);

exports.default = Chat;