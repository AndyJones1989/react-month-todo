const ToDo = ({ toDo }) => {
  console.log(toDo);
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        padding: "8px",
        backgroundColor: "yellow",
        textAlign: "start",
      }}
    >
      {toDo}
    </div>
  );
};

export default ToDo;
