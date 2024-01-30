import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Todos from "./Components/Todos";
import TodoItem from "./Components/TodoItem";


function App() {
  let todos = [
    {
      sno: 1,
      title: "Nishita",
      desc: "This is just Name"
    },
    {
      sno: 2,
      title: "Nishita Joshi",
      desc: "This is Full Name"
    },
    {
      sno: 3,
      title: "Nisii",
      desc: "This is Nick Name"
    }
  ]
  return (
    <>
      <Header title="Todos List" searchBar={true}/>
      <Todos Todos={todos}/>
      <TodoItem/>
      <Footer/>
    </>
  );
}

export default App;
