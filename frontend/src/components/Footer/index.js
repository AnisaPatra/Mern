import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4" style={{ backgroundColor: "black", color: "white" , fontFamily: "serif"}}>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title" style={{fontSize: "30px", fontFamily : "Lora"}}>Contact Us</h5><br/>
            <p>
              <MDBIcon icon="map-marker-alt" style={{padding: "5px",paddingRight:"10px"}}/>
                     Vridhi Headquarters, J.N Road, Mulund(W), Maharashtra
            </p>
            <p>
              <MDBIcon icon="envelope" style={{padding: "5px",paddingRight:"10px"}}/>
              vridhi_official@gmail.com
            </p>
            <p>
              <MDBIcon icon="phone-alt" style={{padding: "5px",paddingRight:"10px"}}/>
              +91 251 253146
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title" style={{fontSize: "30px", fontFamily : "Lora"}}>Stay In Touch</h5><br/>
            <MDBIcon fab icon="linkedin" size="2x" style={{padding: "5px"}}/>
            <MDBIcon fab icon="facebook-square" size="2x" style={{padding: "5px"}}/>
            <MDBIcon fab icon="twitter-square" size="2x" style={{padding: "5px"}}/>
            <MDBIcon fab icon="pinterest-square" size="2x" style={{padding: "5px"}}/>
            <MDBIcon fab icon="youtube-square" size="2x" style={{padding: "5px"}}/>
            <br /><br/>
            <input type="email" placeholder="Subscribe For Updates" style={{height:"38px"}}/>
            <br/>
            <button class="btn btn-success" style={{width:"120px"}}>Subscribe</button>

          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="http://localhost:3000/"> Vridhi.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;