import React from "react";

function Footer(){
    var date = new Date();
    var year = date.getFullYear();
    return <footer>Copyright &copy; {year}. <br/>Created By Sirasit Thitirattanakorn</footer>
}

export default Footer;