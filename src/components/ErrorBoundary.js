import React, {Component} from "react";

class ErrorBoundary extends Component {
    constructor (props) {
        super(props);
        this.state = {hasError:false}
    }
    static getDerivedStateFromError (error) { // eslint-disable-line no-unused-vars
        return {hasError:true}
    }
    componentDidCatch (error, errorInfo) {
        /* Here we can log these errors to our logging service */
        console.log("There are errors", error, errorInfo)
    }
    render () {
        if (this.state.hasError) {
            return <div>This has errors</div>
        }
        return this.props.children; //eslint-disable-line 
        
    }
}

export default ErrorBoundary;