import { styled } from "styled-components";

export const FreeButtonContainer = styled.div`
  height: 75px;
  width: 450px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  height: 60px;
  width: 450px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;
