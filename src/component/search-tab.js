
import React from "react"
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import SearchTrending from "./search-trending";

export default function SearchTab() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="trending">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="trending">#trending</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="ui-element">#ui-element</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="screen-element">#screen-element</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="app-element">#app-element</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="trending">
                            <SearchTrending />
                        </Tab.Pane>
                        <Tab.Pane eventKey="ui-element">UI element tab content</Tab.Pane>
                        <Tab.Pane eventKey="screen-element">Screen element tab content</Tab.Pane>
                        <Tab.Pane eventKey="app-element">App tab content</Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
    )
}