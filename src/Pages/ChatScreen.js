import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@mui/material";
const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Mark",
      image:
        "https://assets.entrepreneur.com/content/3x2/2000/1603305679-GettyImages-1192972032.jpg",
      message: "Whats up",
    },
    {
      name: "Ellen",
      image:
        "https://assets.entrepreneur.com/content/3x2/2000/1603305679-GettyImages-1192972032.jpg",
      message: "Whats up",
    },
    {
      message: "Hows it going!",
    },
  ]);
  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">You matched with Mark on 10/08/20</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message..."
          type="Text"
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
