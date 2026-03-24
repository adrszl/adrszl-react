import React from 'react';
import './ExperienceCard.css';

function ExperienceCard(props) {
    let linkLabel = props.type === 'learning' ? 'Show certificate' : 'Website';
    return(
        <div className="card">
            <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted"><time>{props.year}</time></h6>
            <p className="card-text">{props.details}</p>
            {props.link ? 
                <a href={props.link} className="card-link" target="_blank" rel="noopener noreferrer">{linkLabel}</a>
                : null }
            </div>
        </div> 
    );
}

export default ExperienceCard;