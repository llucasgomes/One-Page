import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Container_Grid = styled.section`
  width: 100vw;
  height: auto;
  display: grid;
  padding: 70px 90px;

  grid-gap: 80px;

  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`;

export const Container_Form = styled.section`
  width: 100vw;
  height: 700px;
  background-color: #d7d5ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title_form {
    font-family: var(--Merriweather);
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    color: #2b2b2b;
  }
  form {
    width: 430px;
    margin: 0 auto;
  }
`;
