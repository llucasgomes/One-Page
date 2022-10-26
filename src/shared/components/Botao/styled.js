import styled from "styled-components";

export const Container = styled.button`
  
  width: ${(props) => (props.size ? "100%" : "155px")};
  height: 50px;
  background: #6c63ff;
  border: none;
  box-shadow: 0px 5px 5px rgba(23, 23, 23, 0.3);
  border-radius: 5px;
  font-size: 20px;
  font-family: var(--Lato);
  color: #ffffff;
`;
