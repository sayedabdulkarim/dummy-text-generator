import React, {Component} from 'react';
class Output extends Component{
    state = {
      value: this.props.value
    }
  
  render(){
    return (
      <div className="well output">
        {this.props.value}
      </div>
    )
  }
}

export default Output;