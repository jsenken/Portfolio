import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
// import "./Portfolio.css";

class Test extends Component {
    state = {
    }



    render() {
        return(
            <div onMouseOver={() => this.setState({ bool: true })} onMouseOut={() => this.setState({ bool: false })}>
                {
                    this.state.bool ? (
                    <div>[OPTION1] show after onMouseEnter</div>
                    ) : (
                    <div>[OPTION2] show after onMouseLeave</div>
                    )
                }
            </div>
        )
    }
}

export default Test;