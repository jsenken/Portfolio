import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Panel.css"
import Panel4a from "../Panel4a/Panel4a";
import Panel4b from "../Panel4b/Panel4b";


class Panel4 extends Component {

    constructor(props) {
      super(props);
      this.state = {
        bool: false,
      }
    }
    render() {
        return (
<div className="swap4" onMouseOver={() => this.setState({ bool: true })} onMouseOut={() => this.setState({ bool: false })}>
{
    this.state.bool ? (
      <Panel4b></Panel4b>  ) : (
       <Panel4a></Panel4a>     )
}
</div>

)
    }
}


export default Panel4;
