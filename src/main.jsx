import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./components/Store";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
/* References 
 watched youtube video by Nova designs on react router - https://www.youtube.com/watch?v=c02YoWR9gSY&t=22s
  watched youtube video by Nova designs on redux toolkit - https://www.youtube.com/watch?v=LWiMVumNxZ8&t=183s
  watched youtube video by Nova designs on git and github - https://www.youtube.com/watch?v=9ToMEN_Hys0&t=233s
 */
