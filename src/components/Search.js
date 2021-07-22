import React, {useState, useEffect} from "react";

// eslint-disable-next-line no-unused-vars
const Search = (props) => {
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        // TODO Create a debounced autosuggestion function and use here.
        if(searchText != "") {
            console.log("function is called");
        }
        return () => {
            console.log("This cleanup function was called")
        };
    }, [searchText])
    return (
        <div>
            <form className="d-flex">
                <div className="form-group">
                    <input
                        id="searchBox"
                        className="form-control me-2 form-control-sm"
                        type="search"
                        value={searchText}
                        onChange={(e) => handleInputChange(setSearchText, e)}
                        placeholder="Search"
                        aria-label="Search"
                    />
                </div>
            </form>
        </div>
    );
};
const handleInputChange = (setSearchText, event) => {
    setSearchText(event.target.value);
};
export default Search;
