import React, {useEffect, useState, Suspense} from "react";
import Spinner from "./Spinner";
import {fetchRetry} from "../utils"
const Product = React.lazy(() => import('./Product'));
const ProductList = () => {
    var [haveTried, setHaveTried ] = useState(false)
    const [products, setProducts] = useState([]);
    const [fetchStatus, setFetchStatus] = useState(false);
    useEffect(() => {
        fetchRetry()
            // .then((response) => processData(response))
            .then((data) => {
                setFetchStatus(true);
                setHaveTried(true);
                setProducts(data.products)
            })
            .catch((err) =>{
                setHaveTried(true);
                console.error("error is", err.code)
            });
    }, []);
    if(!haveTried) {
        return <Spinner/>
    }
    if(haveTried && !fetchStatus) {
        return <div><p className="text-danger"> Error in fetching data</p></div>
    }
    if (haveTried && products.length < 1) {
        return <div><p>No Products found</p></div>
    }
    return (
        <div>
            {/* TODO We can add here the sort by button */}
            <Suspense fallback={<Spinner/>}>
                {products &&
            products.map(product => 
                <Product key={product._id} product={product} /> )
                }
            </Suspense>
            {/* TODO Add an paginator here and pagination into this component */}
        </div>
    );
};
export default ProductList;
