import React from 'react'
import { render } from 'react-dom'
import { Chat } from '../lib'

console.log(Chat);
render(
  (<Chat/>),
  document.getElementById('chat-ui')
)
