import { AppAction } from "../utils-manager/app.config.model";

export enum StarterStates {
  START_LOADING           = 'START_LOADING',
  PARTIAL_LOADING         = 'PARTIAL_LOADING',
  ERR_LOADING             = 'ERR_LOADING',
  ERR_PRELOAD_LOADING     = 'ERR_PRELOAD_LOADING',
  END_LOADING             = 'END_LOADING',
  INIT_APP                = 'INIT_APP',
}

export interface DataToLoadModel {
  src: string;
  isJson: boolean;
  action?: AppAction;
  fireAction?: boolean;
  eventType?: StarterStates;
  fireEvent?: boolean;
}

export interface StarterObjectModel {
  onBootLoad: DataToLoadModel[];
  filesToPreload?: DataToLoadModel[];
}