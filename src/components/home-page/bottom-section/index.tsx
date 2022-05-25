import { darkRedColor } from "../../../modules/libs/css-modules";
import CommonButton from "../common-button";
import { BottomContainer, Header, H1title, Footer } from "./styles";

const BottomSection = () => (
    <BottomContainer>
        <Header>
            <H1title>Go Premium. Be happy.</H1title>
            <CommonButton backgroundColor={darkRedColor} textColor="white" text="START FREE TRIAL" link="/your-plans" />
            <Footer>
                {"* Terms and conditions apply. Open only to users who haven't already tried Premium."}
            </Footer>
        </Header>
    </BottomContainer>
);

export default BottomSection;
