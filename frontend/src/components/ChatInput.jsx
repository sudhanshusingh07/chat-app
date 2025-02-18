import React, { useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import styled from "styled-components";
import Picker from "emoji-picker-react";

export default function ChatInput({ handleSendMsg }) {
  const [msg, setMsg] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiPickerToggle = () => setShowEmojiPicker(!showEmojiPicker);

  const handleEmojiClick = (emojiObject) => {
    setMsg((prevMsg) => prevMsg + emojiObject.emoji);
  };

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.trim()) {
      handleSendMsg(msg);
      setMsg("");
    }
  };

  return (
    <Container>
      <div className="button-container">
        <div className="emoji">
          <BsEmojiSmileFill onClick={handleEmojiPickerToggle} />
          {showEmojiPicker && (
            <Picker onEmojiClick={(_, emoji) => handleEmojiClick(emoji)} />
          )}
        </div>
      </div>
      <form className="input-container" onSubmit={sendChat}>
        <input
          type="text"
          placeholder="Type your message..."
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <button type="submit">
          <IoMdSend />
        </button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #080420;
  padding: 1rem;
  border-top: 1px solid #333;

  .button-container {
    display: flex;
    align-items: center;
    color: white;
    margin-right: 1rem;

    .emoji {
      position: relative;
      cursor: pointer;

      svg {
        font-size: 1.8rem;
        color: #ffde59;
      }

      .emoji-picker-react {
        position: absolute;
        top: -350px;
        background-color: #080420;
        box-shadow: 0 5px 10px #9a86f3;
        border-color: #9a86f3;
      }
    }
  }

  .input-container {
    flex-grow: 1;
    display: flex;
    align-items: center;
    background-color: #1e1e2e;
    border-radius: 5px;
    padding: 0.5rem;
    gap: 0.5rem;

    input {
      flex-grow: 1;
      background: transparent;
      border: none;
      color: white;
      font-size: 1rem;
      padding: 0.5rem;

      &:focus {
        outline: none;
      }
    }

    button {
      background-color: #9a86f3;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        font-size: 1.5rem;
        color: white;
      }
    }
  }
`;
