import { commonHeader, headerContainer } from "./styles";

const CommonHeader = () => {
  return (
    <div className={headerContainer}>
      <a className={commonHeader}>Premium</a>
      <a className={commonHeader}>Support</a>
      <a className={commonHeader}>Download</a>
    </div>
  );
};

export default CommonHeader;
