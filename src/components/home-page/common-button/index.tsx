import Link from "next/link";
import { BrowserLink, ButtonText } from "./style";

export interface ICommonButtonProps {
  text: string;
  backgroundColor: string;
  textColor: string;
  link: string;
}

const CommonButton = ({ text, backgroundColor, textColor, link }: ICommonButtonProps) => (
  <Link href={link}>
    <BrowserLink>
      <ButtonText backgroundColor={backgroundColor} textColor={textColor}>
        <span>{text}</span>
      </ButtonText>
    </BrowserLink>
  </Link>
);

export default CommonButton;
