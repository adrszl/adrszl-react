import React from "react";
import "./ContactCard.css";

function ContactCard(props) {
  return (
    <div className="card contact">
      <div className="card-body text-center d-flex flex-column">
        <img
          className={`mx-auto mt-auto ${props.customImgClasses ? props.customImgClasses : ''}`}
          src={props.logo}
          alt={props.logoAlt}
          style={props.customImgStyles}
        />
        <h5 className="card-title mt-auto text-center">{props.title}</h5>
        <h5 className="card-title text-center">{props.subtitle}</h5>
        <a
          className="btn btn-success mt-3"
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.hrefLabel}
        </a>
      </div>
    </div>
  );
}

export default ContactCard;
