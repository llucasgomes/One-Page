import { Container } from "./styled.js";
import img_banner from "../../../assets/images/imagem.png";
import { Botao } from "../Botao/index.jsx";

function BannerHeader() {
  return (
    <Container>
      <div className="sub_container">
        <h1 className="titulo">Lorem ipsum dolor sit amet</h1>
        <p className="sub_titulo">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu
          massa sit amet augue consectetur ullamcorper non ac massa.
        </p>
        <div className="btn">
          <Botao text="Botão" />
        </div>
      </div>
      <div className="sub_container">
        <img src={img_banner} alt="Imagem Banner Principal" />
      </div>
    </Container>
  );
}

export default BannerHeader;
