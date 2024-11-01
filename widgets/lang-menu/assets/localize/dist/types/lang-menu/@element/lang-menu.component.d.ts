import { ComponentInterface, VNode } from '../../stencil-public-runtime';
import { UniButtonMode, UniStoreType } from '../models';
export declare class UniLangMenuComponent implements ComponentInterface {
  url: string;
  linear: boolean;
  mini: boolean;
  round: boolean;
  routing: boolean;
  route: string;
  mode: UniButtonMode;
  top: boolean;
  shadow: boolean;
  frame: boolean;
  type: UniStoreType;
  feature: string;
  separator: string;
  languagesPath: string;
  activePath: string;
  translatePath: string;
  only: boolean;
  render(): VNode;
}
