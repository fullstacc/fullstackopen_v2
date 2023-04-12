import React from "react";

const Country = ({ name, id }) => {
    return <li key={id}>{name}</li>;
};

export default Country;
