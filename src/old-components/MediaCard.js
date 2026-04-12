import React from 'react';
import './MediaCard.css';

function MediaCard(props) {
    return (
        <a href={props.href} target="_blank" rel="noopener noreferrer" className="mx-2 mx-sm-0 me-0 me-sm-4 media-card" title={props.title}>
            <img className="img-thumbnail rounded" src={props.logo} alt={props.logoAlt} />
        </a>
    );
}

export default MediaCard;