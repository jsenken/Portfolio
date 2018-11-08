import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Panel.css"



class Panel7 extends Component {

    constructor(props) {
      super(props);
      this.state = {
        bool: false,
      }
    }
    render() {
        return (
          <div>      
            <h1>Contact Me</h1>    
            <form>
              <label>
                Your Name:
                <input
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleInputChange} />
              </label>
              <br />
              <label>
                Your Email:
                <input
                  name="email"
                  type="text"
                  value={this.state.email}
                  onChange={this.handleInputChange} />
              </label>
              <br />
              <label>
                Your Message:
                <input
                  name="message"
                  id="message"
                  type="text"
                  value={this.state.message}
                  onChange={this.handleInputChange} />
              </label>
              <br />
              <input type="submit" value="Submit" />
            </form>        
          </div>
        )
    }
}


export default Panel7;
