function Main({myList}){
    return(
        <section className="main">
            <input class="toggle-all" type="checkbox"/>
            <ul id="list" class="todo-list">
                {myList}
            </ul>
            
        </section>
    )
}

export default Main;