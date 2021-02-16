import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Collapsible from 'react-collapsible';

const LinksFooter = (props) => {
    const [showMenu, setShowMenu] = useState(false);
    const cross = useRef();

    const openMenu = () => {
        cross.current.classList.toggle('close');
        setShowMenu(!showMenu)
    }

    return (
       <div className='footer-list-links__item' onClick={() => openMenu()}>
            <Collapsible open={showMenu}>
                <button className='footer-list-links__item__button' ref={cross}></button>
                <h3 className='footer-list-links__item__headling'>{props.headling}</h3>
                {props.arr.map(el =>{
                    return  <Link href={el.link} as={el.as ? el.as : null} key={Math.random()}>
                                <a>{el.text}</a>
                            </Link>
                })}
            </Collapsible>
           
       </div>
    )
};

export default LinksFooter;