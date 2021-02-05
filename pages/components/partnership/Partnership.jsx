import React from 'react';
import Head from 'next/head';

import Header from 'pages/components/head/Header';
import OpenAccount from 'ui/openAccount/OpenAccount';
import Footer from 'pages/components/footer/Fotter';

export default function Partnership() {
    return(
        <>
             <Head>
                <title>Orbit-GMT</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
            </Head>
            <div className='main'>
            <Header/>
                <section className='partnership'>
                    <div className='partnership-top'>
                        <h1 className='partnership-top__headling'>Marketing Affiliate Program</h1>
                        <p className='partnership-top__text'>Are you tired to work for 12 hours per day? It`s time to move on! Join our exclusive affiliate program</p>
                        <button className='partnership-top__button'>Become our partner</button>
                    </div>
                    <div className='partnership-description'>
                        <h3 className='partnership-description__headling'>
                            Partner with a market leader and convert your traffic to revenue with our marketing affiliate program
                        </h3>
                        <p className='partnership-description__text'>
                            Are you a website publisher, mobile marketer, media buyer, digital marketer, webmaster, affiliate network member or social media influencer?
                            Then earn generous commissions of up to $600 per conversion by directing your audience to Admiral Markets UK Ltd or site name Pty Ltd.
                            Become an affiliate today!
                        </p>
                        <ul className='partnership-description__list'>
                            <li className='partnership-description__list__item'>Total amount of paid commissions: $250.000.000;</li>
                            <li className='partnership-description__list__item'>Certification of 6 state bodies and more than 12 years of work in the market;</li>
                            <li className='partnership-description__list__item'>Individual plans and flexible commission structures: CPA, percentage of income, hybrid;</li>
                            <li className='partnership-description__list__item'>Innovative affiliate marketing strategies to drive quality traffic and increase conversion rates;</li>
                            <li className='partnership-description__list__item'>Quick transfer of funds;</li>
                            <li className='partnership-description__list__item'>Advanced technologies and full transparency;</li>
                            <li className='partnership-description__list__item'>Multilingual platform and professional support;</li>
                            <li className='partnership-description__list__item'>Personal manager;</li>
                        </ul>
                    </div>
                    <div className='partnership-steps'>
                        <div className='partnership-steps__planet'></div>
                        <div className='partnership-steps-wrapper'>
                            <p className='partnership-steps__item'><span>Step 1 </span> - Join the program by registering</p>
                            <p className='partnership-steps__item'><span>Step 2</span> - Choose your promotional program</p>
                            <p className='partnership-steps__item'><span>Step 3 </span> - Publish on your website</p>
                            <p className='partnership-steps__item'><span>Step 4</span> - Get rewarded when visitors click and convert</p>
                        </div>
                    
                    </div>
                    <OpenAccount/>
                </section>
                <Footer/>
            </div>
        </>
    )
}