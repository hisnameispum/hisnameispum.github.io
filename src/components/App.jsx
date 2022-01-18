import React from "react"
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../note";

function App(){
    return (
        <div>
            <Header/>
            {notes.map(noteItems => <Note className="note" key={noteItems.key} header={noteItems.title} content={noteItems.content} />)}
            <Footer/>
        </div>
    );
}

export default App;

