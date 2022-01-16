import React from "react";

function Footer(){
    var date = new Date();
    var year = date.getFullYear();
    return <footer>Copyright &copy; {year}. Created By Sirux</footer>
}

export default Footer;