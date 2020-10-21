import React from "react";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import { Provider } from "mobx-react";


/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import Metronome from "./components/metronome";

/* Theme variables */
// import "./theme/variables.css";

// const store = new Store();

const App = () => {
  return (
    <Provider >
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            {/* <Route path="/" render={() => <TabContainer />} exact={true} />
            <Route path="/cart" component={CartPage} exact={true} />
            <Route path="/tabs" component={TabContainer} /> */}
            <Metronome />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </Provider>
  );
};
export default App;
