function Header({title}){
    return(
        <header className="header">
            <h1 id="title">{title}</h1>
            <input className="new-todo"
            id="todoInput"
            placeholder="What needs to be done"
            autoFocus/>
        </header>
    )
}

export default Header;