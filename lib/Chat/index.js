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

var _odata = require('../../odata.json');

var _odata2 = _interopRequireDefault(_odata);

var _reactMousetrapMixin = require('react-mousetrap-mixin');

var _reactMousetrapMixin2 = _interopRequireDefault(_reactMousetrapMixin);

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
          'Annotation Instructions'
        )
      ),
      _react2.default.createElement(
        _reactBootstrap.Modal.Body,
        null,
        _react2.default.createElement(
          'h3',
          null,
          'Introduction'
        ),
        _react2.default.createElement(
          'p',
          null,
          'As an annotator using this application, you will spend somewhere between 1 - 2 hours, to manually identify all ',
          _react2.default.createElement(
            'strong',
            null,
            'reply'
          ),
          ' relationships for a given chat log.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Your annotation will be used to solve the problem of ',
          _react2.default.createElement(
            'em',
            null,
            'Thread Disentanglement in Multiparticipant Chats'
          ),
          '. Your annotation will also be published online for other research groups to use.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'The chat corpus being used was taken from ',
          _react2.default.createElement(
            'a',
            { href: 'http://www.ling.ohio-state.edu/~elsner.14/resources/chat-manual.html' },
            'Elsner & Charniak'
          ),
          '. The corpus is a recording of an IRC chat in late May 2007. It comes from the ##linux channel at http://freenode.net. '
        ),
        _react2.default.createElement(
          'p',
          null,
          'The rest of the instructions define what a ',
          _react2.default.createElement(
            'strong',
            null,
            'reply'
          ),
          ' relationship is and explain how to use the application.'
        ),
        _react2.default.createElement(
          'h3',
          null,
          'Reply Definition'
        ),
        _react2.default.createElement(
          'p',
          null,
          'With our definition of a reply, a message is either a reply/continuation of a previous message or it is initiating a new topic of conversation.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'To best define what a reply/continuation is, let\'s consider the chat log below. '
        ),
        _react2.default.createElement('img', { style: { width: '90%', marginBottom: '15px', marginTop: '15px' }, src: 'http://i.imgur.com/75f8jox.png' }),
        _react2.default.createElement(
          'p',
          null,
          'The second message, sent by Jack, is replying to the previous message sent by John. Therefore, we would select ',
          _react2.default.createElement(
            'strong',
            null,
            'John\'s message'
          ),
          ' to be a potential parent message for Jack\'s message.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Brian\'s message is not a direct reply to any previous message. However, it was ',
          _react2.default.createElement(
            'em',
            null,
            'prompted'
          ),
          ' by ',
          _react2.default.createElement(
            'strong',
            null,
            'John/Jack\'s messages'
          ),
          '. Seeing the two previous messages discussing TV shows, led to Brian remembering he had not renewed his Netflix subscription. Since Brian\'s message was prompted by the previous two messages, we could select the two previous messages as potential parent messages for Brian\'s message.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Katie\'s message is a completely new topic of conversation. Her message was not prompted/brought about by any of the previous messages in the chat log. Therefore we would not select any replies for it. '
        ),
        _react2.default.createElement(
          'p',
          null,
          'Jenny\'s first message (10:33:05) is a reply to ',
          _react2.default.createElement(
            'strong',
            null,
            'Brian\'s message'
          ),
          ', as indicated by the fact that she mentioned him by name in her message.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Jenny\'s second message (10:33:15) is a reply to ',
          _react2.default.createElement(
            'strong',
            null,
            'Katie\'s message'
          ),
          '. '
        ),
        _react2.default.createElement(
          'p',
          null,
          'Jenny\'s third message (10:33:20) is another reply to ',
          _react2.default.createElement(
            'strong',
            null,
            'Katie\'s message'
          ),
          '. However, this message can also be thought of as a ',
          _react2.default.createElement(
            'strong',
            null,
            'continuation'
          ),
          ' of her previous message (10:33:15). Therefore, when selecting parent messages for this message, we can select Katie\'s message, Jenny\'s second message or both. '
        ),
        _react2.default.createElement(
          'p',
          null,
          'The final message by Katie is a correction of her previous message. This message is a ',
          _react2.default.createElement(
            'strong',
            null,
            'continuation'
          ),
          ' of Katie\'s previous message, therefore we would select that message as the reply for this message.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Please make sure that the explanations make sense and ask any questions if there\'s anything you don\'t understand.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Identifying replies is occasionally ambiguous and sometimes there\'s no right anwser. Nonetheless, please ',
          _react2.default.createElement(
            'strong',
            null,
            'try your best'
          ),
          ' and ensure that you consider each message carefully.'
        ),
        _react2.default.createElement(
          'h3',
          null,
          'Using the Application'
        ),
        _react2.default.createElement(
          'p',
          null,
          'With this application, you will iterate through a chat log of messages. For every message, you will need to select all messages that the message is a reply to.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Another way of saying this, is that you want to find the ',
          _react2.default.createElement(
            'em',
            null,
            'parent'
          ),
          ' message for every given message.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'In the top-right, you see a single message bubble. That is the current message. This message also appears at the end of the message stream.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'The current message, is the message that you\'re currently finding parent messages for.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'In the bottom-right, you see a list of messages (initially empty). This list of messages represents all of the parent messages for the ',
          _react2.default.createElement(
            'em',
            null,
            'current message'
          ),
          '.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'In the left, you see all of the messages that were sent before (and including) the current message.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'You can click on any message in the left message view, to select it as a parent message. Clicking a message will add it to the view on the right hand side.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'If you accidentally added a message as a parent, you can simply re-click it to remove it from the list of parent messages.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'When you\'re done selecting all of the parent messages for a given message, click the ',
          _react2.default.createElement(
            'em',
            null,
            'Next Message'
          ),
          ' button in the top right, to move on to the next message.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'If you ever want to go back to a message that you already annotated, you can click the ',
          _react2.default.createElement(
            'em',
            null,
            'Previous Message'
          ),
          ' button to do that.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'When you\'re done, you can click the ',
          _react2.default.createElement(
            'em',
            null,
            'Save Annotation'
          ),
          ' button in the top left. It\'s also reccomended that you click the button occasionally to save your progress.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'If you ever need to review these instructions, please click the ',
          _react2.default.createElement(
            'em',
            null,
            'Instructions'
          ),
          ' button in the top left.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Please make sure to read these instructions carefully. If you don\'t understand anything about how to use the application, please ask.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'You should now perform a quick trial run, to ensure you know how to use the application, and that everything is working properly. Please ask for further instructions.'
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
      { fluid: true, staticTop: true, inverse: true },
      _react2.default.createElement(
        _reactBootstrap.Navbar.Header,
        null,
        _react2.default.createElement(
          _reactBootstrap.Navbar.Brand,
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Reply Annotation'
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
            { eventKey: 1, href: '#', onClick: function onClick() {
                return _this.props.instructions();
              } },
            'Instructions'
          ),
          _react2.default.createElement(
            _reactBootstrap.NavItem,
            { eventKey: 1, href: '#', onClick: function onClick() {
                return _this.props.save();
              } },
            'Save Annotation'
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
            'Previous Message'
          ),
          _react2.default.createElement(
            _reactBootstrap.NavItem,
            { eventKey: 2, href: '#', onClick: function onClick() {
                return _this.props.next();
              } },
            'Next Message'
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

    var cur_message = _odata2.default[0];
    cur_message.selected = true;

    var _this2 = _possibleConstructorReturn(this, (Chat.__proto__ || Object.getPrototypeOf(Chat)).call(this));

    _this2.state = {
      messages: [],
      all_messages: _odata2.default,
      cur_message: cur_message,
      reply_messages: [],
      all_reply_messages: [],
      is_typing: false,
      showInstructions: false
    };
    return _this2;
  }

  _createClass(Chat, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _reactMousetrapMixin2.default.bind(['left'], this.previousMessage.bind(this));
      _reactMousetrapMixin2.default.bind(['right'], this.previousMessage.bind(this));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _reactMousetrapMixin2.default.unbind(['left'], this.previousMessage);
      _reactMousetrapMixin2.default.unbind(['right'], this.nextMessage);
    }
  }, {
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
          var reply_message = all_messages[reply_message_key];
          reply_message.type = new_cur_message.username == reply_message.username ? 0 : 1;
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
    key: 'save',
    value: function save() {
      console.log(this.state.all_reply_messages);

      fetch('http://localhost:5000/save', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          all_reply_messages: this.state.all_reply_messages
        })
      });
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
      var save = this.save.bind(this);

      var instructionsClose = function instructionsClose() {
        return _this3.setState({ showInstructions: false });
      };

      var headerStyle = {
        marginLeft: '10px',
        marginTop: '0px'
      };

      console.log(_odata2.default);

      return _react2.default.createElement(
        'div',
        { style: outerDivStyle },
        _react2.default.createElement(InstructionsModal, { show: this.state.showInstructions, onHide: instructionsClose }),
        _react2.default.createElement(NavbarInstance, {
          prev: prev,
          next: next,
          instructions: function instructions() {
            return _this3.setState({ showInstructions: true });
          },
          save: save
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
                _reactBootstrap.PageHeader,
                { style: headerStyle },
                _react2.default.createElement(
                  'small',
                  null,
                  'Message Feed'
                )
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
                'div',
                null,
                _react2.default.createElement(
                  _reactBootstrap.PageHeader,
                  { style: headerStyle },
                  _react2.default.createElement(
                    'small',
                    null,
                    'Current Message'
                  )
                ),
                _react2.default.createElement(_index2.default, {
                  single: true,
                  messages: [this.state.cur_message],
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
                }),
                _react2.default.createElement(
                  _reactBootstrap.PageHeader,
                  { style: headerStyle },
                  _react2.default.createElement(
                    'small',
                    null,
                    ' '
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'replies' },
                _react2.default.createElement(
                  _reactBootstrap.PageHeader,
                  { style: headerStyle },
                  _react2.default.createElement(
                    'small',
                    null,
                    'Selected Parent Messages'
                  )
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
        )
      );
    }
  }]);

  return Chat;
}(_react.Component);

exports.default = Chat;