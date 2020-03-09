import React from "react"
import ReactDOM from"react-dom"

const name ="Max";
const currentDate = new Date();
const year = currentDate.getFullYear();


ReactDOM.render(
<div> 
<p> Created  By: {name}</p>
<p>CopyRight {year}.</p>
</div>, document.getElementById("root"))