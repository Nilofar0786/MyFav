import React, { useState } from "react";
import "./App.css";

const locationData = {
  India: {
    image: "/images/india.jpg",

    states: {
      Maharashtra: {
        image: "/images/maharashtra.jpg",

        cities: {
          Nagpur: {
            image: "/images/nagpur.jpg",
          },

          Wardha: {
            image: "/images/wardha.jpg",
          },

          Pune: {
            image: "/images/pune.jpg",
          },

          Mumbai: {
            image: "/images/mumbai.jpg",
          },
        },
      },

      Rajasthan: {
        image: "/images/rajasthan.jpg",

        cities: {
          Jaipur: {
            image: "/images/jaipur.jpg",
          },

          Udaipur: {
            image: "/images/udaipur.jpg",
          },

          Jodhpur: {
            image: "/images/jodhpur.jpg",
          },
        },
      },

      Goa: {
        image: "/images/goa.jpg",

        cities: {
          Panaji: {
            image: "/images/panaji.jpg",
          },

          Margao: {
            image: "/images/margao.jpg",
          },

          Calangute: {
            image: "/images/calangute.jpg",
          },
        },
      },

      Kerala: {
        image: "/images/kerala.jpg",

        cities: {
          Kochi: {
            image: "/images/kochi.jpg",
          },

          Munnar: {
            image: "/images/munnar.jpg",
          },

          Alleppey: {
            image: "/images/alleppey.jpg",
          },
        },
      },
    },
  },

  USA: {
    image: "/images/usa.jpg",

    states: {
      California: {
        image: "/images/california.jpg",

        cities: {
          LosAngeles: {
            image: "/images/los-angeles.jpg",
          },

          SanFrancisco: {
            image: "/images/san-francisco.jpg",
          },
        },
      },

      Texas: {
        image: "/images/texas.jpg",

        cities: {
          Houston: {
            image: "/images/houston.jpg",
          },

          Dallas: {
            image: "/images/dallas.jpg",
          },
        },
      },
    },
  },

  Australia: {
    image: "/images/australia.jpg",

    states: {
      "New South Wales": {
        image: "/images/new-south-wales.jpg",

        cities: {
          Sydney: {
            image: "/images/sydney.jpg",
          },

          Newcastle: {
            image: "/images/newcastle.jpg",
          },
        },
      },

      Victoria: {
        image: "/images/victoria.jpg",

        cities: {
          Melbourne: {
            image: "/images/melbourne.jpg",
          },
        },
      },
    },
  },
};

function App() {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  // ---------------------------------------
  // COUNTRY DATA
  // ---------------------------------------

  const selectedCountry = country
    ? locationData[country]
    : null;

  // ---------------------------------------
  // STATE DATA
  // ---------------------------------------

  const selectedState =
    selectedCountry && state
      ? selectedCountry.states[state]
      : null;

  // ---------------------------------------
  // CITY DATA
  // ---------------------------------------

  const selectedCity =
    selectedState && city
      ? selectedState.cities[city]
      : null;

  // ---------------------------------------
  // COUNTRY CHANGE
  // ---------------------------------------

  const handleCountryChange = (e) => {
    const value = e.target.value;

    setCountry(value);

    // Reset state and city
    setState("");
    setCity("");
  };

  // ---------------------------------------
  // STATE CHANGE
  // ---------------------------------------

  const handleStateChange = (e) => {
    const value = e.target.value;

    setState(value);

    // Reset city
    setCity("");
  };

  // ---------------------------------------
  // CITY CHANGE
  // ---------------------------------------

  const handleCityChange = (e) => {
    const value = e.target.value;

    setCity(value);
  };

  // ---------------------------------------
  // IMAGE TO DISPLAY
  // ---------------------------------------

  let displayImage = "/images/default.jpg";
  let displayTitle = "Choose a Location";

  // Country image
  if (selectedCountry) {
    displayImage = selectedCountry.image;
    displayTitle = country;
  }

  // State image
  if (selectedState) {
    displayImage = selectedState.image;
    displayTitle = state;
  }

  // City image
  if (selectedCity) {
    displayImage = selectedCity.image;
    displayTitle = city;
  }

  return (
    <div className="app">

      <div className="main-container">

        {/* =============================== */}
        {/* HEADER */}
        {/* =============================== */}

        <div className="header">

          <p className="top-heading">
            PICK YOUR NEXT ADVENTURE
          </p>

          <h1>
            My Favourites
          </h1>

          <p className="subtitle">
            Choose a country, state and city
          </p>

        </div>


        {/* =============================== */}
        {/* DROPDOWNS */}
        {/* =============================== */}

        <div className="dropdown-container">

          {/* COUNTRY */}

          <div className="dropdown country">

            <select
              value={country}
              onChange={handleCountryChange}
            >

              <option value="">
                Country
              </option>

              {Object.keys(locationData).map(
                (countryName) => (
                  <option
                    key={countryName}
                    value={countryName}
                  >
                    {countryName}
                  </option>
                )
              )}

            </select>

            <span className="arrow">
              ▼
            </span>

          </div>


          {/* STATE */}

          <div className="dropdown state">

            <select
              value={state}
              onChange={handleStateChange}
              disabled={!selectedCountry}
            >

              <option value="">
                State
              </option>

              {selectedCountry &&
                Object.keys(
                  selectedCountry.states
                ).map((stateName) => (

                  <option
                    key={stateName}
                    value={stateName}
                  >
                    {stateName}
                  </option>

                ))}

            </select>

            <span className="arrow">
              ▼
            </span>

          </div>


          {/* CITY */}

          <div className="dropdown city">

            <select
              value={city}
              onChange={handleCityChange}
              disabled={!selectedState}
            >

              <option value="">
                City
              </option>

              {selectedState &&
                Object.keys(
                  selectedState.cities
                ).map((cityName) => (

                  <option
                    key={cityName}
                    value={cityName}
                  >
                    {cityName}
                  </option>

                ))}

            </select>

            <span className="arrow">
              ▼
            </span>

          </div>

        </div>


        {/* =============================== */}
        {/* IMAGE BOX */}
        {/* =============================== */}

        <div className="image-container">

          <img
            src={displayImage}
            alt={displayTitle}
            className="location-image"
          />

          <div className="image-content">

            <h2>
              {displayTitle}
            </h2>

            {city && (
              <p>
                {city}, {state}, {country}
              </p>
            )}

            {!city && state && (
              <p>
                {state}, {country}
              </p>
            )}

            {!state && country && (
              <p>
                {country}
              </p>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;