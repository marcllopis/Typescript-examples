import React, { Component } from 'react';


type Props = {
  something: string
}

type State = {
  stuff: string
}

class OldClass extends Component<Props, State> {

  state = {
    stuff: 'some stuff'
  }

  render() {
    return (
      <div>
        <h1>Class component</h1>
        <h1>{this.state.stuff}</h1>
        <h1>{this.props.something}</h1>
      </div>
    );
  }
}


export default OldClass;