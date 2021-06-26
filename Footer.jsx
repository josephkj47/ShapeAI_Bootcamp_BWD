import React from "react";

function Header(){
  var currYear = new Date().getFullYear();
  return (
     
          <footer>
           <p> Copyright @{currYear} </p>
          </footer>
  );
}
export default Header