import { commonHeaderCSS, commonHeaderCSS1 } from "./styles";

const CommonHeader = () => {
  return (
    <div className={commonHeaderCSS1}>
      <a className={commonHeaderCSS}>Premium</a>
      <a className={commonHeaderCSS}>Support</a>
      <a className={commonHeaderCSS}>Download</a>
    </div>
  );
};

export default CommonHeader;
