import { Container_Card } from "./styled";

export const Card = ({ cor, titulo, sub_titulo }) => {
  return (
    <Container_Card cor={cor}>
      <div className="cor"></div>
      <div className="descricao">
        <h1 className="titulo_card">{titulo}</h1>
        <p className="sub_titulo_card">{sub_titulo}</p>
      </div>
    </Container_Card>
  );
};
