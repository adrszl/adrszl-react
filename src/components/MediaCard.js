import React from 'react';
import './MediaCard.css';

function MediaCard(props) {
    return (
        <a href={props.href} target="_blank" className="mx-2 mx-sm-0 mr-0 mr-sm-4 media-card" title={props.title}>
            <img className="img-thumbnail rounded" src={props.logo} alt={props.logoAlt} />
        </a>
    );
}

export default MediaCard;