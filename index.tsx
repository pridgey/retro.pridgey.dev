/** @jsx createElement */
import { createElement, Fragment } from "@bikeshaving/crank";
import { renderer } from "@bikeshaving/crank/dom";
import { Button, Input, DraggableItem } from "./src/components";
import { getColor } from "./src/theme";
import htm from "htm";
const h = htm.bind(createElement);

renderer.render(
  <Fragment>
    {h`<style>body { background-color: ${getColor("white")}; }</style>`}
    <Button Label="What up" OnClick={() => alert("Clicked!")} />
    <Button
      Label="Button Two"
      Color="green"
      OnClick={() => alert("Clicked 2!")}
    />
    <Button
      Label="Button The Third"
      Disabled={true}
      OnClick={() => alert("Shouldn't get here")}
      OnDisabledClick={() => alert("Disabled :(")}
      Color="pink"
    />
    <Input
      Label="Small Input"
      ShowLabel={true}
      FontSize="small"
      Width="50%"
      OnInput={(newValue: string) => console.log("Small Input:", newValue)}
    />
    <Input Label="Input" ShowLabel FontSize="regular" Width="200px" />
    <Input Label="Large Input" ShowLabel FontSize="large" />
    <DraggableItem BackgroundColor="brown" ZoneID="Zone1">
      Test
    </DraggableItem>
  </Fragment>,
  document.body
);
