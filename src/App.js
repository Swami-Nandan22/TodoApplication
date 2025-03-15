import './App.css';
// import {Component} from 'react';
// import {Counter} from './counter/Counter.jsx';
import TodoApp from './Components/TodoApp';
function App() {
  return (
    <div className="App">
    {/*
      MY Todo Application Updated
      <FirstComponent ></FirstComponent>
      <SecondComponent ></SecondComponent>
      <Counter by={5}></Counter>
      */}
      <TodoApp />
    </div>
  );
}

// function FirstComponent() {
//   return <div className="FirstComponent">First Component</div>
// }
// function SecondComponent() {
//   return <div className="SecondComponent">Second Component</div>
// }

// class ThirdComponent extends Component {
//   render() {
//     return <div className="ThirdComponent">Third Component</div>
//   }
  
// }

export default App;
