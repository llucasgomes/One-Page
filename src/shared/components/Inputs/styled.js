import styled from "styled-components";

export const Container_input = styled.input`
  width: 100%;
  height: ${(props) => (props.size != "165px" ? "65px" : props.size)};
  /* height: 65px; */
  border: none;
  background: #ffffff;
  border-radius: 6px;
  margin-bottom: 15px;
  padding-left: 15px;
  font-family: var(--Lato);
  font-weight: 400;
  font-size: 18px;
  outline: none;
`;

export const Container_textArea = styled.textarea`
  width: 100%;
  height: ${(props) => (props.size != "165px" ? "65px" : props.size)};
  /* height: 65px; */
  border: none;
  background: #ffffff;
  border-radius: 6px;
  margin-bottom: 15px;
  padding-left: 15px;
  padding-top: 15px;
  font-family: var(--Lato);
  font-weight: 400;
  font-size: 18px;
  outline: none;
  resize: none;
`;
