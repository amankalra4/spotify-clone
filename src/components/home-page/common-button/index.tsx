import Link from "next/link";
import { browserLink, buttonText } from "./style";

interface ICommonButtonProps {
  text: string;
  backgroundColor: string;
  textColor: string;
}

const CommonButton = ({ text, backgroundColor, textColor }: ICommonButtonProps) => (
  <Link href="#">
    <a className={browserLink}>
      <div className={buttonText(backgroundColor, textColor)}>
        <span>{text}</span>
      </div>
    </a>
  </Link>
);

export default CommonButton;
