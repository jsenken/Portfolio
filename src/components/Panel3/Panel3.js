import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Panel.css"
import Panel3a from "../Panel3a/Panel3a";
import Panel3b from "../Panel3b/Panel3b";


class Panel3 extends Component {

    constructor(props) {
      super(props);
      this.state = {
        bool: false,
      }
    }
    render() {
        return (
<div className="swap3" onMouseOver={() => this.setState({ bool: true })} onMouseOut={() => this.setState({ bool: false })}>
{
    this.state.bool ? (
      <Panel3b></Panel3b>  ) : (
       <Panel3a></Panel3a>     )
}
</div>

)
    }
}


export default Panel3;
