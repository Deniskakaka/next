import React from  'react';

export default function TypeAccount({name, price, arrayContent, animation, duration}) {
    return (
        <div className={`main-page-types-accounts__item ${name}`} >
            <h3 className='main-page-types-accounts__item__headling'>{name}</h3>
            <span className='main-page-types-accounts__item__price'>{price}</span>
            <div className='main-page-types-accounts__item__content'>
                {
                    arrayContent.map(el => {
                        return  <span className='main-page-types-accounts__item__content__describe' key={Math.random()}>{el}</span>
                    })
                }
            </div>
            <button className='main-page-types-accounts__item__button'>Open account</button>
        </div>
    )
}