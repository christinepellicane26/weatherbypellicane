import React, {Component} from 'react';
import Titles from './components/titles';
import Weather from './components/weather';



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      descrption: undefined,
      error: undefined,

    }
  }
   
  
  getWeather = async (event) => {
    event.preventDefault()
    const city = this.state.city
    const country = this.state.country
    console.log(process.env.REACT_APP_WEATHER)
    const API_KEY = '7c47b90b4eab8a1af736cb499b4041fa'
   
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&apiid=524901&APPID=${API_KEY}`);
    const data = await api_call.json();
    
 
    if (city && country){
      this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    });
  

  } else {
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: "Please enter a value."

  });
}
  }

  
  handleChange =(event)=>{
    this.setState({[event.target.name]: event.target.value})
  }

  render () {
    console.log(this.state)
    return (
        <div>
          <Titles />
          <div>
          <form onSubmit = {this.getWeather}>
               <input onChange={this.handleChange} type = "text" name = "city" placeholder = "City..."/>
               <input onChange ={this.handleChange} type = "text" name = "country" placeholder = "Country..."/>
               <button type ='submit'>Get Weather</button>
           </form>
           </div>
          <Weather temperature={this.state.temperature}
                   city={this.state.city} 
                   country={this.state.country}
                   humidity={this.state.humidity}
                   description={this.state.description}
                   error={this.state.error}   />

        </div>

    );
    }
};



export default App;