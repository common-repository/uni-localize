import { ComponentInterface } from '../../../../stencil-public-runtime';
export declare class UniFlagPtComponent implements ComponentInterface {
  el: HTMLElement;
  square: boolean;
  round: boolean;
  onSquare(newValue: boolean): void;
  onRound(newValue: boolean): void;
  componentWillLoad(): Promise<void> | void;
}
