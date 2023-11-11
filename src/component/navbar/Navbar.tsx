import React from 'react';
import style from './Navbar.module.scss'
import DynamicLink from "./DynamicLink";

const links = [
    {title: 'Brands', link: '/brands', embeddedLinks: [
            {title: 'Nike', link: '/brands/nike'},
            {title: 'Adidas', link: '/brands/adidas'},
            {title: 'The North Face', link: '/brands/tnf'},
        ]},
    {title: 'Clothes', link: '/clothes', embeddedLinks: [
            {title: 'Nike', link: '/brands/nike'},
            {title: 'Adidas', link: '/brands/adidas'},
            {title: 'The North Face', link: '/brands/tnf'},
        ]},
    {title: 'Shoes', link: '/shoes', embeddedLinks: null},
]

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className={`wrapper + ${style.wrapper}`}>
                <div className={style.logo}>
                    <h1>Snickers shop</h1>
                </div>
                <div className={style.nav}>
                    <ul>
                    {
                            links.map(l => <DynamicLink
                            id={l.title}
                            title={l.title}
                            link={l.link}
                            embeddedLinks={l.embeddedLinks}
                        />)
                    }
                    </ul>
                </div>
                <div className={style.order}>
                    <button className={`contrastButton`}>Order directly</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;