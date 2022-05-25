/* eslint-disable @next/next/no-img-element */
import { darkBlueColor, hoverColor } from "../../../modules/libs/css-modules";
import CommonButton from "../common-button";
import { BottomContent, CenterSection, Content, SectionContainer, SubHeading, ImageContainer } from "./style";
import Image from "next/image";
import { backgroundImageLargeScreen } from "../../../constants";

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
                            link="/your-plans"
                        />
                    </BottomContent>
                </Content>
                <ImageContainer>
                    <img
                        src={backgroundImageLargeScreen}
                        alt="spotify-clone-home-page-background"
                        width="100%"
                        height="100%"
                        loading="eager"
                    />
                </ImageContainer>
            </CenterSection>
        </SectionContainer>
    );
};

export default TopSection;
