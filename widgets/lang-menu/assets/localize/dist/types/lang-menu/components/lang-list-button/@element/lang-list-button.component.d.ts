import { ComponentInterface, VNode } from '../../../../stencil-public-runtime';
import { UniButtonMode } from '../../../models';
export declare class UniLangListButtonComponent implements ComponentInterface {
  selected: boolean;
  mini: boolean;
  round: boolean;
  mode: UniButtonMode;
  flag: string;
  name: string;
  render(): VNode;
}
