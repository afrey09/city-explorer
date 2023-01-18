import React from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Weather from './Weather';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: [],
      error: false,
      errorMessage: '',
      weatherData: [],
      showWeather: false


    }
  }

  handleInput = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  getCityData = async (e) => {
    e.preventDefault();

    try {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`

      let cityDataFromAxios = await axios.get(url)

      let lat = cityDataFromAxios.data[0].lat
       let lon = cityDataFromAxios.data[0].lon
      
       this.handleGetWeather (lat,lon);
       
       console.log(url);
       console.log(cityDataFromAxios);

      this.setState({
        cityData: cityDataFromAxios.data[0],
        error: false,
        cityMap: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&size=500x500&zoom=14`
      })
      //handleWeather
    }
    catch (error) {
      console.log(error);
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }
  }

  handleGetWeather = async (lat, lon) => {
    try {

      //TODO: build URL
      let url = `${process.env.REACT_APP_SERVER}/weather?lat=${lat}&lon=${lon}&searchQuery=${this.state.city}`;
      
      //TODO: Use axios to hit my server
      let weatherDataFromAxios = await axios.get(url);
      
      //TODO: Save that weather data to state

      console.log('ashdflaksdfhaslkdfjh',weatherDataFromAxios);
      

      this.setState({
        weatherData: weatherDataFromAxios.data,
        showWeather: true
      })

    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }
  }
  render() {
    return (

      <div className="App">
        <header className="App-Header">
          <h1>City Explore</h1>
        </header>
        <form onSubmit={this.getCityData}>
          <label htmlFor="">Pick a City!
            <input type="text" onInput={this.handleInput} />
            <button type='submit'>Explore</button>
          </label>
        </form>

        {

          this.state.error


            ? <p>{this.state.errorMessage}</p>


            :<>
             <Card style={{ width: '18rem' }}>
              <Card.Body>
                
                <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}`} alt={this.state.cityData.display_name} />

                <Card.Title>{this.state.cityData.display_name}</Card.Title>
                <Card.Text>{this.state.cityData.lat}</Card.Text>
                <Card.Text>{this.state.cityData.lon}</Card.Text>


              </Card.Body>
            </Card>
            {this.state.showWeather&&<Weather weatherData={this.state.weatherData}/>}
            </>
        }
      </div>


    );
  }
}



export default App;
