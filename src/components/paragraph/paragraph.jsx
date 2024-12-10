import style from "./paragraph.module.css";

const Paragraph = ({ children }) => {
  return <p className={style.paragraph}>{children}</p>;
};

export default Paragraph;
