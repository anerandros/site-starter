import "../src/starter-manager/starter.manager.ts";
import { StarterObjectModel } from "../src/starter-manager/_model";
import { AppAction } from "../src/utils-manager/app.config.model";
import { StarterManager } from "../src/starter-manager/starter.manager";

const StarterConfig: StarterObjectModel = {
  onBootLoad: [
    {
      isJson: true,
      src: '',
      action: AppAction.MAIN_CONTENT_LOADED,
      fireAction: true
    },
    {
      isJson: true,
      src: '',
      action: AppAction.SIDE_NAV_LOADED,
      fireAction: true
    }
  ]
}

const Starter = new StarterManager(StarterConfig);

Starter.bootApp().then(() => destroyLoader());

function destroyLoader() {
  const appLoader = document.getElementById("appLoader");
  if (appLoader) {
    appLoader?.style.setProperty('opacity', '0');
    setTimeout(() => { appLoader?.parentNode?.removeChild(appLoader); }, 1200);
  }
}
