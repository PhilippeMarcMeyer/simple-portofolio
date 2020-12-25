import React, { Fragment } from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import Head from "next/head";

export default function Layout ({title, children}) {
    return (
        <Fragment>
            <Head>
                <title>{title}</title>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"/>
            </Head>
            <main>

                {/* navbar */}
                <Navbar/>
                {/* end (navbar) */}

                {/* main content */}
                {children}
                {/* end (content) */}

                {/* footer */}
                <Footer/>
                {/* end (footer) */}
            </main>
        </Fragment>
    );
}