import { ComponentInterface, VNode } from '../../../../stencil-public-runtime';
import { UniButtonMode, UniStoreType } from '../../../models';
export declare class UniLangMenuButtonComponent implements ComponentInterface {
  mini: boolean;
  round: boolean;
  mode: UniButtonMode;
  top: boolean;
  type: UniStoreType;
  feature: string;
  separator: string;
  activePath: string;
  render(): VNode;
}
