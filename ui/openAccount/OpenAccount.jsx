import React from 'react';

export default function OpenAccount() {
    return (
        <div className='openAccount'>
            <div className='openAccount-description'>
                <h2 className='openAccount-description__headling'>Open an account with ease</h2>
                <p className='openAccount-description__text'>Create your account and start trading with the help of Orbit GTM.</p>
                <button className='openAccount-description__button'>Open an account</button>
            </div>
            <div className='openAccount-images'>
                <div className='openAccount-images__circles' data-aos="fade-left" data-aos-duration="1500" data-aos-once={true}></div>
                <div className='openAccount-images__google-pixel' data-aos="fade-left" data-aos-duration="500" data-aos-once={true}></div>
                <div className='openAccount-images__iphone' data-aos="fade-left" data-aos-duration="700" data-aos-once={true}></div>
            </div>
        </div>
    )
}