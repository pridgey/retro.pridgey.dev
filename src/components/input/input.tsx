import { createElement } from "@bikeshaving/crank";
import { getColor, getFont, numberOrStringToCSS } from "../../theme";
import htm from "htm";
import { v4 } from "uuid";
const h = htm.bind(createElement);

type InputProps = {
  Type?: "text" | "number";
  DefaultValue?: string;
  Disabled?: boolean;
  FontSize?: "small" | "regular" | "large";
  Label: string;
  Margin?: string | number;
  Padding?: string | number;
  Placeholder?: string;
  ShowLabel?: boolean;
  Width?: string | number;
  OnInput?: (newValue: string) => void;
};

export const Input = ({
  Type = "text",
  DefaultValue = "",
  Disabled,
  FontSize = "regular",
  Label,
  Margin,
  Padding,
  Placeholder = "",
  ShowLabel,
  Width,
  OnInput,
}: InputProps) => {
  const InputClassName = `input-${v4().split("-")[0]}`;
  const InputLabelClassName = `inputlabel-${v4().split("-")[0]}`;

  const InputStyle = `
  .${InputClassName} {
    color: ${getColor("black", Disabled ? -0.3 : 0)};
    font-size: ${
      FontSize === "regular" ? "18px" : FontSize === "large" ? "22px" : "14px"
    };
    border: 0px;
    border-bottom: 1px solid ${getColor("black")};
    background-color: transparent;
    font-family: ${getFont()};
    letter-spacing: 0.9px;
  }

  .${InputLabelClassName} {
    font-size: ${
      FontSize === "regular" ? "16px" : FontSize === "large" ? "20px" : "12px"
    };
    font-family: ${getFont()};
    letter-spacing: 0.9px;
    display: flex;
    flex-direction: column;
    margin: ${numberOrStringToCSS(Margin, "6px")};
    padding: ${numberOrStringToCSS(Padding, "6px")};
    width: ${numberOrStringToCSS(Width, "100%")}
  }
`;

  return h`
    <style>
      ${InputStyle}
    </style>
    <label class=${InputLabelClassName}>
        ${ShowLabel && Label}
    <input
        class=${InputClassName}
        type=${Type}
        readonly=${Disabled}
        aria-label=${Label}
        defaultValue=${DefaultValue}
        placeholder=${Placeholder}
        oninput=${(event: any) => {
          OnInput && OnInput(event.target.value);
        }}
    />
    </label>
  `;
};
