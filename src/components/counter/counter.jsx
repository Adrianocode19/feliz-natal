import Paragraph from "../paragraph/paragraph";
import style from "./counter.module.css";
import ilustration from "../../assets/gifts.png";
const Counter = () => {
  return (
    <section className={style.container}>
      <div className={style.text}>
        <h2 className={style.timer_title}>Tempo limitado</h2>
        <Paragraph>
          Nessas festas de fim de ano mande um presente para a pessoa amada e
          compartilhe a alegria do Natal.
        </Paragraph>
      </div>
      <h3 className={style.timer}>10d - 24h - 01m - 52s</h3>
      <img src={ilustration} alt="" />
    </section>
  );
};

export default Counter;
