import React from 'react';
import '../styles/PropertyCard.css';
import { ReactComponent as Bath } from '../assets/bathtub.svg';
import { ReactComponent as Bed } from '../assets/bed.svg';
import { ReactComponent as Gbp } from '../assets/gbp.svg';
import { ReactComponent as Email } from '../assets/email.svg';

const PropertyCard = ({ props }) => (
  <div className="prop-card">
    <h4 className="prop-card__title">{props.title}</h4>
    <p>image placeholder</p>
    <p className="prop-card--italics">{`${props.type} - ${props.city}`}</p>
    <div className="prop-card__container--flex prop-card__bedroom">
      <Bed />
      <p className="prop-card__container-text">{props.bedrooms}</p>
    </div>
    <div className="prop-card__container--flex prop-card__bathroom">
      <Bath width="24px" height="24px" />
      <p className="prop-card__container-text">{props.bathrooms}</p>
    </div>
    <div className="prop-card__container--flex prop-card__price">
      <Gbp width="24px" height="24px" />
      <p className="prop-card__container-text">{props.price}</p>
    </div>

    <div className="prop-card__container--flex prop-card__email">
      <a className="prop-card__container-link" href={`mailto: ${props.email}`}>
        <Email color="white" />
        <p className="prop-card__container-text prop-card__email-text">Email</p>
      </a>
    </div>
  </div>
);

export default PropertyCard;
