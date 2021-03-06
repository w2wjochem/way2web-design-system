/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface WayButton {
        /**
          * Set to `"outline"` for a transparent button with a border, or to `"solid"`. The default style is `"solid"`.
         */
        "fill"?: 'outline' | 'solid';
        /**
          * Contains a URL or a URL fragment that the hyperlink points to.
         */
        "href": string | undefined;
        /**
          * Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
         */
        "rel": string | undefined;
        /**
          * Specifies where to display the linked URL. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
         */
        "target": string | undefined;
    }
}
declare global {
    interface HTMLWayButtonElement extends Components.WayButton, HTMLStencilElement {
    }
    var HTMLWayButtonElement: {
        prototype: HTMLWayButtonElement;
        new (): HTMLWayButtonElement;
    };
    interface HTMLElementTagNameMap {
        "way-button": HTMLWayButtonElement;
    }
}
declare namespace LocalJSX {
    interface WayButton {
        /**
          * Set to `"outline"` for a transparent button with a border, or to `"solid"`. The default style is `"solid"`.
         */
        "fill"?: 'outline' | 'solid';
        /**
          * Contains a URL or a URL fragment that the hyperlink points to.
         */
        "href"?: string | undefined;
        /**
          * Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
         */
        "rel"?: string | undefined;
        /**
          * Specifies where to display the linked URL. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
         */
        "target"?: string | undefined;
    }
    interface IntrinsicElements {
        "way-button": WayButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "way-button": LocalJSX.WayButton & JSXBase.HTMLAttributes<HTMLWayButtonElement>;
        }
    }
}
