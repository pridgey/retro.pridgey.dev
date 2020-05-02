import { createElement } from "@bikeshaving/crank";
import { getColor, getFont, ColorOption } from "./../../theme";
import htm from "htm";
import { v4 } from "uuid";
const h = htm.bind(createElement);

type ButtonProps = {
  ButtonType?: "button" | "submit" | "reset";
  Color?: ColorOption;
  Disabled?: boolean;
  Label: string;
  OnClick: () => void;
  OnDisabledClick?: () => void;
};

export const Button = ({
  ButtonType = "button",
  Color = "black",
  Disabled,
  Label,
  OnClick,
  OnDisabledClick,
}: ButtonProps) => {
  const ButtonClassName = `button-${v4().split("-")[0]}`;

  const ButtonStyle = `
  .${ButtonClassName} {
    color: ${getColor(Color, Disabled ? -0.3 : 0)};
    text-transform: uppercase;
    font-size: 14px;
    border: 0px;
    background-color: transparent;
    font-family: ${getFont()};
    letter-spacing: 0.9px;
    cursor: pointer;
    transition: color;
  }

  .${ButtonClassName}:hover {
    color: ${getColor(Color, -0.2)};
    font-weight: 600;
    transition: color;
  }
`;

  return h`
    <style>
      ${ButtonStyle}
    </style>
    <button
      class=${ButtonClassName}
      type=${ButtonType}
      onclick=${() => {
        if (Disabled) {
          OnDisabledClick && OnDisabledClick();
        } else {
          OnClick();
        }
      }}
    >
      ${Label}
    </button>
  `;
};
