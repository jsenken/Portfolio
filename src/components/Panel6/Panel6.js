import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Panel.css"
import Panel6a from "../Panel6a/Panel6a";
import Panel6b from "../Panel6b/Panel6b";


class Panel6 extends Component {

    constructor(props) {
      super(props);
      this.state = {
        bool: false,
      }
    }
    render() {
        return (
<div className="swap6" onMouseOver={() => this.setState({ bool: true })} onMouseOut={() => this.setState({ bool: false })}>
{
    this.state.bool ? (
      <Panel6b></Panel6b>  ) : (
       <Panel6a></Panel6a>     )
}
</div>

)
    }
}


export default Panel6;
