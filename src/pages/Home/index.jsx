import { Card } from "../../shared/components/Card";
import BannerHeader from "../../shared/components/HeaderBanner";
import { Container, Container_Form, Container_Grid } from "./styled";
import { Products } from "../../assets/data/dados.js";
import { Inputs, TextArea } from "../../shared/components/Inputs";
import { Botao } from "../../shared/components/Botao";

export const Home = () => {
  return (
    <Container>
      <BannerHeader />
      <Container_Grid>
        {Products.map((item) => (
          <Card
            key={item.id}
            cor={item.cor}
            titulo={item.titulo}
            sub_titulo={item.sub_titulo}
          />
        ))}
      </Container_Grid>
      <Container_Form>
        <h1 className="title_form">Entre em contato</h1>
        <form>
          <Inputs type="text" placeholder="Nome" />
          <Inputs type="email" placeholder="E-mail" />
          <Inputs type="tel" placeholder="Telefone" />
          {/* <Inputs type="text" placeholder="Mensagem" size="165px" /> */}
          <TextArea placeholder="Mensagem" size="165px" />
          <Botao text="Enviar mensagem" size={100} />
        </form>
      </Container_Form>
    </Container>
  );
};
