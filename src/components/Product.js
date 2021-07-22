import React from "react";
import PropTypes from "prop-types";
import Vote from "./Vote";
const Product = ({product}) => {
    return (
        <>
            <ul className="list-group">
                <li className="list-group-item justify-content-between d-flex align-items-center" style={{margin:'4px'}}>
                    {product.name}
                    <span className="">
                        {product.upvotes}
                        {/* TODO Add upvote and downvote button here*/}
                        <div><Vote type={1} productId ={product._id}/></div>
                        <div><Vote type={-1} productId={product._id} /></div>
                    </span>
                </li>
            </ul>
        </>
    );
};
Product.propTypes = {
    product:PropTypes.shape({
        name:PropTypes.string.isRequired,
        upvotes:PropTypes.number,
        _id: PropTypes.string.isRequired
    })
}
export default Product;
