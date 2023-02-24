import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import "../style.scss";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span>
            <img
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
              src={data.user?.photoURL}
              alt=""
            />
          </span>
          <span>{data.user?.displayName}</span>
        </div>

        <div className="chatIcons">
          <i className="fa-sharp fa-solid fa-video"></i>
          <i className="fa-solid fa-user-plus"></i>
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </div>

      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
