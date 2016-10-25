'use strict'

import React, { Component } from 'react'
import { render } from 'react-dom'
import SplitPane from 'react-split-pane'

import Button from 'custom-react-button'

import ChatFeed from '../ChatFeed/index.js'
import ChatBubble from '../ChatFeed/index.js'

import { Modal } from 'react-bootstrap';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';

import data from '../../odata.json'

import Mousetrap  from 'react-mousetrap-mixin';

const InstructionsModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Annotation Instructions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Introduction</h3>
          <p>As an annotator using this application, you will spend somewhere between 1 - 2 hours, to manually identify all <strong>reply</strong> relationships for a given chat log.</p>
          <p>Your annotation will be used to solve the problem of <em>Thread Disentanglement in Multiparticipant Chats</em>. Your annotation will also be published online for other research groups to use.</p>
          <p>The chat corpus being used was taken from <a href="http://www.ling.ohio-state.edu/~elsner.14/resources/chat-manual.html">Elsner & Charniak</a>. The corpus is a recording of an IRC chat in late May 2007. It comes from the ##linux channel at http://freenode.net. </p>
          <p>The rest of the instructions define what a <strong>reply</strong> relationship is and explain how to use the application.</p>

          <h3>Reply Definition</h3>
          <p>With our definition of a reply, a message is either a reply/continuation of a previous message or it is initiating a new topic of conversation.</p>

          <p>To best define what a reply/continuation is, let's consider the chat log below. </p>

          <img style={{width: '90%', marginBottom: '15px', marginTop: '15px'}} src="http://i.imgur.com/75f8jox.png" />

          <p>The second message, sent by Jack, is replying to the previous message sent by John. Therefore, we would select <strong>John's message</strong> to be a potential parent message for Jack's message.</p>

          <p>Brian's message is not a direct reply to any previous message. However, it was <em>prompted</em> by <strong>John/Jack's messages</strong>. Seeing the two previous messages discussing TV shows, led to Brian remembering he had not renewed his Netflix subscription. Since Brian's message was prompted by the previous two messages, we could select the two previous messages as potential parent messages for Brian's message.</p>

          <p>Katie's message is a completely new topic of conversation. Her message was not prompted/brought about by any of the previous messages in the chat log. Therefore we would not select any replies for it. </p>

          <p>Jenny's first message (10:33:05) is a reply to <strong>Brian's message</strong>, as indicated by the fact that she mentioned him by name in her message.</p>

          <p>Jenny's second message (10:33:15) is a reply to <strong>Katie's message</strong>. </p>

          <p>Jenny's third message (10:33:20) is another reply to <strong>Katie's message</strong>. However, this message can also be thought of as a <strong>continuation</strong> of her previous message (10:33:15). Therefore, when selecting parent messages for this message, we can select Katie's message, Jenny's second message or both. </p>

          <p>The final message by Katie is a correction of her previous message. This message is a <strong>continuation</strong> of Katie's previous message, therefore we would select that message as the reply for this message.</p>

          <p>Please make sure that the explanations make sense and ask any questions if there's anything you don't understand.</p>

          <p>Identifying replies is occasionally ambiguous and sometimes there's no right anwser. Nonetheless, please <strong>try your best</strong> and ensure that you consider each message carefully.</p>

          <h3>Using the Application</h3>

          <p>With this application, you will iterate through a chat log of messages. For every message, you will need to select all messages that the message is a reply to.</p>

          <p>Another way of saying this, is that you want to find the <em>parent</em> message for every given message.</p>

          <p>In the top-right, you see a single message bubble. That is the current message. This message also appears at the end of the message stream.</p>
          
          <p>The current message, is the message that you're currently finding parent messages for.</p>

          <p>In the bottom-right, you see a list of messages (initially empty). This list of messages represents all of the parent messages for the <em>current message</em>.</p>

          <p>In the left, you see all of the messages that were sent before (and including) the current message.</p>

          <p>You can click on any message in the left message view, to select it as a parent message. Clicking a message will add it to the view on the right hand side.</p>

          <p>If you accidentally added a message as a parent, you can simply re-click it to remove it from the list of parent messages.</p>

          <p>When you're done selecting all of the parent messages for a given message, click the <em>Next Message</em> button in the top right, to move on to the next message.</p>

          <p>If you ever want to go back to a message that you already annotated, you can click the <em>Previous Message</em> button to do that.</p>

          <p>When you're done, you can click the <em>Save Annotation</em> button in the top left. It's also reccomended that you click the button occasionally to save your progress.</p>

          <p>If you ever need to review these instructions, please click the <em>Instructions</em> button in the top left.</p>

          <p>Please make sure to read these instructions carefully. If you don't understand anything about how to use the application, please ask.</p>

          <p>You should now perform a quick trial run, to ensure you know how to use the application, and that everything is working properly. Please ask for further instructions.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

const NavbarInstance = React.createClass({
  render() {
    return (
      <Navbar fluid staticTop inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Reply Annotation</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#" onClick={() => this.props.instructions()}>Instructions</NavItem>
            <NavItem eventKey={1} href="#" onClick={() => this.props.save()}>Save Annotation</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#" onClick={() => this.props.prev()}>Previous Message</NavItem>
            <NavItem eventKey={2} href="#" onClick={() => this.props.next()}>Next Message</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
});

export default class Chat extends Component {
  constructor() {
    var cur_message = data[0];
    cur_message.selected = true;
    super()
    this.state = {
      messages : [
      ],
      all_messages : data,
      cur_message: cur_message,
      reply_messages: [],
      all_reply_messages: [],
      is_typing: false,
      showInstructions: false,
    }
  }

  componentDidMount() {
    Mousetrap.bind(['left'], this.previousMessage.bind(this));
    Mousetrap.bind(['right'], this.previousMessage.bind(this));
  }

  componentWillUnmount() {
    Mousetrap.unbind(['left'], this.previousMessage);
    Mousetrap.unbind(['right'], this.nextMessage);
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

  save() {
    console.log(this.state.all_reply_messages);

    fetch('http://localhost:5000/save', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        all_reply_messages: this.state.all_reply_messages,
      }),
    });

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
      marginTop: '-20px',
      height: '94%',
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
    var save = this.save.bind(this);

    let instructionsClose = () => this.setState({ showInstructions: false });

    var headerStyle = {
      marginLeft: '10px',
      marginTop: '0px',
    };

    console.log(data);

    return (
      <div style={outerDivStyle}>
        <InstructionsModal show={this.state.showInstructions} onHide={instructionsClose} />
        <NavbarInstance
          prev={prev}
          next={next}
          instructions={() => this.setState({ showInstructions: true })}
          save={save}
        />
        <div style={mainStyle}>
          <SplitPane split="vertical" minSize={340} defaultSize={980}>
            <div style={divStyles}>
              <PageHeader style={headerStyle}><small>Message Feed</small></PageHeader>
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
              <div>
               <PageHeader style={headerStyle}><small>Current Message</small></PageHeader>
               <ChatFeed
                  single={true}
                  messages={[this.state.cur_message]}
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
                <PageHeader style={headerStyle}><small> </small></PageHeader>
              </div>
              <div className="replies">
                <PageHeader style={headerStyle}><small>Selected Parent Messages</small></PageHeader>
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
            </div>
          </SplitPane>
        </div>
      </div>
    )
  }
}
