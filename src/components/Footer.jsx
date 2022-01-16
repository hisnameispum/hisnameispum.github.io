import React from "react";

function Footer(){
    var date = new Date();
    var year = date.getFullYear();
    return <p>Copyright &copy; {year}. Created By Sirux</p>
}

export default Footer;