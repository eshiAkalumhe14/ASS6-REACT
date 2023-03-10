import ReactQuill from "react-quill/lib";
import React, { useState } from "react";
import "../node_modules/react-quill/dist/quill.snow.css";
import "./index.css";

function Main({activeNote, onUpdateNote}){

    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now(),
        });
    }

    if(!activeNote){
        return <div className="no-active-note">Select a note, or create a new one</div>;
    }

    return <div className = "app-main">
        <div className = "app-main-note-edit">
            <input type = "text" id = "title" placeholder="Note Title" value = {activeNote.title} onChange={(e) => onEditField("title", e.target.value)} autoFocus />

            <div id = "body"><ReactQuill placeholder = "Your Note Here" modules = {Main.modules} formats = {Main.formats} value={activeNote.body} onChange={(e) => onEditField("body", e.target.value)} /></div>
        </div>
        
    </div>

}

Main.modules = {
    toolbar: [
        [{font: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
    ],
};

Main.formats = [
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image'
];

export default Main;