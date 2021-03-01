function Footer({myFunctions}){
    //function aaa(){
      //  myFunctions.removeFunction();
    //}

    return(
       <footer className="footer">
           <span className="todo-count"></span>
           <button className="clear-completed" onClick={myFunctions.addFunction}>
            Add
           </button>
           <button className="clear-completed" onClick={myFunctions.removeFunction}>
            Remove
           </button>
       </footer>
    )
}

export default Footer;