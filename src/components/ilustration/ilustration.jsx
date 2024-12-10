import style from "./ilustration.module.css";
import ilustration from "../../assets/globe.png";
import Paragraph from "../paragraph/paragraph";
import Button from "../button/button";

const Ilustration = () => {
  return (
    <section className={style.container}>
      <img src={ilustration} alt="" />
      <div className={style.container_description}>
        <h4 className={style.title}>
          Conectando generosidade ao redor do mundos
        </h4>
        <Paragraph>
          Celebre a magia do Natal de uma maneira especial! Descubra a
          plataforma que permite a doação de presentes significativos para
          aqueles que mais precisam. Faça parte do movimento e compartilhe o
          verdadeiro espírito da generosidade.
        </Paragraph>
        <Button />
      </div>
    </section>
  );
};

export default Ilustration;
