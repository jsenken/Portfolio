import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Panel.css"
import Panel1a from "../Panel1a/Panel1a";
import Panel1b from "../../components/Panel1b/Panel1b"


class Panel1 extends Component {

    constructor(props) {
      super(props);
      this.state = {
        bool: false,
      }
    }
    render() {
        return (
<div className="swap" onMouseOver={() => this.setState({ bool: true })} onMouseOut={() => this.setState({ bool: false })}>
{
    this.state.bool ? (
      <Panel1b></Panel1b>  ) : (
       <Panel1a></Panel1a>     )
}
</div>

)
    }
}


export default Panel1;
