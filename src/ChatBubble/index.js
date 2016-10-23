'use strict';

import React, { Component } from 'react'

const styles = {
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
    marginRight: 30,
  },
  recipientChatbubble : {
    float: 'left',
    marginLeft: 45,
    backgroundColor: '#ccc',
  },
  rightRecipientChatbubble : {
    backgroundColor: '#ccc',
  },
  p: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
    margin: 0,
  },
  rp: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '400',
    margin: 0,
  },
  rtime: {
    color: '#1a1a1a',
    fontSize: 13,
    textAlign: 'right',
    padding: 0,
    marginBottom: 0,
    marginTop: 5,
  },
  utime: {
    color: '#f2f2f2',
    fontSize: 13,
    textAlign: 'right',
    padding: 0,
    marginBottom: 0,
    marginTop: 5,
  },
  rname: {
    color: '#737272',
    fontSize: 16,
    padding: 0,
    marginBottom: 3,
    marginTop: 5,
    fontWeight: 'bold',
  },
  uname: {
    color: '#014C69',
    fontSize: 16,
    padding: 0,
    marginBottom: 3,
    marginTop: 5,
    fontWeight: 'bold',
  }
}

export default class ChatBubble extends Component {
  constructor(props) {
    super()
    this.state = {
      message: '',
      bubbleStyles: {
        text: {},
        chatbubble: {},
        userBubble: {}
      },
    }
  }

  componentDidMount() {
    //this._parse_for_links(this.props.children)
    this.setState({
      message: this.props.children,
      bubbleStyles: this.props.bubbleStyles?
        {
          text: this.props.bubbleStyles.text?this.props.bubbleStyles.text:{},
          chatbubble: this.props.bubbleStyles.chatbubble?this.props.bubbleStyles.chatbubble:{},
          userBubble: this.props.bubbleStyles.userBubble?this.props.bubbleStyles.userBubble:{}
        }
        : {text:{},chatbubble:{}}
    })
  }

  _parse_for_styles(message) {
    if (typeof(message) === "string") {
      var bolded_start = message.search(/__(\w+\s?)+__/);
      var bolded_end = message.slice(bolded_start+2).search(/__/)
      var bolded = message.slice(bolded_start + 2, bolded_start + bolded_end + 2)
      // Render text
      if (bolded_start != -1 && bolded_end != -1) {
        return (
          <span>
            {this._parse_for_styles(message.slice(0, bolded_start))}
            <strong>{bolded}</strong>
            {this._parse_for_styles(message.slice(bolded_start + bolded_end + 4))}
          </span>
        )
      }
      else {
        return <span>{message}</span>
      }
    }
    return message
  }

  _parse_for_links(message) {
    var i, j, str, last;
    if (message.search(/<a href=/) !== -1 && (i = message.search(/<a href=/)) && (j = message.search(/a>/))) {
      last = message.slice(j+5, -1)
      return (<p>
        {message.slice(0, i)}
        <a target="_blank"
          href={message.slice(i+9, message.search(/'>|">/))}>
          {message.slice(message.search(/'>|">/)+2, j-2)}
        </a>
        {message.slice(j+2)}</p>
      )
    }
    else {
      return <p>{message}</p>
    }
  }

  test() {
    this.props.addMessage(this.props.recipient, this.state.message, this.props.username, this.props.time, this.props.message_key);
  }

  render() {
    if (this.props.selected) {
      return (
        <div style={Object.assign({},styles.chatbubble, this.state.bubbleStyles.chatbubble, this.state.bubbleStyles.userBubble)}>
          <p style={Object.assign({},styles.uname)}>{this.props.username}</p>
          <p style={Object.assign({},styles.p, this.state.bubbleStyles.text)}>{"!" + this.state.message}</p>
          <p style={Object.assign({},styles.utime)}>{this.props.time}</p>
        </div>
      )
    } else if (this.props.recipient == 1) {
      return (
        <div style={Object.assign({}, styles.chatbubble, styles.recipientChatbubble, this.state.bubbleStyles.chatbubble)} onClick={this.test.bind(this)}>
          <p style={Object.assign({},styles.rname)}>{this.props.username}</p>
          <p style={Object.assign({},styles.rp, this.state.bubbleStyles.text)}>{"!" + this.state.message}</p>
          <p style={Object.assign({},styles.rtime)}>{this.props.time}</p>
        </div>
      )
    } else if (this.props.recipient == 2) {
      return (
        <div style={Object.assign({}, styles.chatbubble, styles.rightRecipientChatbubble, this.state.bubbleStyles.chatbubble)} onClick={this.test.bind(this)}>
          <p style={Object.assign({},styles.rname)}>{this.props.username}</p>
          <p style={Object.assign({},styles.rp, this.state.bubbleStyles.text)}>{"!" + this.state.message}</p>
          <p style={Object.assign({},styles.rtime)}>{this.props.time}</p>
        </div>
      )
    } else {
      return (
        <div style={Object.assign({},styles.chatbubble, this.state.bubbleStyles.chatbubble, this.state.bubbleStyles.userBubble)} onClick={this.test.bind(this)}>
          <p style={Object.assign({},styles.uname)}>{this.props.username}</p>
          <p style={Object.assign({},styles.p, this.state.bubbleStyles.text)}>{"!" + this.state.message}</p>
          <p style={Object.assign({},styles.utime)}>{this.props.time}</p>
        </div>
      )
    }
  }
}
