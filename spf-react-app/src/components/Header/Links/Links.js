import React from 'react';
import styles from './Links.module.scss'

const links = [
    {
        target: '_blank',
        rel: "noopener noreferrer",
        href: 'https://www.who.int/uv/faq/protect/en/index5.html',
        title: 'About SPF'
    },
    {
        target: '_blank',
        rel: "noopener noreferrer",
        href: 'https://www.bioderma.com.ro/produsele/photoderm',
        title: 'Products'
    }
]

const Links = () => {
    return (
        <section >
            {links.map(link => (
                <a className={styles.navBarLink} target={link.target} rel={link.rel} href={link.href}>{link.title}</a>
            ))};
        </section>
    );
};

export default Links;