import { darkBlueColor, hoverColor } from "../../../modules/libs/css-modules";
import CommonButton from "../common-button";
import {
  BottomContent,
  CenterSection,
  Content,
  SectionContainer,
  SubHeading,
} from "./style";

const TopSection = () => {
  const webPlayerText = "Open Web Player";
  return (
    <SectionContainer>
      <CenterSection>
        <Content>
          <h1>Looking for music?</h1>
          <SubHeading>Start listening to the best new releases.</SubHeading>
          <BottomContent>
            <CommonButton
              backgroundColor={hoverColor}
              textColor={darkBlueColor}
              text={webPlayerText}
            />
          </BottomContent>
        </Content>
      </CenterSection>
    </SectionContainer>
  );
};

export default TopSection;
