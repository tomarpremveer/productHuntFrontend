import axios from "../utils/axios";

/*
Function to check whether the browser is connected (access) to the internet or not.
 */
export function isConnected () {
    return window.navigator.onLine;
}

export function processData (response) {
    if (response.status != 200) {
        throw new Error('Request Failed');
    /* Show a Component showing the cause of the error and what is the effect of the error */
    } else {
        return response.data;
    }
}
/* TODO test it and implement it correctly */
export function fetchRetry (config = {}, retries = 3, backoff = 4000) {
    return axios(config)
        .then(processData)
        .catch( error=> {
            console.log("error here 1")
            if(retries > 1) {
                setTimeout(()=>{
                    return fetchRetry(config, retries - 1, backoff * 2);
                }, backoff)
            }else{
                throw new Error(error);
            }
        })
        .catch(err => err)
}