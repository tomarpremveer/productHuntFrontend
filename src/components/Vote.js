import React from 'react'
import axios from '../utils/axios'
// import PropTypes from 'prop-types'

export default function Vote ({type,productId}) { // eslint-disable-line
    let buttonType = type == 1 ? "bi bi-caret-up" : "bi bi-caret-down"
    return (
        <>
            <button onClick={()=> handleVoteButtonClick(type, productId)}><i className={buttonType}></i></button>
        </>
    );
}
const handleVoteButtonClick = (type, productId) => {
    console.log(`the type of button clicked is ${type} and id is ${productId}`);
    axios({
        url:'/upvote',
        method:'post',
        headers:{
            'Accept-Content': 'application/json',
            'Content-type':'application/json'
        },
        data:JSON.stringify({
            productId,
            type
        })
    })
        .then()
        .catch()
}
// Vote.propTypes = {

// }
