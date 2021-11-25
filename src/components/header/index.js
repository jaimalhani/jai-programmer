import React from "react"
 import {Container , Row , Col, Button} from "react-bootstrap"
 import Profile from "../../images/jai2.png"
 import  "../../components/CSS/style.css";
function Header() {
  return (
    <Container className="headerbg">
    {/* Stack the columns on mobile by making one full-width and the other half-width */}
    <Row>
      <Col xs={6} md={6} sm={8}>
       
      <img src={Profile} height="500px" width="100%" className="img"  />
      </Col>
      <Col xs={6} md={6} sm={4} style={{alignItems:"center", justifyContent:"center", display:"flex",  flexDirection:"column"}}>
           
    <h2 className="text-info font_main">I'm Jai kumar</h2>
    <h6 className="font_header">Professional front-end web developer <br/> and designer.</h6>
      <Button variant="outline-info" className="text-light bg-info" >Hire me</Button>{' '}
     
     </Col>  
    </Row>
  </Container >

  );
}

export default Header;
