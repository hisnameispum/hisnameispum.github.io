import React from "react";

function Note(){
    var noteHeader = "Note Heading";
    var noteContent = "Note content";
    return  (
    <div className="note">
        <h1>{noteHeader}</h1>
        <p>{noteContent}</p>
    </div>);
}

export default Note;
