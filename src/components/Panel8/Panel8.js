import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Panel.css"
import Panel8a from "../Panel8a/Panel8a";
import Panel8b from "../Panel8b/Panel8b";


class Panel8 extends Component {

    constructor(props) {
      super(props);
      this.state = {
        bool: false,
      }
    }
    render() {
        return (
<div className="swap8" onMouseOver={() => this.setState({ bool: true })} onMouseOut={() => this.setState({ bool: false })}>
{
    this.state.bool ? (
      <Panel8b></Panel8b>  ) : (
       <Panel8a></Panel8a>     )
}
</div>

)
    }
}


export default Panel8;
