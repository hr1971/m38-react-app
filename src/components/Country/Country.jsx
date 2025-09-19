
import React from 'react';

const Country = ({country}) => {
    console.log(country.languages.languages)
    return (
        <div>
        <img src={country.flags.flags.png} alt="" />
        <h3>Name: {country.name.common} </h3>
    <p>Population: {country.population.population}</p>
    <p>Language: {country.languages.languages.eng}</p>
        
        </div>
    );
};

export default Country;