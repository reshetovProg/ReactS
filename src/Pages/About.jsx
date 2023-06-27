import React, { Component } from 'react'
import {Container, Tab, Nav, Row, Col} from 'react-bootstrap'

export default class About extends Component {
  render() {
    return (
      <Container>
         <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
               <Col sm={3}>
                  <Nav variant="pills" classsName="flex-column mt-2">
                     <Nav.Item>
                        <Nav.Link eventKey="f1">Design</Nav.Link>
                        <Nav.Link eventKey="f2">Team</Nav.Link>
                        <Nav.Link eventKey="f3">Frameworks</Nav.Link>
                        <Nav.Link eventKey="f4">Programming</Nav.Link>
                        <Nav.Link eventKey="f5">Libraries</Nav.Link>
                     </Nav.Item>
                  </Nav>

               </Col>
               <Col sm={9}>
                  <Tab.Content className="mt-3">
                     <Tab.Pane eventKey="f1">
                        <img src="https://img.freepik.com/premium-photo/design-word-cloud-innovation-idea-creativity-design-concept_505353-280.jpg"/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur iusto. Officiis, in odio illum ullam sed maiores rem aspernatur dicta enim a molestias atque.</p>
                     </Tab.Pane>
                     <Tab.Pane eventKey="f2">
                        <img src="https://thumbs.dreamstime.com/b/%D0%BE%D0%B1%D1%8A%D0%B5%D0%B4%D0%B8%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81%D0%B0-%D0%BA%D0%B0%D0%BA-%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%BB%D0%BE%D0%BC%D0%BA%D0%B0-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BE-%D1%81%D0%BB%D0%BE%D0%B2%D0%BE-teaming-%D0%BD%D0%B0-164219445.jpg"/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur iusto. Officiis, in odio illum ullam sed maiores rem aspernatur dicta enim a molestias atque.</p>
                     </Tab.Pane>
                     <Tab.Pane eventKey="f3">
                        <img src="https://www.shutterstock.com/image-photo/framework-inscription-against-laptop-code-260nw-1915506901.jpg"/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur iusto. Officiis, in odio illum ullam sed maiores rem aspernatur dicta enim a molestias atque.</p>
                     </Tab.Pane>
                     <Tab.Pane eventKey="f4">
                        <img src="https://www.shutterstock.com/image-vector/concept-computer-programming-developing-software-260nw-2149658841.jpg"/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur iusto. Officiis, in odio illum ullam sed maiores rem aspernatur dicta enim a molestias atque.</p>
                     </Tab.Pane>
                     <Tab.Pane eventKey="f5">
                        <img src="https://www.shutterstock.com/image-photo/book-stack-on-wood-desk-260nw-1017025384.jpg"/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur iusto. Officiis, in odio illum ullam sed maiores rem aspernatur dicta enim a molestias atque.</p>
                     </Tab.Pane>
                  </Tab.Content>
               </Col>
            </Row>

         </Tab.Container>
      </Container>
    )
  }
}
