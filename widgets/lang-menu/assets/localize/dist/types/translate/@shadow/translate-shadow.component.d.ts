import { ComponentInterface, VNode } from '../../stencil-public-runtime';
import { UniStoreType } from '../../lang-menu';
export declare class UniTranslateShadowComponent implements ComponentInterface {
  inactive: boolean;
  activate: boolean;
  rendered: boolean;
  top: boolean;
  type: UniStoreType;
  feature: string;
  separator: string;
  path: string;
  bindstart: string;
  bindend: string;
  render(): VNode;
  componentDidRender(): void;
}
