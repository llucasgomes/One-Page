import styled from "styled-components";

export const Container_Card = styled.div`
  width: 240px;
  height: 353px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;

  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

  .cor {
    width: 100%;
    height: 50%;
    background-color: ${(props) => props.cor};
  }
  .descricao {
    width: 100%;
    height: 50%;
    padding: 28px;
    .titulo_card {
      font-family: var(--Merriweather);
      font-weight: 700;
      margin-bottom: 20px;
    }
    .sub_titulo_card {
      font-family: var(--Lato);
      font-weight: 400;
    }
  }
`;
