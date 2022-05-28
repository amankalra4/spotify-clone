import styled from "styled-components";
import { hoverColor } from "@modules/libs/css-modules";

export const ChildHeader = styled.div`
    display: flex;
    column-gap: 20px;
    align-items: center;
`;

export const DropDown = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    color: white;
    cursor: pointer;
    > * {
        &:hover {
            color: ${hoverColor} !important;
        }
    }
`;
