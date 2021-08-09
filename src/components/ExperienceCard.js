import React from 'react';
import './ExperienceCard.css';

function ExperienceCard(props) {
    let classes = 'card col-sm-5 col-md-4 col-lg-3 col-xl-2 offset-sm-2';
    switch(props.order) {
        case 1:
            classes += ' offset-md-2 offset-lg-2 offset-xl-2';
            break;
        case 2:
            classes += ' offset-md-0 offset-lg-0 offset-xl-0';
            break;
        case 3:
            classes += ' offset-md-2 offset-lg-0 offset-xl-0';
            break;
        case 4:
            classes += ' offset-md-0 offset-lg-2 offset-xl-0';
            break;
        case 5:
            classes += ' offset-md-2 offset-lg-0 offset-xl-2';
            break;
        case 6:
            classes += ' offset-md-0 offset-lg-0 offset-xl-0';
            break;
        case 7:
            classes += ' offset-md-2 offset-lg-2 offset-xl-0';
            break;
        case 8:
            classes += ' offset-md-0 offset-lg-0 offset-xl-0';
            break;
        case 9:
            classes += ' offset-md-2 offset-lg-0 offset-xl-2';
            break;
        case 10:
            classes += ' offset-md-0 offset-lg-2 offset-xl-0 col-xl-2';
            break;
        case 11:
            classes += ' offset-md-2 offset-lg-0 col-xl-0';
            break;
        case 12:
            classes += ' offset-md-0 offset-lg-0 offset-xl-0';
            break;
        default:
            break;
    }
    let linkLabel = props.type === 'learning' ? 'Show certificate' : 'Website';
    return(
        <div className={classes}>
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