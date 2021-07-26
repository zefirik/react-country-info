import React from 'react';
import Header from './components/header';
import Form from './components/form';
import Country from './components/country';
import './App.css';


class App extends React.Component{
  
  state = {
    official : undefined,
    official_native : undefined,
    capital: undefined,
    currency: undefined,
    language: undefined,
    flag: undefined,
    error: undefined,
  };



  gettingCountry = async (event) =>{
    event.preventDefault();
    
    const country = event.target.elements.country.value;
    const api_url = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
    
    const data = await api_url.json();
    console.log(data);
  


    if(api_url.status !== 404){
      this.setState({
        official : data[0].name,
        official_native : data[0].nativeName,
        capital: data[0].capital,
        currency: data[0].currencies[0].name,
        language:data[0].languages[0].name,
        flag: data[0].flag,
        error: undefined
      });
    } else{
      this.setState({
        official : undefined,
        official_native : undefined,
        capital: undefined,
        currency: undefined,
        language: undefined,
        flag: undefined,
        error: "You don't enter the actual country!"
      });
    }
  }

render(){
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Form dataForm = {this.gettingCountry} />
        <Country 
        official = {this.state.official}
        official_native = {this.state.official_native}
        capital = {this.state.capital}
        currency = {this.state.currency}
        language = {this.state.language}
        flag = {this.state.flag}
        error= {this.state.error}
        />

      </div>
    </div>
  );
};
}


export default App;
