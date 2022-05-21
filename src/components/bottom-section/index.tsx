import { darkRedColor } from "../../modules/libs/css-modules";
import CommonButton from "../home-page/common-button";
import { bottomContainer, header, title, footer } from "./styles";

const BottomSection = () => (
    <section className={bottomContainer}>
        <header className={header}>
            <h1 className={title}>Go Premium. Be happy.</h1>
            <CommonButton backgroundColor={darkRedColor} textColor="white" text="START FREE TRIAL" />
            <footer className={footer}>
                {"* Terms and conditions apply. Open only to users who haven't already tried Premium."}
            </footer>
        </header>
    </section>
);

export default BottomSection;
