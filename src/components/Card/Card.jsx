import React from 'react';
import Loader from '../Loader/Loader';
import './Card.css';

const Card = ({ country }) => {
  return (
    <div className=" contenedor">
      {country ? (
        <div className="Card">
          <div className="Card__flags">
            <img src={country.flags.svg} alt={country.flags.alt}></img>
          </div>
          <div className="card_body">
            <h2>{country.name.common}</h2>
            <div className="Card__info">
              <div className="Card__info__data">
                <h4>
                  <b>Name official: </b>
                  <span>{country.name.official}</span>
                </h4>
                <h4>
                  <b>Capital: </b>
                  <span>{country.capital}</span>
                </h4>
                <h4>
                  <b>Population: </b> <span>{country.population} Habitants</span>
                </h4>
                <h4>
                  <b>Continent: </b>
                  <span>{country.region}</span>
                </h4>
                <h4>
                  <b>Region: </b>
                  <span>{country.subregion}</span>
                </h4>
                <h4>
                  <b>Area: </b>
                  <span>{country.area} km²</span>
                </h4>
                <h4>
                  <b>Fifa: </b>
                  <span>{country.fifa}</span>
                </h4>
              </div>
              <div className="Card__info__img ">
                <img src={country.coatOfArms.svg} alt="coatOfArms"></img>
                <p>Coat Of Arms</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
};

export default Card;
