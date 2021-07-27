import React, { Component } from 'react'
import { init } from 'ityped'
import { Hidden } from '@material-ui/core'

export default class ITyped extends Component {
  componentDidMount() {
    const myElement = document.querySelector('#myElement')
    init(myElement, {
      disabledBackTyping: false,
      showCursor: false,
      strings: ['Lets get to work.'],
      typeSpeed: 80,
      backDelay: 500,
      loop: true,
      cursorChar: "|",
    })
  }
  render() {
    return <div id="myElement"></div>
  }
}
