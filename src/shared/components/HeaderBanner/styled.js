import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 460px;
  display: flex;
  background-color: #d7d5ff;
  .sub_container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
    height: 100%;
    padding: 0 50px;

    .titulo {
      font-family: var(--Merriweather);
      font-weight: 400;
      font-size: 36px;
      color: #2b2b2b;
      margin-bottom: 17px;
      width: 350px;
    }
    .sub_titulo {
      width: 360px;
      font-family: var(--Lato);
      font-weight: 400;
      font-size: 21px;
      color: #555555;
      line-height: 30px;
      margin-bottom: 17px;
    }
    .btn {
      width: 360px;
      display: flex;
      justify-content: start;
    }
    img {
      min-width: 75%;
    }
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 800px;

    .sub_container {
      img {
        width: 350px;
      }
    }
  }
`;
