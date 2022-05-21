import Link from "next/link";
import { browserLink, playerText } from "./style";

const CommonButton = ({ buttonText }: { buttonText: string }) => (
  <Link href="#">
    <a className={browserLink}>
      <div className={playerText}>
        <span>{buttonText}</span>
      </div>
    </a>
  </Link>
);

export default CommonButton;
