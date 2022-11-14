import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UpdateTodo from "../UpdateTodo";
import TodoLists from "../TodoLists";

export function DisplayTodo() {
  const [id, setId] = useState("");
  const [update, setUpdate] = useState(false);
  const [infoTodo, setInfoTodo] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(
    function () {
      return axios
        .get("http://localhost:4000/api/todoapp")
        .then((res) => {
          setInfoTodo(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    [update]
  );

  const editHandler = (e) => {
    setId(e.target.name);
    setModal(true);
  };

  const updateHandler = () => {
    setUpdate(!update);
  };

  const deleteHandler = (e) => {
    axios.delete(`http://localhost:4000/api/todoapp/${e.target.name}`);

    setInfoTodo((data) => {
      return data.filter((todo) => todo._id !== e.target.name);
    });
  };

  const closeHandler = () => {
    setId("");
    setModal(false);
  };

  return (
    <section className="container">
      <Link to="/add-list" className="button-new">
        <button className="todo-btn">➕  Add new todo</button><br></br>
      </Link>
      <section className="todo-data">
        <h1></h1>
        <ul className="todo-list-block">
          {infoTodo.map((todoInfo, index) => (
            <TodoLists
              key={index}
              todoInfos={todoInfo}
              editHandler={editHandler}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      </section>
      {modal ? (
        <section className="update-container">
          <div className="update-todo-data">
            <p onClick={closeHandler} className="close">
              &times;
            </p>

            <UpdateTodo
              _id={id}
              closeHandler={closeHandler}
              updateHandler={updateHandler}
            />
          </div>
        </section>
      ) : (
        ""
      )}
    </section>
  );
}

export default DisplayTodo;


// components/DisplayTodo.js

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import TodoLists from "../TodoLists";

// const DisplayTodo = () => {
//   const [infoTodo, setInfoTodo] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:4000/api/todoapp")
//       .then((res) => {
//         console.log(res.data);
//         setInfoTodo(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const deleteHandler = (e) => {
//     axios.delete(`http://localhost:4000/api/todoapp/${e.target.name}`);
//     setInfoTodo((data) => {
//       return data.filter((todo) => todo._id !== e.target.name);
//     });
//   };

//   return (
//     <section className="todo-container">
//       <Link to="/add-todo" className="todo-btn-new">
//         <button className="todo-btn">Add new todo</button>
//       </Link>
//       <section className="todo-data">
//         <h1></h1>
//         <ul className="todo-list-block">
//           {infoTodo.map((data) => (
//             <TodoCard data={data} deleteHandler={deleteHandler} />
//           ))}
//         </ul>
//       </section>
//     </section>
//   );
// };

// export default DisplayTodo;
