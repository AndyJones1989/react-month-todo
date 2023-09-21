
import './App.css';
import Banner from './components/banner';
import Form from './components/form';

function App() {

  const addToDo = (newToDo) => {
    console.log('add to do', newToDo);

  }
  return (
    <div className="App">
    <Banner/>
    <Form addToDo={addToDo}/>
    </div>
  );
}

export default App;
