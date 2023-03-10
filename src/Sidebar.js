function Sidebar({notes, onAddNote, onDeleteNote, activeNote, setActiveNote}){

    
    return(
        <div className="app-sidebar">
            <div className = "app-sidebar-header">
                <h1>Notes</h1>
                <button onClick = {onAddNote}>&#43;</button>
                
                
            </div>
            <div className = "app-sidebar-notes">
                {notes.map((note) => (
                    <div className={`app-sidebar-note ${note.id === activeNote && "active"}`}
                    onClick={() => setActiveNote(note.id)}>
                    <div className = "sidebar-note-title">
                        <strong>{note.title}</strong>
                        <button onClick = {() => onDeleteNote(note.id)}>Delete</button>
                    </div>

                    <small className = "note-meta">
                        Last modified {new Date (note.lastModified).toLocaleDateString("en-GB", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric"
                        })}
                    </small>

                    <p>{note.body && note.body.substr(0, 100) + "..."}</p>
                </div>
                ))}
                
            </div>
        </div>
    );
}

export default Sidebar;