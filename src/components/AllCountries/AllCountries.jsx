import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import apiURL from '../utils/api';

const AllCountries = () => {
  const [countries, setCountries] = useState([]);
  const [ isLoading, setIsLoading ] =useState(true);
  const [error, setError] = useState('')

  const getAllCountries = async()=> {
    try {
      const res = await fetch(`${apiURL}/all`)

      if(!res.ok) throw new Error("Something went wrong!");

      const data = await res.json();

      console.log(data);

      setCountries(data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div className="all__country__wrapper">
      <div className="courty__top"></div>

      <div className="country__bottom">
      {isLoading && !error && <h4>Loading........</h4>}
        {error && !isLoading && <h4>{error}</h4>}

        {countries?.map((country) => (
          <Link to={`/country/${country.name.common}/all`}>
            <div className="country__card">
              <div className="country__img">
                {/* <img src={country.flags.png} alt="" /> */}
              </div>

              <div className="country__data">
                <h3>{country.name.common}</h3>
                <h6>
                  {" "}
                  Population:{" "}
                  {new Intl.NumberFormat().format(country.population)}
                </h6>
                <h6> Region: {country.region}</h6>
                <h6>Capital: {country.capital}</h6>
              </div>
            </div>
          </Link>
        ))}
        
      </div>
    </div>
  )
}

export default AllCountries