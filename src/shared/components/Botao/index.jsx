import { Container } from "./styled";

export const Botao = ({ text, size }) => {
  return (
    <>
      <Container size={size}>{text}</Container>
    </>
  );
};
