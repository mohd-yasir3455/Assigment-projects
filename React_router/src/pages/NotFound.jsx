import React from "react";
import { Link } from "react-router-dom";

function NotFound() {

    return (

        <div className="page error-page">

            <h1>404</h1>

            <p>
                Page Not Found
            </p>

            <Link to="/">
                Go Back Home
            </Link>

        </div>

    );

}

export default NotFound;