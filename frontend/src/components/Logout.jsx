import React from "react";
import { useNavigate } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";
import styled from "styled-components";
import axios from "axios";
import { logoutRoute } from "../utils/APIRoutes";

export default function Logout() {
  const navigate = useNavigate();

  const handleClick = async () => {
    const storedUser = localStorage.getItem(import.meta.env.VITE_LOCALHOST_KEY);

    if (storedUser) {
      const id = JSON.parse(storedUser)._id;
      try {
        const { status } = await axios.get(`${logoutRoute}/${id}`);
        if (status === 200) {
          localStorage.clear();
          navigate("/login");
        }
      } catch (error) {
        console.error("Logout failed", error);
      }
    }
  };

  return (
    <Button onClick={handleClick}>
      <BiPowerOff />
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #9a86f3;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
`;
