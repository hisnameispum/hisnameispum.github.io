import React from "react";

function Note(){
    var noteHeader = "Note Heading";
    var noteContent = "Note content";
    return  (
    <div>
        <h4>{noteHeader}</h4>
        <p>{noteContent}</p>
    </div>);
}

export default Note;
