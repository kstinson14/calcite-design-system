// @ts-strict-ignore
import { LitElement, JsxNode } from "@arcgis/lumina";

declare global {
  interface DeclareElements {
    "calcite-stepper-wrapper": StepperWrapper;
  }
}

/** @slot - A slot for adding `calcite-stepper-item` elements. */
export class StepperWrapper extends LitElement {
  // #region Rendering

  override render(): JsxNode {
    return (
      <calcite-stepper layout="horizontal" numbered>
        <slot />
      </calcite-stepper>
    );
  }

  // #endregion
}