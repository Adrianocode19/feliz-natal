import santaLogo from "../../assets/santa.png";
import style from "./merryChristmas.module.css";

const MerryChristmas = () => {
  return (
    <div className={style.container}>
      <img src={santaLogo} alt="" />
      <p>Feliz Natal</p>
    </div>
  );
};

export default MerryChristmas;
