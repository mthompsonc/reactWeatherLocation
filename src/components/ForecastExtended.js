import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';

class ForecastExtended extends Component{
  render(){
    const { city } = this.props;
    return (
      <div>
        <h2 className="forecastTitle">Pronóstico Extendido para {city}</h2>
        <ForecastItem weekDay={'Miércoles'}></ForecastItem>
      </div>
    )
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;