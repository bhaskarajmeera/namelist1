import { useState } from "react";
import "./App.css";
import { Display } from "./components/Display";
import { Form } from "./components/Form";
import { UserList } from "./components/UserList";

function App() {
  // const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const addUser = (name) => {
    setList([...list, name]);
  };
  return (
    <div
      className="wrapper"
      style={{
        background:"skyblue",
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
      }}
    >
      <div
        className="userList"
        style={{
          background:"orange",
          borderRadius:"10px",
          boxShadow: "0 0 10px yellow",
          padding: "2rem",
        }}
      >
        <Form addUser={addUser} />

        <hr />
        <UserList list={list} />
      </div>
    </div>
  );
}
export default App;