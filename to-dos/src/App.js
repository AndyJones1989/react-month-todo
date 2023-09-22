import "./App.css";
import Banner from "./components/banner";
import Form from "./components/form";
import ToDo from "./components/to-do";
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);

  const addToDo = (newToDo) => {
    console.log("to Do added", newToDo);
    setToDos([...toDos, newToDo]);
  };

  console.log(toDos);

  return (
    <div className="App">
      <Banner />
      <Form addToDo={addToDo} />
      {toDos.length > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px auto",
            gap: "12px",
            flexWrap: "wrap",
            width: "75%",
            padding: "20px",
            background: "black",
            borderRadius: "8px",
          }}
        >
          {toDos.map((toDo, index) => {
            return <ToDo key={index} toDo={index + 1 + ". " + toDo} />;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
