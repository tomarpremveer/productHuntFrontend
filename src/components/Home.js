import React, {Suspense} from "react";
import Spinner from './Spinner';
const ProductList = React.lazy(()=> import ('./ProductList'));

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8 justify-content-between col-sm-6">
                    <div>
                        <h3 className="display-4">Products</h3>
                        <Suspense fallback={<Spinner/>}>
                            <ProductList />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;
