import {theme} from "./Theme.tsx";

type FontPropsType = {
    family?: string;
    weight?: number;
    color?: string;
    lineHeight?: number;

    Fmin?: number;
    Fmax?: number;
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || "Poppins"};
    color: ${color || theme.colors.font};
    line-height: ${lineHeight || 1.2};
    font-weight: ${weight || 400};
    font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px );
`