import React from "react"
 import {Container,Row,Col}from "react-bootstrap" 
 import logo from "../../images/user (1).png"
 import  "../../components/CSS/style.css";
 
function Aboutme() {
   return(
      <div style={{margin:"50px 0px"}}>
 <Container >
  <Row>
    <Col  sm={6} style={{alignItems:"center", justifyContent:"center", display:"flex"}}>
       <img src={logo} height="40px" /> <span style={{fontSize:"30px", }}>About me</span>
     </Col>
    <Col sm={6}> 
    <h4 className="text-dark "  style={{margin:"50px 10px" ,fontSize:"18px", }}><span style={{fontSize:"25px"}}> hello There,</span> <br/> I am a passionate front-end software developer.
         And I am working on various front-end web developing projects for a long time. <br/> <br/>
         My expertise are : <br/>
         <span style={{fontSize:"18px"}}>✔HTML5</span> <br/>
         <span style={{fontSize:"18px"}}>✔ CSS3</span> <br/>
         <span style={{fontSize:"18px"}}> ✔ JavaScript,</span> <br/>
         <span style={{fontSize:"18px"}}> ✔ Bootstrap</span> <br/>

         <span style={{fontSize:"18px"}}>✔ Firebase</span> <br/>
        <br/>
          If you have any kind of work in the above technologies then I will be your best choice.
           and I assure you that you will be impressed and satisfied with my work.
         My priority is the 100% satisfaction of my client.
        </h4>  
    </Col>
  </Row>
 
</Container>

   </div>
   )
}

export default Aboutme;
