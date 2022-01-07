import { useState } from "react";
import axios from "axios";

export default function App() {
  return (
    <div>
      <MyMessage />
    </div>
  );
}

function MyMessage() {
  let name = "bhavesh_032";
  const [message, setMessage] = useState("");
  const [list, setList] = useState([]);

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const sendMessage = async () => {
    if (message == "") {
      alert("message can not be empty");
      return;
    }
    const url = "http://localhost:4000/addchat";
    const data = {
      message: message,
    };
    await axios.post(url, data);
    const newList = [data, ...list];
    setList(newList);
    sendMessage("");
  };
  const textFloat = (index, value) => {
    if (index % 2 == 0) {
      return (
        <div className="alert alert-success text-end"> {value.message}</div>
      );
    } else {
      return (
        <div className="alert alert-success text-start"> {value.message}</div>
      );
    }
  };

  return (
    <div>
      <div className="bg-dark text-light D-flex">
        <span>
          <strong>
            <h1>MyChatApp</h1>
          </strong>
        </span>
        <span>
          {" "}
          <h6>by {name}</h6>{" "}
        </span>
      </div>
      <div id="input area " className="row">
        <div className="col-8">
          <input
            type="text"
            value={message}
            onChange={handleMessage}
            placeholder="Lets chat here"
            className="form-control form-control-lg w-100 p-3 m-0 "
          />
        </div>
        <div className="col-4">
          <input
            type="button"
            value="Send"
            className="btn btn-primary btm-lg w-100 p-3 m-0"
            onClick={sendMessage}
          />
        </div>
      </div>
      <div>
        {list.map((value, index) => (
          <div key="index">
            {" "}
            {textFloat(index, value)}
            <textFloat />
          </div>
        ))}
      </div>
    </div>
  );
}
