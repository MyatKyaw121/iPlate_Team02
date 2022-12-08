import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  var globalVar = window.sessionStorage;
  var isSucceed = globalVar.getItem("isSucceed");
  return (
    <div>
      
      {/* {isSucceed && ( */}
    <div>
          
    <footer id="footer">
    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>iPlate SFSU 2022</span></strong>. All Rights Reserved
      </div>
    </div>
    </footer>
  
    </div>
      
    </div>
    
  );
}

export default Footer;
