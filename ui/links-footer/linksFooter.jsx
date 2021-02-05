import React, { useRef } from 'react';
import Link from 'next/link';

const LinksFooter = (props) => {
    const menu = useRef();
    const cross = useRef();

    const openMenu = () => {
        menu.current.classList.toggle('show');
        cross.current.classList.toggle('close');
    }

    return (
       <div className='footer-list-links__item' ref={menu} onClick={() => openMenu()}>
            <button className='footer-list-links__item__button' ref={cross}>
               
            </button>
            <h3 className='footer-list-links__item__headling'>{props.headling}</h3>
            {props.arr.map(el =>{
                return  <Link href={el.link} key={Math.random()}>
                            <a>{el.text}</a>
                        </Link>
            })}
       </div>
    )
};

export default LinksFooter;