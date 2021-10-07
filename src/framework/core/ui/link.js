import React from 'react';
import { default as _Link } from 'next/link';
import constants from './_';

const Link =  ( props ) => {
    var { children, className, to, href, style, external } = props;

    to = (to) ? to : href;
    to = (to) ? to : "http://localhost";
    children = (to) ? children : "NO LINK DEFINED";
    style = (style) ? style : {};
    external = (external === true);

    if(to && typeof to !== "string") return "INVALID URL";

    const internal = (external || (to && to.indexOf('http') === 0)) ? false : true;
    const jump = (to.indexOf("#") === 0) ? true : false;
    const raised = true;
    const color = 'inherit';
    const target = (!internal) ? "_blank" : '_self'
    return (
        (jump == false && internal == true && constants.links_disabled == false) ? 
            <_Link className={className} href={to} style={style}>{children}</_Link>
        :
            <a className={className} href={to} style={style} target={target}>{children}</a>
    );
}

export default Link;