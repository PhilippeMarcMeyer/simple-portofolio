import React, { Fragment } from "react";

// components
import Layout from "../components/layout";
import Projects from "../components/projects/projects";

export default function index () {
    return (
        <Fragment>
            <Layout title="My Portofolio | Projects">
                {/* main */}
                <div className="mb-5">
                    <Projects/>
                </div>
                {/* end (main) */}
            </Layout>
        </Fragment>
    );
}