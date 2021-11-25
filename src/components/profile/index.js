import React from "react"
 import {Container,Row,Col}from "react-bootstrap" 
 import Profileimg from "../../images/profilejai2.png"
 import  "../../components/CSS/style.css";
 
function Profile() {
   return(
      <div>
 <Container style={{marginTop:"50px" , marginbottom:"100px"}}>
  <Row>
    <Col  sm={7} style={{marginTop:"5%"}}>
       <h4 style={{lineHeight:"1.9"}}>Full Name :<span> Jai Kumar Malhani</span></h4>
       <h4 style={{lineHeight:"1.9"}}>Profession :<span> Web developing and designing</span></h4>
        <h4 style={{lineHeight:"1.9"}}>Age :<span> 17 Years</span></h4>
         <h4 style={{lineHeight:"1.9"}}>Skills  :<span> HTML5, CSS3 , JAVASCRIPT, REACTJS</span></h4>
         <h4 style={{lineHeight:"1.9"}}>Email Address : <span> Jaimalhani045@gmail.com</span></h4>

     </Col>
    <Col sm={5} className="profilebg "> <img src={Profileimg} /></Col>
  </Row>
 
</Container>

   </div>
   )
}

export default Profile;
