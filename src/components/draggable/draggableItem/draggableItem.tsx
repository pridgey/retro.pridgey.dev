import { createElement, Children } from "@bikeshaving/crank";
import { getColor, getFont, ColorOption } from "./../../../theme";
import htm from "htm";
import { v4 } from "uuid";
const h = htm.bind(createElement);

type DraggableItemProps = {
  BackgroundColor: ColorOption;
  ZoneID: string;
  children: Children;
};

export const DraggableItem = ({
  BackgroundColor,
  ZoneID,
  children,
}: DraggableItemProps) => {
  const DraggableItemClassName = `button-${v4().split("-")[0]}`;

  const DraggableItemStyle = `
  .${DraggableItemClassName} {
    padding: 6px;
    background-color: ${getColor(BackgroundColor)};
    border: 1px solid ${getColor("black")};
    font-family: ${getFont()};
    cursor: grab;
  }
`;

  return h`
    <style>
      ${DraggableItemStyle}
    </style>
    <div
        id=${ZoneID}
      class=${DraggableItemClassName}
      draggable="true"
      ondragstart=${(event: any) => {
        event.dataTransfer.setData("text/plain", event.target.id);
        event.currentTarget.style.backgroundColor = getColor(
          BackgroundColor,
          0.2
        );
      }}
      ondragend=${(event: any) => {
        event.currentTarget.style.backgroundColor = getColor(BackgroundColor);
      }}
      ondrop=${(event: any) => {
        const id = event.dataTransfer.getData("text");

        const draggableElement = document.getElementById(id);
        const dropzone = event.target;

        dropzone.appendChild(draggableElement);

        event.dataTransfer.clearData();
      }}
    >
      ${children}
    </div>
  `;
};
