import React from "react"
import {composeWithDevTools} from "redux-devtools-extension";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import ProductReducers from "./reducers/ProductReducers";
const store = createStore(
    combineReducers({Products: ProductReducers}),
    composeWithDevTools()
);

const Root = (props) => {
    // eslint-disable-next-line react/prop-types
    return <Provider store={store}>{props.children}</Provider>;
};

export default Root;
