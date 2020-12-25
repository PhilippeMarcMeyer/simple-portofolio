import React, { Fragment } from "react";

// components
import Layout from "../components/layout";
import Main from "../components/main/main";

export default function index () {
    return (
        <Fragment>
            <Layout title="My Portofolio | Home">
                {/* main */}
                <Main/>
                {/* end (main) */}
            </Layout>
        </Fragment>
    );
}