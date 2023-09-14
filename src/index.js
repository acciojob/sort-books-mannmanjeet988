import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {Provider} from "react-redux"
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//import rootReducer from "./components/reducers"
import booksReducer from "./redux/booksReducer";
const store = createStore(booksReducer, applyMiddleware(thunk));
 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
 



//ReactDOM.render(<App />, document.getElementById("root"));

//const root = ReactDOM.createRoot(document.getElementById('root'));
// ReactDOM.render(
//     <Provider store ={store}>
//       <App />
//     </Provider>)
//   );

// ReactDOM.render(
//   <Provider >
//     <App />
//   </Provider>,document.getElementById("root")
// );
