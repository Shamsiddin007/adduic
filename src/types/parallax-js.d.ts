// src/@types/parallax-js.d.ts
declare module "parallax-js" {
    export default class Parallax {
      constructor(element: HTMLElement, options?: Parallax.ParallaxOptions);
      destroy(): void;
    }
  
    namespace Parallax {
      export interface ParallaxOptions {
        relativeInput?: boolean;
        clipRelativeInput?: boolean;
        hoverOnly?: boolean;
        inputElement?: HTMLElement;
        calibrateX?: boolean;
        calibrateY?: boolean;
        invertX?: boolean;
        invertY?: boolean;
        limitX?: number;
        limitY?: number;
        scalarX?: number;
        scalarY?: number;
        frictionX?: number;
        frictionY?: number;
        originX?: number;
        originY?: number;
      }
    }
  }
  