import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import ErrorBoundary from "./components/ErrorBoundary";
import './index.css';
import Root from "./Root";
ReactDOM.render(
    <Root>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </Root>,
    document.getElementById("root")
);


