import { useState } from "react";
import axios from "axios";

const projectID = "c1bc8733-931b-44ff-b15f-3b301b45c925";

const Modal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": projectID,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
      setError("");
    } catch (err) {
      setError("Sorry, you put incorrect data.");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">SkyUp Chat</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>start skyup chat</span>
            </button>
          </div>
        </form>
        <h1 className="err_title">{error}</h1>
      </div>
    </div>
  );
};

export default Modal;
