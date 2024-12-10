import Button from "../button/button";
import MerryChristmas from "../merryChristmas/merryChristmas";
import TextMsg from "../paragraph/paragraph";
import style from "./header.module.css";
import storeImg from "../../assets/store.png";

const Header = () => {
  return (
    <section className={style.container}>
      <div className={style.container_describ}>
        <MerryChristmas />
        <h1>
          Uma <strong>plataforma de doação</strong> para espalhar alegria
        </h1>
        <TextMsg>
          Nessas festas de fim de ano mande um presente para a pessoa amada e
          compartilhe a alegria do Natal.
        </TextMsg>
        <Button />
      </div>
      <img src={storeImg} alt="" className={style.image} />
    </section>
  );
};

export default Header;
