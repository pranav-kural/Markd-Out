import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'

export default class Editor extends Component {

    constructor(props) {
      super(props);
      this.state = {
        text: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nGrocery list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nBuilt with 💕 by [Pranav Kural](https://freecodecamp.com/pranav-kural)'
      }
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => this.setState({text: event.target.value});



    render() {
      return (
        <div className="container">
          <textarea rows="22" className="form-control" value={this.state.text} onChange={this.handleChange}>
          </textarea>
          <div>
            <ReactMarkdown source={this.state.text} />
          </div>
        </div>
      )
    }


}
