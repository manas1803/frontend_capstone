import React from "react";
import under_construction from "../../images/under_construction.jpg"
import "./UnderWorkPage.css"

const UnderWorkPage = () => {
    return (
        <div class="container">
        <img src={under_construction} alt="Under Construction" />
        <h1>Under Construction</h1>
        <p>We're working on something awesome! Please check back soon.</p>
    </div>
    )
}

export default UnderWorkPage;

