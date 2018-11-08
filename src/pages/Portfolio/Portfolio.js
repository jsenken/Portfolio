import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./Portfolio.css";
import Panel1 from "../../components/Panel1/Panel1";
import Panel2 from "../../components/Panel2/Panel2";
import Panel3 from "../../components/Panel3/Panel3";
import Panel4 from "../../components/Panel4/Panel4";
import Panel5 from "../../components/Panel5/Panel5";
import Panel6 from "../../components/Panel6/Panel6";
import Panel7 from "../../components/Panel7/Panel7";
import Panel8 from "../../components/Panel8/Panel8";




class Portfolio extends Component {
    state = {
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col className="panel" id="1" size="md-3">
                        <Panel1></Panel1>
                    </Col>
                    <Col className="panel" id="2" size="md-3">
                        <Panel2></Panel2>
                    </Col>
                    <Col className="panel" id="3" size="md-3">
                        <Panel3></Panel3>
                    </Col>
                    <Col className="panel" id="4" size="md-3">
                        <Panel4></Panel4>
                    </Col>
                </Row>
                <Row>
                    <Col className="panel" id="5" size="md-3">
                        <Panel5></Panel5>
                    </Col>
                    <Col className="panel" id="6" size="md-3">
                        <Panel6></Panel6>
                    </Col>
                    <Col className="panel" id="7" size="md-3">
                        <Panel7></Panel7>
                    </Col>
                    <Col className="panel" id="8" size="md-3">
                        <Panel8></Panel8>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Portfolio;