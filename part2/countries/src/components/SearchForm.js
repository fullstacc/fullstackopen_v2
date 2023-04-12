import React, { useState } from "react";

function SearchForm(props) {
    const [searchText, setSearchText] = useState("");

    const handleChange = (event) => {
        const { value } = event.target;
        setSearchText(value);
        props.onSearch(value);
    };

    return (
        <form>
            <label htmlFor="searchInput">find countries</label>
            <input
                type="text"
                id="searchInput"
                value={searchText}
                onChange={handleChange}
            />
        </form>
    );
}

export default SearchForm;
