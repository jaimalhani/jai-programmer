import React from "react"
import Aboutme from "../../components/aboutme";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Navbr from "../../components/navbar";
import Profile from "../../components/profile";
 
function home() {
   return(
      <div style={{overflowX:"hidden"}}>
    <Navbr/>
   
   <Header/>
<Profile/>
<Aboutme/>
<Footer/>
   </div>
   )
}

export default home;
