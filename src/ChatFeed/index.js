// Copyright 2016 Brandon Mowat
// Written, developed, and designed by Brandon Mowat for the purpose of helping
// other developers make chat interfaces.

'use strict';

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ChatBubble from '../ChatBubble/index.js'

const styles = {

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
    zIndex: 100,
  }
}

export default class ChatFeed extends Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: props.messages, 
    }
    if (this.props.setAddLabelledReply) {
      this.props.setAddLabelledReply(this.addNewMessage.bind(this));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.messages != this.props.messages) {
      this.setState({
        messages: this.props.messages
      });
    }
  }

  _scrollToBottom() {
    const {chat} = this.refs;
    const scrollHeight = chat.scrollHeight;
    const height = chat.clientHeight;
    const maxScrollTop = scrollHeight - height;
    ReactDOM.findDOMNode(chat).scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }

  handleClick(recipient, message, username, time, message_key) {
    if(this.props.no_click) {
      return;
    }

    if (this.props.addLabelledReply) {
      if(recipient == 1) {
        recipient = 0;
      }
      this.props.addLabelledReply(recipient, message, username, time, message_key);
    } else {
      this.removeMessage(message_key);
    }
  }

  removeMessage(message_key) {
    for (var i = 0; i < this.state.messages.length; i++) {
      if (this.state.messages[i].message_key == message_key) {
        var new_messages = this.state.messages;
        new_messages.splice(i, 1);
        this.setState({messages: new_messages});
        break;
      }
    }
  }

  addNewMessage(recipient, message, username, time, message_key) {
    this.removeMessage(message_key);
    var new_messages = this.state.messages;
    new_messages.push({type: recipient, message: message, username: username, time: time, message_key: message_key});
    this.setState({messages: new_messages});
  }

  /**
    * Parses and collects messages of one type to be grouped together.
    *
    * @param {messages} - a list of message objects
    * @param {index} - the index of the end of the message grou
    * @param {type} - the type of group (user or recipient)
    * @return {message_nodes} - a JSX wrapped group of messages
    */
  _renderGroup(messages, index, type) {
    var group = []

    for (var i = index; messages[i]?(messages[i].type == type):false; i--) {
      group.push(messages[i])
    }

    var cur_username = messages[messages.length - 1].username;
    var last_selected = messages[messages.length - 1].selected;

    var message_nodes = group.reverse().map((curr, index) => {
      return <ChatBubble 
                addMessage={this.handleClick.bind(this)} 
                key={Math.random().toString(36)}
                message_key={curr.message_key} 
                recipient={last_selected ? (curr.username == cur_username ? 0 : 1) : curr.type} 
                username={curr.username} 
                time={curr.time}
                selected={curr.selected}
                bubbleStyles={this.props.bubbleStyles}>
                   {curr.message}
            </ChatBubble>
    })
    return (
      <div key={Math.random().toString(36)} style={styles.chatbubbleWrapper}>
        {message_nodes}
      </div>
    )
  }

  /**
    * Determines what type of message/messages to render.
    *
    * @param {messages} - a list of message objects
    * @return {message_nodes} - a list of message JSX objects to be rendered in
    *   our UI.
    */
  _renderMessages(messages) {
    var message_nodes = messages.map((curr, index) => {

      // Find diff in message type or no more messages
      if (
        (messages[index+1]?false:true) ||
        (messages[index+1].type != curr.type)
      ) {
        return this._renderGroup(messages, index, curr.type);
      }

    });

    return message_nodes
  }

  render() {
    window.setTimeout(() => {
      this._scrollToBottom()
    },10)

    var className = this.props.single ? "" : "outer";

    return (
      <div className="chat-history">
        <div ref="chat" className={className}>
          <div className="inner">
            {this._renderMessages(this.state.messages)}
          </div>
        </div>
      </div>
    )
  }

}
