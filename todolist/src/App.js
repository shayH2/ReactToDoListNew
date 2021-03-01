import {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
//import "./todolist.css";

function App() {
  const [myTodoList, setMyTodoList] = useState([]);
  const listItems = myTodoList.map(item => <li key={item.id}>{item.value}</li>)
  //const kuku = (new Date()).toString();

  function addFunc() {
    const inp = document.getElementById("todoInput");
  
    myTodoList.push({
      id: myTodoList.length,
      value: inp.value
    })

    setMyTodoList([...myTodoList]);
  }

  function removeFunc() {
    //const itemToRemove =myTodoList.findIndex(id);
    myTodoList.splice(0, 1);
    setMyTodoList([...myTodoList]);
  }

  const myFuncs = {
    addFunction: addFunc,
    removeFunction: removeFunc
  };

       return(
         <section className="todoapp">
           <Header title={"my app"}/>
           <Main myList={listItems}/>
           <Footer myFunctions={myFuncs}/>
         </section>
       )
}

export default App;
