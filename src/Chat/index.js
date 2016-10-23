'use strict'

import React, { Component } from 'react'
import { render } from 'react-dom'
import SplitPane from 'react-split-pane'

import Button from 'custom-react-button'

import ChatFeed from '../ChatFeed/index.js'
import ChatBubble from '../ChatFeed/index.js'

import { Modal } from 'react-bootstrap';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';

const InstructionsModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Wrapped Text</h4>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
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
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#" onClick={() => this.props.prev()}>Link Right</NavItem>
            <NavItem eventKey={2} href="#" onClick={() => this.props.next()}>Link Right</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
});

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
      is_typing: false,
      showInstructions: false,
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

    let instructionsClose = () => this.setState({ showInstructions: false });

    return (
       <div style={outerDivStyle}>
         <InstructionsModal show={this.state.showInstructions} onHide={instructionsClose} />
         <NavbarInstance
           prev={prev}
           next={next}
         />
         <div style={mainStyle}>
           <SplitPane split="vertical" minSize={340} defaultSize={980}>
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
       </div>
    )
  }
}
