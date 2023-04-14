import React, { Component } from "react";
import Box from "../practice-1/practice-1";
export default class WillUnMount extends Component { 
  constructor(props) {
    super(props);
    this.state = {
    isDisplay: true
    }
  }
  onRemoveBox= () =>{
    this.setState({ isDisplay: false });
 }
  render() { 
    return (
      <div>
        {this.state.isDisplay && <Box />}
        <div onClick={this.onRemoveBox}>Delete Component Box</div>
      </div>
    )
  }
}