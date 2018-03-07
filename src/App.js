import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';


const cities = [
  'Santiago, Chile',
  'Buenos Aires, Argentina',
  'Ciudad de México, México',
  'Madrid, España',
  'Bogotá, Colombia',
  'Sao Paulo, Brazil',
  'Lima, Peru'
];

class App extends Component {
    constructor() {
    super()
    this.state= {
      city: null
    }
  }

  handleSelectionLocation = (city) => {
    this.setState({city});
    console.log(`handleSelectionLocation ${city}`);
  }

  render() {
    const { city } = this.state;
    return (
    <MuiThemeProvider>
      <Grid>
        <Row>
          <Col xs={12}>
            <AppBar title='Weather Location'/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
            cities = { cities }
            onSelectedLocation = {this.handleSelectionLocation}>
            </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper zDepth={4}>
              <div className="detail">
              {
                city === null ? <h2>No se seleccionó ninguna cuidad</h2> : <ForecastExtended city = {city}>
                
              </ForecastExtended>
              }
              
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    </MuiThemeProvider>
    /*
      <MuiThemeProvider>
        <div className="App">
        <LocationList
        cities = { cities }
        onSelectedLocation = {this.handleSelectionLocation}>
        </LocationList>
        </div>
        </MuiThemeProvider>
        */
    );
  }
}

export default App;