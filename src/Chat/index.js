'use strict'

import React, { Component } from 'react'
import { render } from 'react-dom'
import SplitPane from 'react-split-pane'

import Button from 'custom-react-button'

import ChatFeed from '../ChatFeed/index.js'
import ChatBubble from '../ChatFeed/index.js'

export default class Chat extends Component {
  constructor() {
    super()
    this.state = {
      messages : [
      ],
      all_messages : [
        {message_key: 0, username: 'John', time: '10:59 pm', message: "Hey there you0,"}, // Gray bubble
        {message_key: 1, username: 'John', time: '10:59 pm', message: "What have you1,been up to?"},
        {message_key: 2, username: 'John', time: '10:59 pm', message: "What have you2,been up to?"},
        {message_key: 3, username: 'John', time: '10:59 pm', message: "What have you3,been up to?"},
        {message_key: 4, username: 'John', time: '10:59 pm', message: "What have you4,been up to?"},
        {message_key: 5, username: 'John', time: '10:59 pm', message: "What have you5,been up to?"},
        {message_key: 6, username: 'John', time: '10:59 pm', message: "Hey there you6,"}, // Gray bubble
        {message_key: 7, username: 'John', time: '10:59 pm', message: "What have you7,been up to?"},
        {message_key: 8, username: 'John', time: '10:59 pm', message: "What have you8,been up to?"},
        {message_key: 9, username: 'John', time: '10:59 pm', message: "What have you9,been up to?"},
        {message_key: 10, username: 'Jack', time: '10:59 pm', message: "What have yo10 been up to?"},
        {message_key: 11, username: 'John', time: '10:59 pm', message: "What have yo11 been up to?"},
        {message_key: 12, username: 'Jack', time: '10:59 pm', message: "What have yo12 been up to?"},
        {message_key: 13, username: 'John', time: '10:59 pm', message: "What have yo13 been up to?"},
        {message_key: 14, username: 'Jack', time: '10:59 pm', message: "What have yo14 been up to?"},
        {message_key: 15, username: 'John', time: '10:59 pm', message: "What have yo15 been up to?"},
        {message_key: 16, username: 'Jack', time: '10:59 pm', message: "What have yo16 been up to?"},
        {message_key: 17, username: 'Jack', time: '10:59 pm', message: "What have yo17 been up to?"},
        {message_key: 18, username: 'John', time: '10:59 pm', message: "What have yo18 been up to?"},
        {message: "This is the newest message", time: '11:00 pm', username: 'John', message_key: 19},
        {message_key: 20, username: 'John', time: '10:59 pm', message: "NEW MESSAGE"},
      ],
      cur_message: {message_key: 0, username: 'John', time: '10:59 pm', message: "Hey there you0,", selected: true}, 
      reply_messages: [],
      all_reply_messages: [],
      is_typing: false
    }
  }

  nextMessage() {
    if(this.state.cur_message.message_key == this.state.all_messages.length - 1) {
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
    }
    cur_messages.push(newest_message);

    // Set the replies for the current message
    var all_message_keys = []
    for (var i = 0; i < cur_reply_messages.length; i++) {
      all_message_keys.push(
        cur_reply_messages[i].message_key
      );
    }
    cur_all_reply_messages[this.state.cur_message.message_key] = all_message_keys;

    console.log(cur_all_reply_messages);

    this.setState({
      cur_message: new_cur_message,
      messages: cur_messages,
      reply_messages: new_reply_messages,
      all_reply_messages: cur_all_reply_messages,
    });
  }

  previousMessage() {
    if(this.state.cur_message.message_key == 0) {
      return;
    }

    var all_messages = this.state.all_messages;

    var cur_message = this.state.cur_message;
    var cur_messages = this.state.messages;
    var cur_reply_messages = this.state.reply_messages;
    var cur_all_reply_messages = this.state.all_reply_messages;

    var new_cur_message = cur_messages[cur_messages.length - 1];
    new_cur_message.selected = true;

    cur_messages.splice(-1,1);

    // Set the new (if exists) reply list
    var new_reply_messages = []
    if (cur_all_reply_messages.length > new_cur_message.message_key) {
      for (var i = 0; i < cur_all_reply_messages[new_cur_message.message_key].length; i++) {
        var reply_message_key = cur_all_reply_messages[new_cur_message.message_key][i];
        new_reply_messages.push(all_messages[reply_message_key]);
      }
    } else {
      cur_all_reply_messages.push([]);
    }

    // Set the replies for the current message
    var all_message_keys = []
    for (var i = 0; i < cur_reply_messages.length; i++) {
      all_message_keys.push(
        cur_reply_messages[i].message_key
      );
    }
    cur_all_reply_messages[this.state.cur_message.message_key] = all_message_keys;

    console.log(cur_all_reply_messages);

    this.setState({
      cur_message: new_cur_message,
      messages: cur_messages,
      reply_messages: new_reply_messages,
      all_reply_messages: cur_all_reply_messages,
    });
  }

  setAddLabelledReply(addLabelledReply) {
    this.setState({addLabelledReply: addLabelledReply});
  }

  render() {
    var divStyles = {
      overflow: 'hidden',
    };

    var headerStyle = {
      position: 'fixed',
      backgroundColor: '#003366',
      top: 0,
      left: 0,
      right: 0,
      margin: '0px',
      height: '50px',
    };

    var outerDivStyle = {
      height: '100%',
      width: '100%',
    };

    var mainStyle = {
      paddingTop: '50px'
    };

    var buttonStyle = {
      height: '50px',
      width: '200px',
      float: 'left',
    };

    var buttonTwoStyle = {
      height: '50px',
      width: '200px',
      float: 'right',
    };

    var prev = this.previousMessage.bind(this);
    var next = this.nextMessage.bind(this);

    return (
       <div style={outerDivStyle}>
         <div style={headerStyle}>
           <div style={buttonStyle} onClick={() => prev()}>LEFT</div>
           <div style={buttonTwoStyle} onClick={() => next()}>RIGHT</div>
         </div>
         <SplitPane style={mainStyle} split="vertical" minSize={340} defaultSize={980}>
           <div style={divStyles}>
             <h1>Message Feed</h1>
             <ChatFeed
               addLabelledReply={this.state.addLabelledReply}
               messages={this.state.messages.concat([this.state.cur_message])} 
               is_typing={this.state.is_typing} 
               bubbleStyles={{
                 text: {
                   fontSize: 18,
                 },
                 chatbubble: {
                   maxWidth: 600,
                 },
                 userBubble: {
                   backgroundColor: '#0084FF',
                 }
               }}
             />
           </div>
           <div style={divStyles}>
             <h1>Reply Messages</h1>
             <ChatFeed
               setAddLabelledReply={this.setAddLabelledReply.bind(this)}
               messages={this.state.reply_messages} 
               is_typing={this.state.is_typing} 
               bubbleStyles={{
                 text: {
                   fontSize: 18,
                 },
                 chatbubble: {
                   maxWidth: 600,
                 },
                 userBubble: {
                   backgroundColor: '#0084FF',
                 }
               }}
             />
           </div>
         </SplitPane>
       </div>

    )
  }
}
