function Header({onToggle}){
    return(
        <>
    <div className="app-topbar">
        <div className = "app-topbar-header">
            <h1>Lotion</h1>
            <div className = "subtext"><strong>Like Notion, But worse</strong></div>
            <div className="app-topbar-button">
                <button onClick = {onToggle}>&#8801;</button>
            </div>
        </div>
    </div>
    </>
    );
    
}

export default Header;