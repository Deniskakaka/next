import React, { Fragment, useEffect } from 'react';
import Head from 'next/head';

import Header from 'pages/components/head/Header';
import OpenAccount from 'ui/openAccount/OpenAccount';
import Footer from 'pages/components/footer/Fotter';

export default function Main() {


    return (
        <div className='main'>
            <Head>
                <title>Orbit-GMT</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header/>
            <Footer/>
        </div>
    )
}