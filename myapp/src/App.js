import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header';
import { TodoContainer } from './components/TodoContainer';
import FetchData from './components/api/FetchData';


function App() {
  return (
    <div className="App">
      <h1>Welcome to my React App!</h1>
      <FetchData/>
    </div>
  );
}

export default App;

//Function Component
//Class Component

// props: data that can be passed from parent to child
// state: state is internal data of a component
