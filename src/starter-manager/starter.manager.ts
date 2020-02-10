import { StarterObjectModel, DataToLoadModel, StarterStates } from "./_model";
import { EventEmitter } from "events";
import { AppAction } from "../utils-manager/app.config.model";

export class StarterManager {
  private config: StarterObjectModel;

  private _actions = new EventEmitter();
  public get actions() { return this._actions; }

  private _events = new EventEmitter();
  public get events() { return this._events; }

  public hasPartialErrorLoading: boolean = false;
  public isStarted: boolean = false;

  public data: any[] = [];

  constructor(configObj: StarterObjectModel) {
    this.config = configObj;
  }

  public bootApp() {
    this.attachLoadingListeners();
    return this.load();
  }

  private load() {
    this.fireEvent(StarterStates.START_LOADING, 'start_time');

    const bootPromises = this.loadFiles(this.config.onBootLoad);
    const preloadPromises = this.loadFiles(this.config.filesToPreload);

    return Promise.all(bootPromises).then(data => {
      this.fireEvent(StarterStates.END_LOADING, data);
      Promise.all(preloadPromises)
        .then(() => this.removeLoadingListeners())
        .catch(e => this.fireEvent(StarterStates.ERR_PRELOAD_LOADING, e));
        data && (this.data = data);
      return data;
    })
    .catch(e => {
      this.fireEvent(StarterStates.ERR_LOADING, e);
      throw new Error('[Starter Manager] Fatal error starting app');
    });
  }

  private loadFiles(filesToLoad: DataToLoadModel[] = []) {
    return filesToLoad.map((loadObj: DataToLoadModel) => {
      return fetch(loadObj.src)
        .catch(e => this.fireEvent(StarterStates.PARTIAL_LOADING, e))
        .then((data: any) => loadObj.isJson ? data.json() : data.blob())
        .then(data => {
          loadObj.fireEvent && this.fireEvent(loadObj.eventType as StarterStates, data);
          loadObj.fireAction && this.fireAction(loadObj.action as AppAction, data);
          const action =  loadObj.action || loadObj.src;
          return { action, data };
        });
    });
  }

  private fireEvent(event: StarterStates, data: any) {
    this.events.emit(event, data);
  }

  private fireAction(event: AppAction, data: any) {
    this.actions.emit(event, data);
  }

  private handlePartialError(error: any) {
    console.error("Partial error", error);
  }

  private attachLoadingListeners() {
    this.events.addListener(StarterStates.START_LOADING, () => {});

    this.events.addListener(StarterStates.ERR_LOADING, data => {
      console.log("Error loading", data);
    });

    this.events.addListener(StarterStates.PARTIAL_LOADING, e => {
      this.hasPartialErrorLoading = true;
      this.handlePartialError(e);
    });

    this.events.addListener(StarterStates.END_LOADING, data => {
      this.isStarted = true;
      this.fireEvent(StarterStates.INIT_APP, data);
    });

    this.events.addListener(StarterStates.INIT_APP, data => {
      console.log("Starting app", data);
    });
  }

  private removeLoadingListeners() {
    this.events.removeAllListeners(StarterStates.START_LOADING);
    this.events.removeAllListeners(StarterStates.PARTIAL_LOADING);
    this.events.removeAllListeners(StarterStates.ERR_LOADING);
    this.events.removeAllListeners(StarterStates.END_LOADING);
    this.events.removeAllListeners(StarterStates.INIT_APP);
  }

}