import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function BreadCrumbs({ arrayLinks }) {
    const route = useRouter();

    console.log(route)
    return (
        <ul className='bread-crumbs'>
            {
                arrayLinks.map((el, index) => {
                    if(index !== arrayLinks.length - 1) {
                        return <li key={Math.random()} className='bread-crumbs__item'>
                                <Link href={el.href} as={el.as ? el.as : null} >
                                    <a style={{color: el.href === route.pathname ? '#128DA9' : '#FFFFFF' }}>{el.name}</a>
                                </Link>
                                <hr/>
                            </li>
                    }
                    else 
                        return <li key={Math.random()} className='bread-crumbs__item'>
                                <Link href={el.href} as={el.as ? el.as : null}>
                                    <a style={{color: el.href === route.pathname ? '#128DA9' : '#FFFFFF' }}>{el.name}</a>
                                </Link>
                                </li>
                })
            }
        </ul>  
    )
};