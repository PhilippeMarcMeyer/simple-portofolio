import React, { Fragment } from "react";

// components
import Layout from "../components/layout";
import About from "../components/about/about";

export default function index () {
    return (
        <Fragment>
            <Layout title="My Portofolio | About">
                {/* main */}
                <About/>
                {/* end (main) */}
            </Layout>
        </Fragment>
    );
}