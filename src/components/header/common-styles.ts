import styled from "styled-components";
import { lgScreen } from "@modules/libs/css-modules";

export const DividerContainer = styled.div`
    > hr {
        width: 20px;
        border: 2px solid white;
        margin: 20px 0;
        @media (min-width: ${lgScreen}) {
          height: 30px;
          width: unset;
          border: 1px solid white;
        }
    }
`;

export const SpotifyLogo = styled.svg`
    fill: white;
    display: inline-block;
    height: 27px;
    width: 89px;
    @media (min-width: ${lgScreen}) {
        height: 40px;
        width: 132px;
    }
`;
