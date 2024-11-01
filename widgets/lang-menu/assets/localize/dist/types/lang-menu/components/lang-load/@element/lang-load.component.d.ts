import { ComponentInterface, VNode } from '../../../../stencil-public-runtime';
import { UniStoreType } from '../../../models';
export declare class UniLangLoadComponent implements ComponentInterface {
  url: string;
  top: boolean;
  shadow: boolean;
  isShadow: boolean;
  frame: boolean;
  type: UniStoreType;
  feature: string;
  separator: string;
  languagesPath: string;
  activePath: string;
  translatePath: string;
  render(): VNode;
}
