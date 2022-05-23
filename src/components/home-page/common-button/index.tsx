import Link from "next/link";
import { BrowserLink, ButtonText } from "./style";

export interface ICommonButtonProps {
  text: string;
  backgroundColor: string;
  textColor: string;
}

const CommonButton = ({ text, backgroundColor, textColor }: ICommonButtonProps) => (
  <Link href="#">
    <BrowserLink>
      <ButtonText backgroundColor={backgroundColor} textColor={textColor}>
        <span>{text}</span>
      </ButtonText>
    </BrowserLink>
  </Link>
);

export default CommonButton;
