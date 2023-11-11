import React, {FunctionComponent} from 'react';
import style from './Navbar.module.scss';
import {Link} from "react-router-dom";

interface Props {
    id: string,
    title: string,
    link: string,
    embeddedLinks: any[] | null
}

const DynamicLink: FunctionComponent<Props> = ({
                                                   title,
                                                   link,
                                                   embeddedLinks
                                               }) => {

    return (
        <li className={style.navItem}>
            <Link className={style.mainLink} to={link}>
                <h3>
                    {title}
                </h3>
            </Link>
            {
                embeddedLinks
                    ? <ul className={style.dropNav}>
                        {embeddedLinks.map(l => (
                            <li className={style.navItem}>
                                <Link to={l.link}>{l.title}</Link>
                            </li>
                        ))}
                    </ul>
                    : null
            }
        </li>
    );
};

export default DynamicLink;
