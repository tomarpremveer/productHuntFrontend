import React from "react";

const PostAd = () => {
    return (
        <div className="col-sm-6 col-md-6">
            <div style={{align: "center"}}>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="name">Product Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            placeholder="Enter Product Name "
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            name="description"
                            id="description"
                            cols="30"
                            rows="10"
                            placeholder="Briefly Describe your Product"
                            className="form-control"
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="image">Product Image</label>
                        <input
                            type="file"
                            name="image"
                            id="image"
                            className="form-control"
                        />
                    </div>
                    <button className="btn btn-primary">Post</button>
                </form>
            </div>
        </div>
    );
};

export default PostAd;
