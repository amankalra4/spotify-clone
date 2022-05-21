import { darkBlueColor, hoverColor } from "../../../modules/libs/css-modules";
import CommonButton from "../common-button";
import {
  bottomContent,
  centerSection,
  container,
  content,
  subHeading,
} from "./style";

const TopSection = () => {
  const webPlayerText = "Open Web Player";
  return (
    <section className={container}>
      <article className={centerSection}>
        <div className={content}>
          <h1>Looking for music?</h1>
          <h2 className={subHeading}>
            Start listening to the best new releases.
          </h2>
          <div className={bottomContent}>
            <CommonButton
              backgroundColor={hoverColor}
              textColor={darkBlueColor}
              text={webPlayerText}
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default TopSection;
